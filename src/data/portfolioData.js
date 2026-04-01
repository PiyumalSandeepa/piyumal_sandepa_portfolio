
export const personalInfo = {
    name: "Piyumal Sandeepa",
    initials: "PS",
    title: "Computer Engineering Undergraduate",
    email: "mkpiyumalsandeepa@gmail.com",
    phone: "+94 71 326 9622",
    location: "Rathnapura, Sri Lanka",
    degree: "BSc (Hons) Computer Engineering",
    university: "University of Ruhuna",
bio: [
    `Computer Engineering undergraduate at the University of Ruhuna skilled in 
 full-stack web development with React, Node.js, Express, and Spring Boot. 
 Familiar with DevOps basics including Docker, Jenkins, and AWS. Currently 
 exploring machine learning, AI, and IoT through coursework and hands-on projects.`,
    `Vice Chairman of IEEE IAS Ruhuna Student Chapter with strong leadership, 
 communication, and teamwork skills. Actively seeking software engineering 
 internship opportunities.`,
],
    yearsLearning: 3,
    projectCount: 10,
    certCount: 5,
    linesOfCode: 20000,
    resumeUrl: "/piyumal_sandeepa_CV.pdf",
    profileImage: "/profile.jpg",
    social: {
        github: "https://github.com/PiyumalSandeepa",
        linkedin: "https://www.linkedin.com/in/piyumal-sandeepa-9ab976237",
        instagram: "https://www.instagram.com/piyumal_sandeepa_99?igsh=MXB3OXVpOGpnbnk1Mg==",
    },
};

export const typingPhrases = [
    "Computer Engineering Student",
    "Full-Stack Developer",
    "React Developer",
    "Node.js & Express Developer",
    "Machine Learning Enthusiast",
    "DevOps Learner",
    "Problem Solver",
    "IEEE Volunteer Leader",
];

export const skillsData = {
    frontend: [
        { name: "React.js / Vite", icon: "react" },
        { name: "JavaScript (ES6+)", icon: "javascript" },
        { name: "HTML5", icon: "html5" },
        { name: "CSS3", icon: "css3" },
        { name: "TypeScript (TSX)", icon: "typescript" },
    ],
    backend: [
        { name: "Node.js", icon: "nodejs" },
        { name: "Express.js", icon: "nodejs" },
        { name: "Spring Boot", icon: "java" },
        { name: "Java", icon: "java" },
        { name: "Python", icon: "python" },
        { name: "C++", icon: "cpp" },
        { name: "REST APIs", icon: "api" },
    ],
    database: [
        { name: "MySQL", icon: "mysql" },
        { name: "Firebase", icon: "firebase" },
        { name: "MongoDB", icon: "mongodb" },
    ],
    mobile: [
        { name: "Flutter / Dart", icon: "flutter" },
        { name: "React Native (TSX)", icon: "react" },
    ],
    tools: [
        { name: "Git & GitHub", icon: "github" },
        { name: "Docker", icon: "docker" },
        { name: "AWS EC2", icon: "aws" },
        { name: "Jenkins", icon: "jenkins" },
        { name: "Jira", icon: "jira" },
        { name: "Figma", icon: "figma" },
        { name: "Postman", icon: "postman" },
        { name: "Bruno", icon: "bruno" },
    ],
};

