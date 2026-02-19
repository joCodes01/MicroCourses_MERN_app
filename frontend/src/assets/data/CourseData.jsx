import imageVisualDesign from "/src/assets/images/visualDesign.png";
import imageFrontend from "/src/assets/images/frontend.png";
import imageBackend from "/src/assets/images/backend.png";
import imageSecurity from "/src/assets/images/security.png";
import imagePerformance from "/src/assets/images/performance.png";
import imageDatabase from "/src/assets/images/database.png";
import imageDataDrivenDesign from "/src/assets/images/dataDrivenDesign.png";
import imageUX from "/src/assets/images/ux.png";

export const CourseData = [
  {
    courseTitle: "Visual Design Systems",
    id: "001",
    shortDescription:
      "Create scalable, readable visual systems for consistent interfaces across devices.",
    longDescription:
      "This micro course focuses on the foundations of visual design for digital products, with an emphasis on typography and layout systems that scale. You'll learn how to create effective type scales, pair fonts thoughtfully, and adapt text responsively across screen sizes. The course also covers legibility best practices, visual hierarchy, and emphasis through styling choices. By mastering weight, spacing, and alignment, you'll be able to design interfaces that communicate structure and intent clearly while maintaining consistency across an entire product.",
    modules: [
      { title: "Type scales, pairing, and responsive text." },
      { title: "Legibility across devices." },
      { title: "Styling for hierarchy and emphasis." },
      { title: "Weight, spacing, and alignment." },
    ],
    hours: "12",
    image: imageVisualDesign,
  },
  {
    courseTitle: "Front-End Design & Development",
    id: "002",
    shortDescription:
      "Build modern, responsive interfaces using HTML, CSS, JavaScript, and frameworks.",
    longDescription:
      "This micro course bridges design and development by covering the essential tools used to build interactive front-end experiences. You'll start with semantic HTML to ensure accessibility and structure, then move into advanced CSS techniques using Flexbox, Grid, and media queries for responsive layouts. Modern JavaScript concepts—ES6+, event handling, and DOM manipulation—enable dynamic UI updates. The course concludes with an introduction to front-end frameworks like React and Next.js, focusing on components, state, and props to build scalable applications.",
    modules: [
      { title: "HTML & Semantic Markup Essentials." },
      {
        title:
          "Advanced CSS & Responsive Layouts: Flexbox, Grid, media queries.",
      },
      {
        title:
          "Modern JavaScript & DOM Manipulation: ES6+, events, and dynamic UI updates.",
      },
      {
        title:
          "Front-End Frameworks (React/Next.js): Components, state, and props.",
      },
    ],
    hours: "28",
    image: imageFrontend,
  },
  {
    courseTitle: "Back-End Development & APIs",
    id: "003",
    shortDescription:
      "Develop secure, scalable back-end services and APIs for web applications.",
    longDescription:
      "This micro course introduces the core concepts of back-end development using Node.js. You'll learn how the event loop works, how to handle asynchronous operations, and how to structure applications using modules. The course covers database integration with both MongoDB and SQL, including schema design, CRUD operations, and data relationships. You'll also implement authentication and authorization using JWT, OAuth, and role-based access, while learning best practices for server-side validation and robust error handling.",
    modules: [
      {
        title:
          "Node.js Fundamentals: Event loop, asynchronous patterns, and modules.",
      },
      {
        title:
          "Database Integration (MongoDB / SQL): Schemas, CRUD operations, and relationships.",
      },
      {
        title: "Authentication & Authorization: JWT, OAuth, role-based access.",
      },
      {
        title: "Server-Side Validation & Error Handling: Building robust APIs.",
      },
    ],
    hours: "28",
    image: imageBackend,
  },
  {
    courseTitle: "Web Security & Best Practices",
    id: "004",
    shortDescription:
      "Protect applications and user data with essential web security techniques.",
    longDescription:
      "Security is a critical part of web development, and this micro course focuses on practical, real-world protections. You'll learn the fundamentals of web security, including HTTPS, CORS, and security headers. The course covers secure authentication and password management, along with strategies to prevent common attacks such as XSS, CSRF, and SQL/NoSQL injection. It also introduces data privacy principles and GDPR basics, helping you responsibly handle sensitive user information and meet modern compliance expectations.",
    modules: [
      { title: "Web Security Essentials: HTTPS, CORS, and headers." },
      { title: "Authentication & Password Management." },
      {
        title:
          "Protecting Against Common Attacks: XSS, CSRF, SQL/NoSQL injection.",
      },
      {
        title:
          "Data Privacy & GDPR Basics: Handling sensitive information responsibly.",
      },
    ],
    hours: "12",
    image: imageSecurity,
  },
  {
    courseTitle: "Front-End Performance",
    id: "005",
    shortDescription:
      "Optimize accessibility, performance, and state for fast, usable interfaces.",
    longDescription:
      "This micro course explores how performance and accessibility intersect in modern web apps. You'll learn how to design accessible interfaces using ARIA roles, keyboard navigation, and screen reader support. The course covers performance optimization techniques, including efficient rendering, state management strategies, and minimizing unnecessary re-renders. You'll also focus on image optimization to reduce load times and improve perceived performance, ensuring fast, inclusive experiences across devices and network conditions.",
    modules: [
      {
        title:
          "Accessibility for Modern Web Apps: ARIA, keyboard navigation, screen readers.",
      },
      { title: "Performance Optimization." },
      { title: "Advanced State Management." },
      { title: "Image optimization." },
    ],
    hours: "8",
    image: imagePerformance,
  },
  {
    courseTitle: "Database Design Fundamentals",
    id: "006",
    shortDescription:
      "Design efficient, scalable databases with structured schemas and relationships.",
    longDescription:
      "This micro course covers the principles behind effective database design, starting with the differences between relational and non-relational databases. You'll learn how to design schemas, apply normalization techniques, and model relationships and references correctly. The course also highlights common database design mistakes and how to avoid them, helping you create data structures that are maintainable, performant, and aligned with application requirements.",
    modules: [
      { title: "Relational vs Non-Relational Databases." },
      { title: "Schema Design & Normalization." },
      { title: "Designing Relationships & References." },
      { title: "Common Database Design Mistakes." },
    ],
    hours: "8",
    image: imageDatabase,
  },
  {
    courseTitle: "Data-Driven Interface Design",
    id: "007",
    shortDescription:
      "Design interfaces that adapt to data, state, and real-time events.",
    longDescription:
      "This micro course focuses on designing interfaces that are tightly integrated with back-end data and application logic. You'll learn how to design full-stack interactions, translate data into clear UI states, and handle forms with validation and server feedback. The course also explores real-time and event-driven interfaces, teaching you how to reflect changing data, loading states, and errors in ways that feel intuitive and trustworthy to users.",
    modules: [
      { title: "Designing Full-Stack Interactions." },
      { title: "Designing UI States From Data." },
      { title: "Forms, Validation & Server Feedback." },
      { title: "Real-Time & Event-Driven Interfaces." },
    ],
    hours: "8",
    image: imageDataDrivenDesign,
  },
  {
    courseTitle: "UI/UX Principles for Developers",
    id: "008",
    shortDescription:
      "Apply core UX and visual design principles to improve usability and clarity.",
    longDescription:
      "This micro course introduces essential UI/UX concepts specifically tailored for developers. You'll learn how to establish strong visual hierarchy, design for accessibility, and create responsive layouts that adapt across devices. The course also emphasizes balancing information density with clarity, helping you present complex data without overwhelming users. By the end, you'll be better equipped to make design decisions that improve usability and overall user experience.",
    modules: [
      { title: "Visual hierarchy." },
      { title: "Accessibility." },
      { title: "Responsive design." },
      { title: "Balancing information density and clarity." },
    ],
    hours: "6",
    image: imageUX,
  },
];

export default CourseData;
