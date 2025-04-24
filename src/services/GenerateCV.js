import { jsPDF } from "jspdf";

export const generateCV = () => {
  const doc = new jsPDF();
  const spacing = 6;
  const marginLeft = 10;
  const marginRight = 10;
  const pageHeight = doc.internal.pageSize.height;
  const contentWidth = doc.internal.pageSize.width - marginLeft - marginRight;
  let y = 10;

  const checkPageBreak = (additionalSpace = spacing) => {
    if (y + additionalSpace > pageHeight - 10) {
      doc.addPage();
      y = 10;
    }
  };

  // Header
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("CHARLES DAVID P. CASEÑAS", 105, y, { align: "center" });
  y += spacing + 2;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  const contactAndAddressInfo = [
    "Tajao, Pinamungajan, Cebu, Philippines",
    "+63 9638623607",
    "casenascharles@gmail.com",
    "casenascharles.vercel.app"
  ];
  contactAndAddressInfo.forEach(info => {
    checkPageBreak();
    doc.text(info, marginLeft, y);
    y += spacing;
  });

  // Summary
  y += spacing;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("Summary", marginLeft, y);
  doc.line(marginLeft, y + 2, 200, y + 2);
  y += spacing + 2;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  const summary = `Passionate about developing websites and software, with strengths primarily in backend development and a strong aspiration to become a full-stack software engineer. Experienced in building web applications and RESTful APIs using Laravel and Vue.js, with a strong focus on writing clean, maintainable code. Skilled in MySQL, Tailwind CSS, JavaScript, PHP, and Git.`;
  doc.splitTextToSize(summary, contentWidth).forEach(line => {
    checkPageBreak();
    doc.text(line, marginLeft, y);
    y += spacing;
  });

  // Work Experience
  y += spacing;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("Work Experience", marginLeft, y);
  doc.line(marginLeft, y + 2, 200, y + 2);
  y += spacing + 2;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text("Software Engineer Trainee", marginLeft, y);
  y += spacing;
  doc.text("Passafund — Poblacion, Toledo City, Cebu", marginLeft, y);
  doc.text("July 2024 – January 2025", 160, y);
  y += spacing;

  const workDetails = [
    "• Contributed on developing a Passaquiz Studio CMS for Quiz Game App from project proposal to launch using Vue.js, Laravel, and MySQL.",
    "• Applied Clean Code principles while developing app features, managing version control (Git), and conducting manual testing."
  ];
  workDetails.forEach(detail => {
    const lines = doc.splitTextToSize(detail, contentWidth);
    lines.forEach(line => {
      checkPageBreak();
      doc.text(line, marginLeft, y);
      y += spacing;
    });
  });

  // Projects
  y += spacing;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("Projects", marginLeft, y);
  doc.line(marginLeft, y + 2, 200, y + 2);
  y += spacing + 2;

  const projects = [
    {
      title: "OJT Project: Admin CMS for PassaQuiz – Passaquiz Studio",
      date: "September 2024 – January 2025",
      tech: "Laravel, Vue.js, Vuetify, MySQL",
      details: [
        "• Developed the backend of a Quizizz-style content management system (CMS) for administering quizzes, monitoring user activity, and tracking scores.",
        "• Implemented Role-Based Access Control (RBAC), created a PDF extraction feature, and documented RESTful APIs for frontend integration.",
        "• Contributed minimally to frontend components using Vue.js and Vuetify."
      ]
    },
    {
      title: "Capstone Project: School Canteen Pre-Order System – Quickbites",
      date: "October 2024 – November 2024",
      tech: "Laravel, Vue.js, Vuetify, MySQL",
      details: [
        "• Built the core functionality of a canteen pre-order system with admin roles, online/cash payments, and product management.",
        "• Developed backend features including authentication, carts, checkout, and contributed to initial frontend setup."
      ]
    },
    {
      title: "Personal Project: Personalized JAV Actresses Chatbot AI",
      date: "January 2024",
      tech: "Vue.js, Vuetify, Django.python, Sqlite",
      details: [
        "• Created a Gemini API-powered AI chatbot that provides responses based on JAV codes using a large scraped dataset from Django backend."
      ]
    },
    {
      title: "Group Project: WealthME",
      date: "January 2024",
      tech: "Vue.js, Vuetify, Laravel, MySQL",
      details: [
        "• Built backend APIs for subscription flows, implemented Google login, enforced category limits, and automated user setup."
      ]
    }
  ];

  projects.forEach(project => {
    checkPageBreak(spacing * 6);
    doc.setFont("helvetica", "bold");
    doc.text(project.title, marginLeft, y);
    y += spacing;

    doc.setFont("helvetica", "normal");
    doc.text(project.date, marginLeft, y);
    y += spacing;

    doc.text(`Tech Stack: ${project.tech}`, marginLeft, y);
    y += spacing * 2; // Adds extra spacing after the tech stack

    project.details.forEach(detail => {
      const lines = doc.splitTextToSize(detail, contentWidth);
      lines.forEach(line => {
        checkPageBreak();
        doc.text(line, marginLeft, y);
        y += spacing;
      });
    });

    y += spacing * 1.5; // Gap before next project
  });

  // Education
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("Education", marginLeft, y);
  doc.line(marginLeft, y + 2, 200, y + 2);
  y += spacing + 2;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  const education = [
    {
      course: "Bachelor of Science in Information Technology",
      school: "Consolatrix College of Toledo City, Inc.",
      date: "August 2021 – April 2025"
    },
    {
      course: "Computer System Servicing",
      school: "Bato National High School",
      date: "June 2018 – March 2020"
    }
  ];
  education.forEach(item => {
    checkPageBreak(spacing * 3);
    doc.text(item.course, marginLeft, y);
    y += spacing;
    doc.text(item.school, marginLeft, y);
    doc.text(item.date, 160, y);
    y += spacing * 2;
  });

  // Skills
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("Skills", marginLeft, y);
  doc.line(marginLeft, y + 2, 200, y + 2);
  y += spacing + 2;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  const skills = [
    "• Laravel", "• Vue.js", "• MySQL", "• Tailwind CSS",
    "• JavaScript", "• PHP", "• Git", "• Postman",
    "• Agile Methodologies", "• Problem Solving",
    "• Teamwork", "• Attention to Detail"
  ];
  skills.forEach(skill => {
    checkPageBreak();
    doc.text(skill, marginLeft, y);
    y += spacing;
  });

  // Save PDF
  doc.save("Charles_David_P_Casenas_CV.pdf");
};
