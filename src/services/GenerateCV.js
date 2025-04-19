import { jsPDF } from "jspdf";

export const generateCV = () => {
  const doc = new jsPDF();
  const spacing = 6;
  let y = 10;

  // Name (Bold, Centered)
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("CHARLES DAVID P. CASEÑAS", 105, y, { align: "center" });
  y += spacing + 2;

  // Contact & Links (Centered)
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  const contactAndAdressInfo = [
    "Tajao, Pinamungajan, Cebu",
    "+63 9638623607",
    "casenascharles@gmail.com",
    "casenascharles.vercel.app"
  ];
  contactAndAdressInfo.forEach(info => {
    doc.text(info, 10, y);
    y += spacing;
  });

  // Summary
  y += spacing;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("Summary", 10, y);
  doc.line(10, y + 2, 200, y + 2);
  y += spacing + 2;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  const summary = `Experienced in building Web Apps and REST APIs with Laravel and Vue.js, prioritizing clean and maintainable code. Led a team of trainees during OJT in an Agile environment, contributing to the full software development life cycle. Skilled in MySQL, Tailwind, JavaScript, PHP, and Git. A team player, eager to learn, and passionate about software development.`;
  doc.text(doc.splitTextToSize(summary, 190), 10, y);
  y += spacing * 4;

  // Work Experience
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("Work Experience", 10, y);
  doc.line(10, y + 2, 200, y + 2);
  y += spacing + 2;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text("Software Engineer Trainee", 10, y);
  doc.text("Passafund — Poblacion, Toledo City, Cebu", 10, y + spacing);
  doc.text("July 2024 – January 2025", 160, y + spacing);
  y += spacing * 2;

  const workDetails = [
    "• Developed a Quiz Game App from project proposal to launch using Vue.js, Laravel, and MySQL, leading the conceptualization and wireframing.",
    "• Led a team of seven trainees, managing sprint reports, sprint plans, task assignments, and cross-team communication while ensuring project success in an agile environment.",
    "• Applied Clean Code principles while developing app features, managing version control (Git), and conducting manual testing."
  ];
  doc.text(doc.splitTextToSize(workDetails.join("\n"), 190), 10, y);
  y += spacing * 6;

  // Education
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("Education", 10, y);
  doc.line(10, y + 2, 200, y + 2);
  y += spacing + 2;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text("Bachelor of Science in Information Technology", 10, y);
  doc.text("Consolatrix College of Toledo City, Inc.", 10, y + spacing);
  doc.text("August 2021 – April 2025", 160, y + spacing);
  y += spacing * 2;

  doc.text("Computer System Servicing", 10, y);
  doc.text("Bato National High School", 10, y + spacing);
  doc.text("June 2018 – March 2020", 160, y + spacing);
  y += spacing * 2;

  // Skills
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("Skills", 10, y);
  doc.line(10, y + 2, 200, y + 2);
  y += spacing + 2;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  const skills = [
    "• Laravel",
    "• Vue.js",
    "• MySQL",
    "• Tailwind CSS",
    "• JavaScript",
    "• PHP",
    "• Git",
    "• Postman",
    "• Agile Methodologies",
    "• Problem Solving",
    "• Teamwork",
    "• Attention to Detail"
  ];
  skills.forEach(skill => {
    doc.text(skill, 10, y);
    y += spacing;
  });

  // Save PDF
  doc.save("Charles_David_P_Casenas_CV.pdf");
};
