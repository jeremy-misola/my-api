// Portfolio Data
const portfolioData = {
    // Personal Information
    personalInfo: {
        name: "Developer Name",
        title: "Full Stack Developer",
        email: "email@example.com",
        phone: "+1 (555) 123-4567",
        location: "San Francisco, CA",
        bio: "I'm a passionate developer with experience in creating modern, scalable web applications. My journey in development started with curiosity and has grown into a career dedicated to building exceptional digital experiences.",
        experience: "5+",
        projects: "50+",
        technologies: "15+"
    },

    // Skills Data
    skills: {
        frontend: [
            { name: "HTML5/CSS3", level: 95 },
            { name: "JavaScript", level: 90 },
            { name: "React", level: 85 },
            { name: "Vue.js", level: 80 },
            { name: "TypeScript", level: 85 },
            { name: "SASS/SCSS", level: 90 }
        ],
        backend: [
            { name: "Node.js", level: 90 },
            { name: "Python", level: 85 },
            { name: "Express", level: 85 },
            { name: "SQL/NoSQL", level: 80 },
            { name: "GraphQL", level: 75 },
            { name: "RESTful APIs", level: 90 }
        ],
        tools: [
            { name: "Git/GitHub", level: 90 },
            { name: "Docker", level: 80 },
            { name: "AWS", level: 75 },
            { name: "CI/CD", level: 70 },
            { name: "Webpack", level: 80 },
            { name: "Jest", level: 75 }
        ]
    },

    // Projects Data
    projects: [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database. Features include user authentication, product catalog, shopping cart, and checkout flow.",
            technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
            image: "🛒",
            liveUrl: "#",
            githubUrl: "#",
            category: "Full Stack"
        },
        {
            id: 2,
            title: "Task Management App",
            description: "A modern task management application with real-time collaboration features. Built with Vue.js and Firebase, allowing teams to organize projects and track progress.",
            technologies: ["Vue.js", "Firebase", "Vuex", "SCSS"],
            image: "📋",
            liveUrl: "#",
            githubUrl: "#",
            category: "Frontend"
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description: "Interactive weather dashboard that provides real-time weather data and forecasts. Features include location-based weather, 5-day forecast, and weather alerts.",
            technologies: ["JavaScript", "Chart.js", "Weather API", "CSS3"],
            image: "🌤️",
            liveUrl: "#",
            githubUrl: "#",
            category: "Frontend"
        },
        {
            id: 4,
            title: "Blog CMS",
            description: "Content Management System for blogs with admin panel, user management, and SEO optimization. Built with Python Flask and PostgreSQL.",
            technologies: ["Python", "Flask", "PostgreSQL", "Bootstrap"],
            image: "📝",
            liveUrl: "#",
            githubUrl: "#",
            category: "Backend"
        },
        {
            id: 5,
            title: "Portfolio Generator",
            description: "Dynamic portfolio generator that creates personalized developer portfolios from GitHub data. Features automatic project discovery and skill analysis.",
            technologies: ["React", "GitHub API", "Node.js", "Docker"],
            image: "🚀",
            liveUrl: "#",
            githubUrl: "#",
            category: "Full Stack"
        },
        {
            id: 6,
            title: "Chat Application",
            description: "Real-time chat application with WebSocket support, user authentication, and message history. Features private messaging and group chats.",
            technologies: ["Socket.io", "Node.js", "Express", "MongoDB"],
            image: "💬",
            liveUrl: "#",
            githubUrl: "#",
            category: "Backend"
        }
    ],

    // Experience Data
    experience: [
        {
            title: "Senior Developer",
            company: "Tech Company Inc.",
            duration: "2022 - Present",
            description: "Leading development teams and creating scalable web applications. Responsible for architecture decisions, code reviews, and mentoring junior developers.",
            technologies: ["React", "Node.js", "AWS", "Docker"]
        },
        {
            title: "Frontend Developer",
            company: "Creative Agency",
            duration: "2020 - 2022",
            description: "Building interactive user interfaces and client-side applications. Collaborated with designers to implement pixel-perfect designs and optimize user experience.",
            technologies: ["Vue.js", "JavaScript", "CSS3", "Webpack"]
        },
        {
            title: "Junior Developer",
            company: "Startup XYZ",
            duration: "2019 - 2020",
            description: "Developed web applications and maintained existing codebase. Gained experience in full-stack development and agile methodologies.",
            technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL"]
        }
    ],

    // Education Data
    education: [
        {
            degree: "Bachelor's Degree in Computer Science",
            school: "University of Technology",
            duration: "2016 - 2020",
            description: "Bachelor's degree in Computer Science with focus on web development, algorithms, and software engineering principles."
        }
    ],

    // Contact Information
    contact: {
        email: "email@example.com",
        phone: "+1 (555) 123-4567",
        location: "San Francisco, CA",
        social: [
            { name: "GitHub", url: "#", icon: "fab fa-github" },
            { name: "LinkedIn", url: "#", icon: "fab fa-linkedin" },
            { name: "Twitter", url: "#", icon: "fab fa-twitter" },
            { name: "Email", url: "mailto:email@example.com", icon: "fas fa-envelope" }
        ]
    }
};

// Utility functions
const utils = {
    // Format numbers with commas
    formatNumber: (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    // Get current year for copyright
    getCurrentYear: () => {
        return new Date().getFullYear();
    },

    // Debounce function for scroll events
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Check if element is in viewport
    isInViewport: (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },

    // Format experience duration
    formatDuration: (startYear, endYear = 'Present') => {
        return `${startYear} - ${endYear}`;
    }
};