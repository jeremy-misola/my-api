from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI()

# A simple model for our data (e.g., an Item)
class Item(BaseModel):
    id: int
    name: str
    description: Optional[str] = None

# In-memory "database"
db = []

# CREATE
@app.post("/items/", response_model=Item)
def create_item(item: Item):
    db.append(item)
    return item

# READ (All)
@app.get("/items/", response_model=List[Item])
def read_items():
    return db

# READ (One)
@app.get("/items/{item_id}", response_model=Item)
def read_item(item_id: int):
    for item in db:
        if item.id == item_id:
            return item
    raise HTTPException(status_code=404, detail="Item not found")

# UPDATE
@app.put("/items/{item_id}", response_model=Item)
def update_item(item_id: int, updated_item: Item):
    for index, item in enumerate(db):
        if item.id == item_id:
            db[index] = updated_item
            return updated_item
    raise HTTPException(status_code=404, detail="Item not found")

# DELETE
@app.delete("/items/{item_id}")
def delete_item(item_id: int):
    for index, item in enumerate(db):
        if item.id == item_id:
            del db[index]
            return {"message": "Item deleted"}
    raise HTTPException(status_code=404, detail="Item not found")
