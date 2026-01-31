const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes and all origins
app.use(cors({
    origin: '*', // Allow requests from any origin
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    credentials: true
}));

// Additional CORS headers for extra security and compatibility
app.use((req, res, next) => {
    // Allow all origins
    res.header('Access-Control-Allow-Origin', '*');
    
    // Allow specific methods
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    
    // Allow specific headers
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        return res.status(200).json({});
    }
    
    next();
});

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Serve static files from assets directory
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// API endpoint for contact form (simulated)
app.post('/api/contact', express.json(), (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Please enter a valid email address'
            });
        }
        
        // Simulate sending email (in a real app, you'd use a service like SendGrid, Nodemailer, etc.)
        console.log('New contact form submission:', {
            name,
            email,
            subject,
            message,
            timestamp: new Date().toISOString()
        });
        
        // Simulate processing time
        setTimeout(() => {
            res.json({
                success: true,
                message: 'Message sent successfully! I\'ll get back to you soon.'
            });
        }, 1000);
        
    } catch (error) {
        console.error('Error processing contact form:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred while sending your message. Please try again.'
        });
    }
});

// API endpoint to get portfolio data
app.get('/api/portfolio', (req, res) => {
    try {
        // In a real application, this would fetch from a database
        // For now, we'll return the data from our data.js file
        const portfolioData = {
            personalInfo: {
                name: "Developer Name",
                title: "Full Stack Developer",
                email: "email@example.com",
                phone: "+1 (555) 123-4567",
                location: "San Francisco, CA",
                bio: "I'm a passionate developer with experience in creating modern, scalable web applications.",
                experience: "5+",
                projects: "50+",
                technologies: "15+"
            },
            skills: {
                frontend: [
                    { name: "HTML5/CSS3", level: 95 },
                    { name: "JavaScript", level: 90 },
                    { name: "React", level: 85 },
                    { name: "Vue.js", level: 80 }
                ],
                backend: [
                    { name: "Node.js", level: 90 },
                    { name: "Python", level: 85 },
                    { name: "Express", level: 85 },
                    { name: "SQL/NoSQL", level: 80 }
                ]
            },
            projects: [
                {
                    id: 1,
                    title: "E-Commerce Platform",
                    description: "A full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database.",
                    technologies: ["React", "Node.js", "MongoDB", "Express"],
                    image: "🛒",
                    liveUrl: "#",
                    githubUrl: "#",
                    category: "Full Stack"
                }
            ]
        };
        
        res.json(portfolioData);
        
    } catch (error) {
        console.error('Error fetching portfolio data:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred while fetching portfolio data'
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        version: '1.0.0'
    });
});

// Serve the main HTML file for all routes (SPA support)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Something went wrong!',
        error: process.env.NODE_ENV === 'development' ? err.message : {}
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Portfolio server running on http://localhost:${PORT}`);
    console.log(`📡 CORS enabled for all origins (*)`);
    console.log(`📁 Serving static files from: ${__dirname}`);
    console.log(`🔧 API endpoints available at:`);
    console.log(`   - GET  /api/health`);
    console.log(`   - GET  /api/portfolio`);
    console.log(`   - POST /api/contact`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('SIGINT received, shutting down gracefully');
    process.exit(0);
});

module.exports = app;