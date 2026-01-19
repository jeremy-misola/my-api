import logging
import sys
from fastapi import FastAPI, HTTPException, Request
from pydantic import BaseModel
from typing import List, Optional
import time

# 1. Configure logging to stdout
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
    handlers=[logging.StreamHandler(sys.stdout)]
)
logger = logging.getLogger(__name__)

app = FastAPI()

class Item(BaseModel):
    id: int
    name: str
    description: Optional[str] = None

class ItemsResponse(BaseModel):
    message: str
    items: List[Item]

db = []

# 2. Middleware to log every request automatically
@app.middleware("http")
async def log_requests(request: Request, call_next):
    start_time = time.time()
    response = await call_next(request)
    process_time = (time.time() - start_time) * 1000
    
    # Log method, path, status code, and duration
    logger.info(
        f"Method: {request.method} Path: {request.url.path} "
        f"Status: {response.status_code} Completed_in: {process_time:.2f}ms"
    )
    return response

# CREATE
@app.post("/items/", response_model=Item)
def create_item(item: Item):
    logger.info(f"Creating item: ID={item.id}, Name={item.name}")
    db.append(item)
    return item

# READ (All)
@app.get("/items/", response_model=ItemsResponse)
def read_items():
    logger.info(f"Fetching all items. Current count: {len(db)}")
    return {
        "message": "hello world! this is kleff!",
        "items": db
    }

# READ (One)
@app.get("/items/{item_id}", response_model=Item)
def read_item(item_id: int):
    for item in db:
        if item.id == item_id:
            return item
    
    logger.warning(f"Read failed: Item {item_id} not found")
    raise HTTPException(status_code=404, detail="Item not found")

# UPDATE
@app.put("/items/{item_id}", response_model=Item)
def update_item(item_id: int, updated_item: Item):
    for index, item in enumerate(db):
        if item.id == item_id:
            db[index] = updated_item
            logger.info(f"Updated item {item_id}")
            return updated_item
    
    logger.error(f"Update failed: Item {item_id} not found")
    raise HTTPException(status_code=404, detail="Item not found")

# DELETE
@app.delete("/items/{item_id}")
def delete_item(item_id: int):
    for index, item in enumerate(db):
        if item.id == item_id:
            del db[index]
            logger.info(f"Deleted item {item_id}")
            return {"message": "Item deleted"}
    
    logger.error(f"Delete failed: Item {item_id} not found")
    raise HTTPException(status_code=404, detail="Item not found")
