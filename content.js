/**
 * Single Source of Truth for Portfolio Content
 * Aiswaria Benny - Personal Portfolio
 */

const PORTFOLIO_CONTENT = {
  personal: {
    name: "Aiswaria Benny",
    tagline: "B.Tech AI & Data Science student.",
    email: "aiswariaben@gmail.com",
    github: "https://github.com/herzie48",
    linkedin: "https://linkedin.com/in/aiswariaben",
    resumeUrl: "assets/Aiswa Resume.pdf"
  },
  hero: {
    buttonText: "See my projects"
  },
  about: {
    title: "About me",
    text: "I'm a third-semester B.Tech student in Artificial Intelligence & Data Science at Amal Jyothi College of Engineering . I build practical software in Python, Java and web technologies, and I'm looking for an internship where I can keep building real things.",
    skills: [
      "Python",
      "Java",
      "HTML",
      "CSS",
      "JavaScript",
      "NumPy",
      "Matplotlib",
      "Data Structures"
    ]
  },
  projects: {
    title: "Projects",
    list: [
      {
        number: "01",
        title: "Campus Management System",
        bullets: [
          "Role-based (Admin / Faculty / Student) system in Python with a command-line interface, managing student records, attendance, grades, library and fee billing on a custom flat-file database.",
          "Attendance tracking with 75% threshold alerts, GPA and rank computation, and automated library fines.",
          "NumPy and Matplotlib reports: attendance trends, grade distributions, fee collection."
        ],
        tags: ["Python", "NumPy", "Matplotlib"],
        url: "https://github.com/herzie48/CAMPUS-MANAGEMENT-SYSTEM",
        buttonLabel: "View code"
      },
      {
        number: "02",
        title: "Medière — Smart Stock & Real-Time Pharmacy Supply Platform",
        bullets: [
          "Multi-page web app for pharmacy inventory and supplier management, with a 105+ medicine dataset and a directory of 20 verified Indian pharmaceutical suppliers.",
          "AI-based supplier recommendation engine comparing distributors by delivery speed and wholesale price, with one-click ordering.",
          "Multi-pharmacy authentication with account-isolated local storage; 6 pages covering inventory CRUD, order tracking, supplier directory and support tickets."
        ],
        tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
        url: "https://websiste-cdfhbxb4c-me-7382.vercel.app",
        buttonLabel: "Live Demo"
      }
    ]
  },
  contact: {
    title: "Let's get in touch",
    formNamePlaceholder: "Your Name",
    formMessagePlaceholder: "Your Message",
    sendButtonText: "Send Message",
    copyright: "© 2026 Aiswaria Benny"
  }
};

// Expose to window for browser environment
if (typeof window !== 'undefined') {
  window.PORTFOLIO_CONTENT = PORTFOLIO_CONTENT;
}
