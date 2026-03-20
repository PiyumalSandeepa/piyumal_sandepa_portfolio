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
        `Computer Engineering undergraduate at the University of Ruhuna with a strong 
     foundation in full-stack web development, IoT systems, and DevOps practices. 
     Experienced in building production-ready applications using React, Node.js, 
     Express, Spring Boot, and cloud technologies like AWS and Docker.`,
        `Vice Chairman of IEEE IAS Ruhuna Student Chapter with proven leadership in 
     organizing tech events and mentoring peers. Passionate about solving real-world 
     problems through clean code, automation, and data-driven solutions. Actively 
     seeking software engineering internship opportunities to apply and expand my skills.`,
    ],
    yearsLearning: 3,
    projectCount: 6,
    certCount: 5,
    linesOfCode: 20000,
    resumeUrl: "/resume.pdf",
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
    "IoT Enthusiast",
    "Machine Learning Enthusiast",
    "DevOps Learner",
    "Problem Solver",
    "IEEE Volunteer Leader",
];

export const skillsData = {
    frontend: [
        { name: "React.js / Vite", icon: "react" },
        { name: "JavaScript (ES6+)", icon: "javascript" },
        { name: "TypeScript (TSX)", icon: "typescript" },
        { name: "HTML5", icon: "html5" },
        { name: "CSS3", icon: "css3" },
        { name: "Tailwind CSS", icon: "tailwind" },
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
        { name: "JUnit", icon: "junit" },
        { name: "Selenium", icon: "selenium" },
        { name: "SonarQube", icon: "sonarqube" },
        { name: "JMeter", icon: "jmeter" },
    ],
};

export const projectsData = [
    {
        id: 1,
        title: "Dam Break Flood Early Warning System",
        description:
            "Web & mobile-based early warning system for dam safety monitoring and emergency flood risk management. Built with React (Vite), Spring Boot, React Native (TSX), MySQL, and RESTful APIs. Includes community feedback and emergency response coordination.",
        image:
            "https://images.unsplash.com/photo-1541185934-01b600ea069c?w=600&h=400&fit=crop&auto=format",
        tags: ["React", "Spring Boot", "React Native", "MySQL", "REST API"],
        category: "web",
        liveUrl: "#",
        githubUrl: "https://github.com/ushankamesh-devX/dam-disaster-alert-system.git",
    },
    {
        id: 2,
        title: "DriveLock – Smart Anti-Theft Vehicle Security",
        description:
            "Real-time vehicle monitoring dashboard with IoT integration (ESP32, Raspberry Pi, GPS, RFID). Features GPS tracking, face recognition door unlock, and vehicle status monitoring via web dashboard.",
        image:
            "https://abclocksmith.net/wp-content/uploads/2020/12/Why-You-Need-a-Car-Alarm-on-Your-Vehicle.jpg",
        tags: ["React", "Node.js", "Firebase", "ESP32", "IoT"],
        category: "web",
        liveUrl: "#",
        githubUrl: "https://github.com/PiyumalSandeepa/vehicle-security-system.git",
    },
    {
        id: 3,
        title: "RecipeHub – DevOps Project",
        description:
            "Containerized full-stack web app deployed on AWS EC2 using Docker and Docker Hub. Automated CI/CD pipelines with Jenkins and GitHub for seamless code integration, build, and deployment.",
        image:
            "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&h=400&fit=crop&auto=format",
        tags: ["React", "Node.js", "Docker", "AWS", "Jenkins", "CI/CD"],
        category: "devops",
        liveUrl: "#",
        githubUrl: "https://github.com/PiyumalSandeepa/Recipehub-repo.git",
    },
    {
        id: 4,
        title: "Online Concert Ticket Booking System",
        description:
            "Full-stack event ticket booking app with JWT authentication, role-based access control, event browsing, and secure ticket booking. Responsive UI with React & Vite, RESTful backend with Express.js.",
        image:
            "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=400&fit=crop&auto=format",
        tags: ["React", "Node.js", "Express", "MySQL", "JWT"],
        category: "web",
        liveUrl: "#",
        githubUrl: "https://github.com/PiyumalSandeepa/Ticket-Booking-System.git",
    },
    {
        id: 5,
        title: "Lost & Find Mobile Application",
        description:
            "Mobile app for reporting lost/found items with direct communication between owners and finders. Features image uploads, item status tracking, and user profile management with Firebase backend.",
        image:
            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&auto=format",
        tags: ["Flutter", "Firebase", "Dart"],
        category: "mobile",
        liveUrl: "#",
        githubUrl: "https://github.com/Kavi-Z/Lost_And_Found_Mobile_App.git",
    },
    {
        id: 6,
        title: "Software Testing & QA – To-Do App",
        description:
            "Comprehensive testing project implementing TDD with JUnit, BDD with Cucumber, UI testing with Selenium, load testing with JMeter, and code quality analysis with SonarQube in a GitHub Actions CI pipeline.",
        image:
            "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop&auto=format",
        tags: ["Spring Boot", "JUnit", "Selenium", "SonarQube", "CI/CD"],
        category: "devops",
        liveUrl: "#",
        githubUrl: "https://github.com/PiyumalSandeepa/QA--To-Do-List.git",
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