export const projectsData = [
    {
        id: 1,
        title: "Dam Break Flood Early Warning System",
        description:
            "Web & mobile-based early warning system for dam safety monitoring and emergency flood risk management.",
        image:
            "https://www.attractionsinsrilanka.com/wp-content/uploads/2020/05/Victoria-Dam1.jpg",
        tags: ["React", "Spring Boot", "React Native", "MySQL", "REST API"],
        category: ["web", "mobile"],
        liveUrl: "#",
        githubUrl: "https://github.com/ushankamesh-devX/dam-disaster-alert-system.git",
        details: {
            subtitle: "Real-time Dam Safety Monitoring & Emergency Alert Platform",
            duration: "Ongoing | 4-Member Team",
            role: "Full-Stack Developer",
            longDescription: `A comprehensive early warning system designed to monitor dam safety conditions 
            and alert communities in real-time during flood emergencies. The system integrates web and mobile 
            platforms to provide seamless communication between authorities and the public, ensuring rapid 
            response during critical dam break scenarios.`,
            features: [
                "Real-time dam safety monitoring dashboard with data visualization",
                "Mobile app for community alerts and emergency notifications using React Native (TSX)",
                "RESTful API architecture connecting frontend, backend, and mobile platforms",
                "Community feedback system for reporting ground-level observations",
                "Emergency response guidance and coordination with local authorities",
                "MySQL database for storing All data related to dam conditions, alerts,news and user feedback",
                "API testing and validation using Bruno for system integration",
            ],
            technologies: [
                { name: "React (Vite)", purpose: "Frontend web dashboard" },
                { name: "Spring Boot", purpose: "Backend REST API server" },
                { name: "React Native (TSX)", purpose: "Cross-platform mobile app" },
                { name: "MySQL", purpose: "Relational database management" },
                { name: "TypeScript", purpose: "Type-safe mobile development" },
                { name: "Bruno", purpose: "API testing and documentation" },
            ],
            challenges: [
                "Integrating real-time data with web and mobile platforms simultaneously",
                "Designing a reliable alert system that works under emergency network conditions",
                "Building a unified API that serves both web and mobile clients efficiently",
            ],
            screenshots: [
                "/dam-dashboard.png",
                "/dam-mobile.png",
            ],
        },
    },
    {
        id: 2,
        title: "DriveLock – Smart Anti-Theft Vehicle Security",
        description:
            "Real-time vehicle monitoring dashboard with IoT integration (ESP32, Raspberry Pi, GPS, RFID).",
        image:
            "https://abclocksmith.net/wp-content/uploads/2020/12/Why-You-Need-a-Car-Alarm-on-Your-Vehicle.jpg",
        tags: ["React", "Node.js", "Firebase", "ESP32", "IoT"],
        category: "web",
        liveUrl: "#",
        githubUrl: "https://github.com/PiyumalSandeepa/vehicle-security-system.git",
        details: {
            subtitle: "IoT-Powered Smart Vehicle Security & Monitoring System",
            duration: "Completed | 4-Member Team",
            role: "Frontend Developer & System Integrator",
            longDescription: `An intelligent anti-theft vehicle security system that combines IoT hardware 
            with a web-based admin dashboard. The system provides real-time vehicle tracking, face recognition 
            for door unlocking, RFID-based authentication, and comprehensive vehicle status monitoring 
            through a responsive web interface.`,
            features: [
                "Web-based admin dashboard for real-time vehicle monitoring and management",
                "GPS tracking with live location updates on interactive maps",
                "Face recognition door unlock system using Raspberry Pi camera module",
                "RFID-based vehicle authentication for authorized access",
                "Real-time data synchronization using Firebase Realtime Database",
                "Vehicle status monitoring including engine state, door locks, and battery",
                "Alert notifications for unauthorized access attempts",
                "Historical trip data and route playback",
            ],
            technologies: [
                { name: "React", purpose: "Frontend admin dashboard" },
                { name: "Node.js / Express", purpose: "Backend API server" },
                { name: "Firebase", purpose: "Real-time data sync & authentication" },
                { name: "ESP32", purpose: "IoT microcontroller for sensors" },
                { name: "Raspberry Pi", purpose: "Face recognition processing" },
                { name: "GPS Module", purpose: "Vehicle location tracking" },
                { name: "RFID Module", purpose: "Access authentication" },
            ],
            challenges: [
                "Synchronizing data between multiple IoT devices and the web dashboard in real-time",
                "Implementing reliable face recognition on resource-constrained Raspberry Pi hardware",
                "Handling intermittent network connectivity for GPS tracking updates",
            ],
            screenshots: [
                "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=500&fit=crop&auto=format",
                "https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=800&h=500&fit=crop&auto=format",
            ],
        },
    },
    {
        id: 3,
        title: "RecipeHub – DevOps Project",
        description:
            "Containerized full-stack web app deployed on AWS EC2 using Docker with CI/CD pipelines.",
        image:
            "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&h=400&fit=crop&auto=format",
        tags: ["React", "Node.js", "Docker", "AWS", "Jenkins", "CI/CD"],
        category: "devops",
        liveUrl: "#",
        githubUrl: "https://github.com/PiyumalSandeepa/Recipehub-repo.git",
        details: {
            subtitle: "Cloud-Deployed Recipe Platform with Automated CI/CD Pipeline",
            duration: "Completed | Individual Project",
            role: "Full-Stack Developer & DevOps Engineer",
            longDescription: `A full-stack recipe sharing web application containerized with Docker and 
            deployed on AWS EC2 infrastructure. The project demonstrates modern DevOps practices including 
            automated CI/CD pipelines, containerization, and cloud deployment for a production-ready 
            application.`,
            features: [
                "Full-stack recipe management application with CRUD operations",
                "Docker containerization for consistent deployment across environments",
                "Docker Hub integration for image storage and version management",
                "Automated CI/CD pipeline with Jenkins",
                "AWS EC2 deployment with production-grade configuration",
                "GitHub Actions integration for automatic build and deployment",
                "RESTful API with Express.js backend and MySQL database",
                "Responsive React frontend with recipe browsing and search",
            ],
            technologies: [
                { name: "React", purpose: "Frontend user interface" },
                { name: "Node.js / Express", purpose: "Backend REST API" },
                { name: "MySQL", purpose: "Database for recipes and users" },
                { name: "Docker", purpose: "Application containerization" },
                { name: "Docker Hub", purpose: "Container image registry" },
                { name: "Jenkins", purpose: "CI/CD pipeline automation" },
                { name: "AWS EC2", purpose: "Cloud hosting infrastructure" },
                { name: "GitHub", purpose: "Source control & webhooks" },
            ],
            challenges: [
                "Configuring Jenkins pipelines to handle build, test, and deploy stages reliably",
                "Managing Docker networking between frontend, backend, and database containers",
                "Setting up secure AWS EC2 instances with proper security groups and access controls",
            ],
            screenshots: [
                "/dockerize login page.png",
                "/Dockerize catelog page.png",
            ],
        },
    },
    {
        id: 4,
        title: "Online Concert Ticket Booking System",
        description:
            "Full-stack event ticket booking app with JWT authentication and role-based access control.",
        image:
            "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=400&fit=crop&auto=format",
        tags: ["React", "Node.js", "Express", "MySQL", "JWT"],
        category: "web",
        liveUrl: "#",
        githubUrl: "https://github.com/PiyumalSandeepa/Ticket-Booking-System.git",
        details: {
            subtitle: "Secure Event Ticketing Platform with Authentication & Authorization",
            duration: "Completed | Individual Project",
            role: "Full-Stack Developer",
            longDescription: `A comprehensive online concert ticket booking system that enables users to 
            browse events, select seats, and securely purchase tickets. The application features robust 
            authentication with JWT tokens, role-based access control for admin and user functionalities, 
            and a responsive design built with modern React practices.`,
            features: [
                "User registration and login with JWT-based authentication",
                "Role-based access control (Admin, User) for different functionalities",
                "Interactive ticket booking workflow",
                "Payment processing and booking confirmation",
                "Admin panel for event management (create, edit, delete events)",
                "Responsive UI built with React and Vite for fast performance",
            ],
            technologies: [
                { name: "React (Vite)", purpose: "Frontend SPA with fast HMR" },
                { name: "Node.js", purpose: "Server-side runtime" },
                { name: "Express.js", purpose: "RESTful API framework" },
                { name: "MySQL", purpose: "Users, events, and bookings database" },
                { name: "JWT", purpose: "Stateless authentication tokens" },
                { name: "CSS", purpose: "Responsive styling" },
                { name: "Bcrypt", purpose: "Password hashing and security" },
            ],
            challenges: [
            ],
            screenshots: [
                "/concert admin.png",
                "/concert login.png",
                "/concert page.png",
            ],
        },
    },
    {
        id: 5,
        title: "Lost & Find Mobile Application",
        description:
            "Mobile app for reporting lost/found items with Firebase backend and real-time communication.",
        image:
            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&auto=format",
        tags: ["Flutter", "Firebase", "Dart"],
        category: "mobile",
        liveUrl: "#",
        githubUrl: "https://github.com/Kavi-Z/Lost_And_Found_Mobile_App.git",
        details: {
            subtitle: "Cross-Platform Lost & Found Item Reporting Mobile App",
            duration: "Completed | 2-Member Team",
            role: "Mobile App Developer",
            longDescription: `A mobile application designed to help users report lost and found items 
            within a community. The app enables direct communication between item owners and finders, 
            with features like image uploads, status tracking, and real-time notifications. Built with 
            Flutter for cross-platform compatibility and Firebase for backend services.`,
            features: [
                "Lost and found item posting with detailed descriptions and categories",
                "Image upload and gallery for item identification",
                "Item status updates (Lost → Found → Returned)",
                "User profile management with contact information",
                "Direct messaging between item owners and finders",
                "Search and filter functionality by category, location, and date",
                "Push notifications for matching items and messages",
                "Firebase Authentication for secure user access control",
            ],
            technologies: [
                { name: "Flutter", purpose: "Cross-platform mobile UI framework" },
                { name: "Dart", purpose: "Programming language for Flutter" },
                { name: "Firebase Firestore", purpose: "NoSQL cloud database" },
                { name: "Firebase Auth", purpose: "User authentication & access control" },
                { name: "Firebase Storage", purpose: "Image upload and storage" },
                { name: "Firebase Messaging", purpose: "Push notifications" },
            ],
            challenges: [
                "Implementing efficient image compression and upload to reduce bandwidth usage",
                "Designing a matching algorithm to suggest potential item matches automatically",
                "Handling offline data synchronization when network connectivity is poor",
            ],
            screenshots: [
                "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop&auto=format",
                "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop&auto=format",
            ],
        },
    },
    {
        id: 6,
        title: "Software Testing & QA – To-Do App",
        description:
            "Comprehensive testing project with TDD, BDD, UI testing, load testing, and code quality analysis.",
        image:
            "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop&auto=format",
        tags: ["Spring Boot", "JUnit", "Selenium", "SonarQube", "CI/CD"],
        category: "devops",
        liveUrl: "#",
        githubUrl: "https://github.com/PiyumalSandeepa/QA--To-Do-List.git",
        details: {
            subtitle: "Enterprise-Grade Testing & Quality Assurance Implementation",
            duration: "Completed | Individual Project",
            role: "QA Engineer & Developer",
            longDescription: `A Spring Boot To-Do application built with a focus on software quality 
            assurance and testing best practices. The project demonstrates comprehensive testing 
            methodologies including Test-Driven Development (TDD), Behavior-Driven Development (BDD), 
            automated UI testing, performance testing, and continuous code quality monitoring.`,
            features: [
                "Test-Driven Development (TDD) with JUnit 5 for unit testing",
                "Behavior-Driven Development (BDD) with Cucumber for acceptance testing",
                "Automated UI testing with Selenium WebDriver",
                "Load testing and performance benchmarking with Apache JMeter",
                "Code quality analysis and technical debt tracking with SonarQube",
                "Automated test execution in GitHub Actions CI pipeline",
                "Code coverage reporting and quality gate enforcement",
                "Comprehensive test documentation and reporting",
            ],
            technologies: [
                { name: "Spring Boot", purpose: "Application framework" },
                { name: "JUnit 5", purpose: "Unit testing framework (TDD)" },
                { name: "Cucumber", purpose: "BDD acceptance testing" },
                { name: "Selenium", purpose: "Browser-based UI testing" },
                { name: "JMeter", purpose: "Load and performance testing" },
                { name: "SonarQube", purpose: "Code quality analysis" },
                { name: "GitHub Actions", purpose: "CI/CD pipeline" },
                { name: "Maven", purpose: "Build and dependency management" },
            ],
            challenges: [
                "Achieving high test coverage while maintaining meaningful and non-trivial test cases",
                "Configuring Selenium for reliable cross-browser automated testing",
                "Integrating multiple testing tools into a single CI pipeline without conflicts",
            ],
            screenshots: [
                "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop&auto=format",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&auto=format",
            ],
        },
    },
];

