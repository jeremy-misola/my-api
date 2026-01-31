# Developer Portfolio

A modern, responsive developer portfolio built with plain HTML, CSS, and JavaScript. Features a dark theme, smooth animations, and is containerized with Docker for easy deployment.

## Features

- 🎨 **Dark Theme**: Modern dark color scheme with accent colors
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- ⚡ **Fast & Lightweight**: No frameworks, pure vanilla JavaScript
- 🌐 **CORS Enabled**: Server configured to accept requests from any origin
- 🐳 **Docker Ready**: Complete Docker setup for easy deployment
- 📧 **Contact Form**: Functional contact form with validation
- 🎯 **Single Page**: Smooth scrolling navigation
- 🎭 **Animations**: Smooth transitions and scroll-triggered animations

## Sections

1. **Home/Hero** - Eye-catching introduction with call-to-action
2. **About** - Personal bio and statistics
3. **Skills** - Interactive skill bars showing proficiency levels
4. **Projects** - Portfolio showcase with project details
5. **Resume** - Resume download and preview section
6. **Contact** - Contact form and social links

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js with Express.js
- **CORS**: cors middleware for cross-origin requests
- **Styling**: CSS Grid, Flexbox, CSS Animations
- **Fonts**: Google Fonts (Inter, JetBrains Mono)
- **Icons**: Font Awesome
- **Container**: Docker with multi-stage build

## Installation

### Option 1: Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/developer-portfolio.git
   cd developer-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

### Option 2: Production Server

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/developer-portfolio.git
   cd developer-portfolio
   ```

2. **Install production dependencies**
   ```bash
   npm install --production
   ```

3. **Start the production server**
   ```bash
   npm start
   ```

4. **Access the portfolio** at `http://localhost:3000`

## Docker Deployment

### Build and Run with Docker

1. **Build the Docker image**
   ```bash
   docker build -t developer-portfolio .
   ```

2. **Run the container**
   ```bash
   docker run -p 3000:3000 developer-portfolio
   ```

3. **Access the portfolio** at `http://localhost:3000`

### Docker Compose (Recommended)

1. **Create docker-compose.yml**
   ```yaml
   version: '3.8'
   services:
     portfolio:
       build: .
       ports:
         - "3000:3000"
       restart: unless-stopped
   ```

2. **Start the service**
   ```bash
   docker-compose up -d
   ```

3. **Stop the service**
   ```bash
   docker-compose down
   ```

## CORS Configuration

The server is configured to accept requests from any origin:

```javascript
app.use(cors({
    origin: '*', // Allow requests from any origin
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    credentials: true
}));
```

This allows your portfolio to be embedded in other websites or accessed via APIs from any domain.

## Customization

### Personal Information

Edit the `portfolioData.personalInfo` object in `js/data.js`:

```javascript
personalInfo: {
    name: "Your Name",
    title: "Your Title",
    email: "your@email.com",
    phone: "+1 (555) 123-4567",
    location: "Your City, Country",
    bio: "Your bio here...",
    experience: "X+",
    projects: "XX+",
    technologies: "XX+"
}
```

### Projects

Add or modify projects in the `portfolioData.projects` array:

```javascript
projects: [
    {
        id: 1,
        title: "Project Name",
        description: "Project description...",
        technologies: ["Tech1", "Tech2", "Tech3"],
        image: "🚀",
        liveUrl: "https://your-project.com",
        githubUrl: "https://github.com/yourusername/project",
        category: "Full Stack"
    }
]
```

### Skills

Update the skills in `portfolioData.skills`:

```javascript
skills: {
    frontend: [
        { name: "HTML5/CSS3", level: 95 },
        { name: "JavaScript", level: 90 }
    ],
    backend: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 }
    ]
}
```

### Styling

Modify the CSS in `css/styles.css` to change colors, fonts, and layout:

```css
:root {
    --bg-color: #0f1115;
    --accent-color: #4f46e5;
    --text-primary: #ffffff;
    /* ... other variables */
}
```

## API Endpoints

The server provides the following API endpoints:

- `GET /api/health` - Health check
- `GET /api/portfolio` - Portfolio data
- `POST /api/contact` - Contact form submission

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- **Lightweight**: No heavy frameworks
- **Optimized**: Multi-stage Docker build
- **Fast**: Static file serving with Express
- **Secure**: Non-root user in Docker container

## License

MIT License - see LICENSE file for details.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## Support

If you encounter any issues or have questions, please:

1. Check the [Issues](https://github.com/yourusername/developer-portfolio/issues) page
2. Create a new issue with detailed information
3. Include your browser version and operating system

## Future Enhancements

- [ ] Dark/light theme toggle
- [ ] Blog section
- [ ] Project filtering
- [ ] Animation improvements
- [ ] Accessibility enhancements
- [ ] Performance optimizations

---

**Built with ❤️ using vanilla JavaScript and Docker**