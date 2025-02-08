import { jsPDF } from "jspdf";

export const generateCV = () => {
  const doc = new jsPDF();

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("CURRICULUM VITAE", 10, 10);

  // Section: Personal Data
  doc.setFontSize(12);
  doc.text("Personal Data", 10, 20);
  doc.line(10, 22, 200, 22); 

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text("Name: Charles David P. Caseñas", 10, 30);
  doc.text("Email: casenascharles@gmail.com", 10, 36);
  doc.text("Github: https://github.com/charleszardd", 10, 42);
  doc.text("Status: Single", 10, 48);
  doc.text("Date of Birth: October 9, 2002", 10, 54);
  doc.text("Nationality: Filipino", 10, 60);
  doc.text("Religion: Roman Catholic", 10, 66);
  doc.text("Contact No.: 09638623607", 10, 72);
  doc.text("Address: Tajao, Pinamungajan, Cebu", 10, 78);

    // Section: Technical Skills
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("Technical Skills", 10, 90);
  doc.line(10, 92, 200, 92);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text("I have experience with:", 10, 100);
  doc.text("• PHP, Laravel", 10, 106);
  doc.text("• Vue.js, Vuetify", 10, 112);
  doc.text("• JavaScript, HTML, CSS (Tailwind CSS)", 10, 118);
  doc.text("• SQL (Structured Query Language)", 10, 124);
  doc.text("• Git (version control)", 10, 130);
  doc.text("• APIs and using Postman for testing and debugging", 10, 136);

    // Section: OJT Training
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("OJT Training", 10, 150);
  doc.line(10, 152, 200, 152);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  const ojtText = `I successfully completed my On-the-Job Training (OJT) at Passafund,  where I worked on developing a CMS studio using Laravel and Vue.js with Vuetify. During my training, I also gained hands-on experience in Agile methodologies and applied clean code practices throughout the project.`;
  const xPadding = 10; 
  const maxWidth = 200 - xPadding * 2;
  const wrappedText = doc.splitTextToSize(ojtText, maxWidth);
  doc.text(wrappedText, xPadding, 160);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("Educational Background", 10, 188);
  doc.line(10, 190, 200, 190); 

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text("College: Consolatrix College of Toledo City Inc. (2021 - 2025)", 10, 198);
  doc.text("Senior High School: Bato National High School (2019 - 2021)", 10, 204);
  doc.text("Junior High School: Santa Monica Academy (2016 - 2019)", 10, 210);
  doc.text("Elementary: Tajao Central School (2010 - 2016)", 10, 216);


  doc.save("Charles_Caseñas_CV.pdf");
};