export const experienceData = [
    {
        id: 1,
        role: "Vice Chairman",
        company: "IEEE IAS Ruhuna Student Chapter",
        date: "Feb 2026 – Present",
        description:
            "Leading the IEEE Industry Applications Society student chapter. Organizing technical events, workshops, and professional development activities for engineering students.",
        tags: ["Leadership", "IEEE", "Event Management"],
        icon: "laptop",
    },
    {
        id: 2,
        role: "Program Team Lead – CareerXpo 2.0",
        company: "IEEE Student Branch, University of Ruhuna",
        date: "Aug 2025 – Jan 2026",
        description:
            "Led the program team for CareerXpo 2.0, coordinating event logistics, speaker sessions, and career development workshops for university students.",
        tags: ["Team Lead", "Event Coordination", "Career Dev"],
        icon: "building",
    },
    {
        id: 3,
        role: "PR and Finance Lead – DesignHer 1.0",
        company: "WIE Affinity Group, IEEE Student Branch, University of Ruhuna",
        date: "2025",
        description:
            "Managed public relations and financial planning for DesignHer 1.0, a women-in-engineering initiative promoting diversity in technology.",
        tags: ["PR", "Finance", "WIE"],
        icon: "building",
    },
    {
        id: 4,
        role: "Internship Trainee",
        company: "People's Bank, Sri Lanka",
        date: "Aug 2022 – Mar 2023",
        description:
            "Gained hands-on experience in banking operations, customer service, and financial systems. Developed professional communication and organizational skills in a corporate environment.",
        tags: ["Banking", "Operations", "Customer Service"],
        icon: "building",
    },
];

export const educationData = [
    {
        id: 1,
        role: "BSc (Hons) in Computer Engineering",
        company: "University of Ruhuna",
        date: "2023 – Present",
        description:
            "Studying Software Engineering, Data Structures, Algorithms, Machine Learning, IoT, DevOps, and Web Technologies. Active IEEE volunteer and student leader.",
        tags: ["DSA", "ML", "IoT", "DevOps", "Full-Stack"],
        icon: "university",
    },
    {
        id: 2,
        role: "Certificate in Advanced Java Programming",
        company: "Sabaragamuwa University of Sri Lanka",
        date: "2022",
        description:
            "Completed an advanced Java programming certificate covering OOP, multithreading, collections, JDBC, and application development with Java SE.",
        tags: ["Java", "OOP", "JDBC"],
        icon: "award",
    },
    {
        id: 3,
        role: "School Education",
        company: "R/Gankanda Central College – Pelmadulla",
        date: "Completed",
        description:
            "Completed school education with a focus on Mathematics and Science streams. Active in extracurricular activities and leadership roles.",
        tags: ["Maths", "Science", "Leadership"],
        icon: "school",
    },
];