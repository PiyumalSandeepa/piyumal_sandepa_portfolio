// ============================================================
//  PIYUMAL SANDEEPA — PORTFOLIO DATA
// ============================================================

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
        `Undergraduate in Computer Engineering with a strong interest in software development, 
     problem-solving, and machine learning. Skilled in full-stack web development and database 
     management, with hands-on experience building practical applications and exploring 
     data-driven solutions.`,
        `Actively involved in IEEE volunteering and event coordination, which has helped develop 
     strong leadership, communication, and teamwork skills. Highly motivated, adaptable, and 
     committed to continuous learning, with a focus on applying modern technologies to solve 
     real-world problems.`,
    ],
    yearsLearning: 3,
    projectCount: 6,
    certCount: 3,
    coffeeCount: 1000,
    resumeUrl: "/resume.pdf",
   profileImage: "/profile.jpg",
    social: {
        github: "https://github.com/PiyumalSandeepa",
        linkedin: "https://linkedin.com/in/piyumalsandeepa",
        twitter: "https://twitter.com/",
        instagram: "https://instagram.com/",
    },
};

export const typingPhrases = [
    "Full-Stack Developer",
    "Computer Engineering Student",
    "React & Spring Boot Developer",
    "IoT Enthusiast",
    "DevOps Learner",
    "Problem Solver",
    "IEEE Volunteer Leader",
];

export const skillsData = {
    frontend: [
        { name: "React.js / Vite", icon: "react", percent: 88 },
        { name: "HTML5", icon: "html5", percent: 92 },
        { name: "CSS3", icon: "css3", percent: 88 },
        { name: "Tailwind CSS", icon: "tailwind", percent: 82 },
        { name: "JavaScript (ES6+)", icon: "javascript", percent: 88 },
        { name: "TypeScript (TSX)", icon: "typescript", percent: 72 },
    ],
    backend: [
        { name: "Node.js / Express", icon: "nodejs", percent: 85 },
        { name: "Spring Boot", icon: "java", percent: 80 },
        { name: "Java", icon: "java", percent: 82 },
        { name: "Python", icon: "python", percent: 68 },
        { name: "C++", icon: "cpp", percent: 70 },
        { name: "RESTful APIs", icon: "api", percent: 86 },
    ],
    database: [
        { name: "MySQL", icon: "mysql", percent: 84 },
        { name: "Firebase", icon: "firebase", percent: 78 },
        { name: "MongoDB", icon: "mongodb", percent: 70 },
    ],
    mobile: [
        { name: "Flutter", icon: "flutter", percent: 72 },
        { name: "React Native (TSX)", icon: "react", percent: 68 },
    ],
    tools: [
        "Git & GitHub",
        "Docker",
        "AWS EC2",
        "Jenkins",
        "Jira",
        "Figma",
        "JUnit",
        "Selenium",
        "SonarQube",
        "JMeter",
    ],
};

export const projectsData = [
    {
        id: 1,
        title: "Dam Break Flood Early Warning System",
        description:
            "Web & mobile-based early warning system for dam safety monitoring and emergency flood risk management. Built with React (Vite), Spring Boot, React Native (TSX), MySQL, and RESTful APIs.",
        image:
            "https://images.unsplash.com/photo-1541185934-01b600ea069c?w=600&h=400&fit=crop&auto=format",
        tags: ["React", "Spring Boot", "React Native", "MySQL"],
        category: "web",
        liveUrl: "#",
        githubUrl: "https://github.com/PiyumalSandeepa",
    },
    {
        id: 2,
        title: "DriveLock – Smart Anti-Theft Vehicle Security",
        description:
            "Web-based admin dashboard for real-time vehicle monitoring with IoT integration (ESP32, Raspberry Pi, GPS, RFID). Features GPS tracking, face recognition, and vehicle status monitoring.",
        image:
            "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop&auto=format",
        tags: ["React", "Node.js", "Firebase", "IoT"],
        category: "web",
        liveUrl: "#",
        githubUrl: "https://github.com/PiyumalSandeepa",
    },
    {
        id: 3,
        title: "RecipeHub – DevOps Project",
        description:
            "Containerized full-stack web app deployed on AWS EC2 using Docker. Automated CI/CD pipelines with Jenkins and GitHub for streamlined integration, build, and deployment.",
        image:
            "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&h=400&fit=crop&auto=format",
        tags: ["React", "Node.js", "Docker", "AWS", "Jenkins"],
        category: "devops",
        liveUrl: "#",
        githubUrl: "https://github.com/PiyumalSandeepa",
    },
    {
        id: 4,
        title: "Online Concert Ticket Booking System",
        description:
            "Full-stack event ticket booking app with JWT authentication, role-based access control, event browsing, and secure ticket booking. Responsive UI with React & Vite.",
        image:
            "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=400&fit=crop&auto=format",
        tags: ["React", "Node.js", "Express", "MySQL", "JWT"],
        category: "web",
        liveUrl: "#",
        githubUrl: "https://github.com/PiyumalSandeepa",
    },
    {
        id: 5,
        title: "Lost & Find Mobile Application",
        description:
            "Mobile app to report lost/found items with direct communication between owners and finders. Features image uploads, item status updates, and user profile management.",
        image:
            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&auto=format",
        tags: ["Flutter", "Firebase", "Dart"],
        category: "mobile",
        liveUrl: "#",
        githubUrl: "https://github.com/PiyumalSandeepa",
    },
    {
        id: 6,
        title: "Software Testing & QA – To-Do App",
        description:
            "Implemented TDD with JUnit, BDD with Cucumber, UI testing with Selenium, load testing with JMeter, and code quality analysis with SonarQube in a CI pipeline.",
        image:
            "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop&auto=format",
        tags: ["Spring Boot", "JUnit", "Selenium", "Jenkins"],
        category: "devops",
        liveUrl: "#",
        githubUrl: "https://github.com/PiyumalSandeepa",
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