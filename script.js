"use strict";

   // PROFILE OBJECT

const profile = {
  name: "Sachin Kumar Srivastava",
  role: "Full Stack Developer | PG-DAC Certified | B.Tech CSE 2024",
  email: "sachinksrivastava053@gmail.com",
  location: "India",
};

   // ABOUT OBJECT

const about = {
  description1:
    "Hello! I'm Sachin Srivastava, a recent BTech Computer Science Engineering graduate (2024). After that, I completed my PG-DAC course from Pune.",
  description2:
    "I have strong expertise in Java, Spring Boot, and full-stack development. Passionate about building scalable web applications and solving complex problems through clean, efficient code.",
  description3:
    "Currently seeking opportunities as a Software Developer where I can contribute my technical skills and continue growing as a professional developer.",
};


   // SKILLS ARRAY
const skills = [
  { category: "Programming", list: ["Java", "C/C++", "JavaScript"] },
  {
    category: "Core CS",
    list: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Operating Systems",
      "Computer Networks",
      "DBMS",
    ],
  },
  {
    category: "Web Technologies",
    list: ["HTML", "CSS", "React.js", "Node.js", "AJAX"],
  },
  {
    category: "Frameworks & Architecture",
    list: [
      "Spring Boot",
      ".NET Core",
      "Entity Framework",
      "Bootstrap",
      "Microservices",
      "Agile/SDLC",
    ],
  },
  {
    category: "Databases",
    list: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Tools",
    list: ["Docker", "GitHub", "Jenkins", "REST APIs", "Eclipse", "VS Code"],
  },
  {
    category: "Soft Skills",
    list: ["Communication", "Problem Solving", "Critical Thinking"],
  },
];


    // EDUCATION ARRAY

const education = [
  {
    year: 2025,
    degree: "Centre for Development of Advanced Computing (PG-DAC)",
    institute: "CDAC, Pune",
  },
  {
    year: 2024,
    degree: "B.Tech in Computer Science & Engineering",
    institute: "GLA University",
  },
];
   // PROJECTS ARRAY

const projects = [
  {
    title:
      "Apna Broadband Provider – Full-Stack Broadband Management Platform",
    details: [
      "Built a microservices-based broadband management system.",
      "Modules include subscriptions, billing, analytics, and customer feedback.",
      "Implemented secure authentication (JWT) and role-based access control.",
    ],
    techStack:
      "Java, C#, Spring Boot, .NET Core Web API, Entity Framework, React.js, MySQL, GitHub",
  },
];


   // INTERNSHIPS ARRAY

const internships = [
  {
    title: "Frontend Developer (Intern)",
    company: "JOVAC",
    work: [
      "Completed intensive frontend development training.",
      "Designed and developed responsive web applications.",
      "Created a functional real-time weather application.",
      "Built responsive restaurant website.",
    ],
  },
  {
    title: "Salesforce Administration Intern",
    company: "SmartInternz",
    work: [
      "Completed Salesforce administration internship with certification.",
      "Managed and maintained Salesforce CRM.",
      "Completed Superset modules, learning Salesforce administration.",
      "Provided support and training to end-users.",
    ],
  },
];

   // HOBBIES ARRAY

const hobbies = [
  "Reading tech blogs",
  "Listening to music",
  "Playing cricket",
  "Exploring and travelling",
];

   // LANGUAGES ARRAY

const languages = ["English", "Hindi"];


   // FUNCTIONS


// Intro function
function introduce({ name, role, location }) {
  return `Hello! I'm ${name}, working as a ${role} based in ${location}.`;
}

// Convert skill array → readable text
function formatSkills(skills) {
  return skills
    .map((s) => `${s.category}: ${s.list.join(", ")}`)
    .join("\n");
}

// List projects
function formatProjects(projects) {
  return projects
    .map(
      (p) => `${p.title}\n${p.details.join("\n")}\nTech Stack: ${p.techStack}`
    )
    .join("\n\n");
}

// List internships
function formatInternships(internships) {
  return internships
    .map(
      (i) =>
        `${i.title} — ${i.company}\nTasks: ${i.work.join(", ")}`
    )
    .join("\n\n");
}

// Contact info
function contactInfo(profile) {
  return `Email: ${profile.email}`;
}


   // CONSOLE OUTPUTS (For Demonstration)

console.log(introduce(profile));
console.log("\nSkills:\n", formatSkills(skills));
console.log("\nEducation:", education);
console.log("\nProjects:\n", formatProjects(projects));
console.log("\nInternships:\n", formatInternships(internships));
console.log("\nHobbies:", hobbies.join(", "));
console.log("Languages:", languages.join(", "));
console.log("\nContact:", contactInfo(profile));

   

