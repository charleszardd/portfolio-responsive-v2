import { jsPDF } from "jspdf";

export const generateCV = () => {
  const doc = new jsPDF();

  // Title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("CURRICULUM VITAE", 10, 10);

  // Section: Personal Data
  doc.setFontSize(12);
  doc.text("Personal Data", 10, 20);
  doc.line(10, 22, 200, 22); 

  const marginX = 10;
  const marginY = 30;
  const spacing = 6; 

  const personalData = [
    { label: "Name:", value: "Charles David P. Caseñas" },
    { label: "Email:", value: "casenascharles@gmail.com" },
    { label: "Github:", value: "https://github.com/charleszardd" },
    { label: "Status:", value: "Single" },
    { label: "Date of Birth:", value: "October 9, 2002" },
    { label: "Nationality:", value: "Filipino" },
    { label: "Religion:", value: "Roman Catholic" },
    { label: "Contact No.:", value: "09638623607" },
    { label: "Address:", value: "Tajao, Pinamungajan, Cebu" },
  ];
  
  personalData.forEach((item, index) => {
    const yPosition = marginY + index * spacing;
  
    doc.setFont("helvetica", "bold"); 
    doc.text(item.label, marginX, yPosition);
  
    doc.setFont("helvetica", "normal"); 
    doc.text(item.value, marginX + 35, yPosition); 
  });

  const imageX = 150; 
  const imageY = marginY; 
  const imageWidth = 50; 
  const imageHeight = 50; 
  const imageUrl = "/pfp.png"; 

  doc.addImage(imageUrl, "PNG", imageX, imageY, imageWidth, imageHeight);

  // Section: Technical Skills
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("Technical Skills", 10, 90);
  doc.line(10, 92, 200, 92);
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  const skills = [
    "I have experience with:",
    "• PHP, Laravel",
    "• Vue.js, Vuetify",
    "• JavaScript, HTML, CSS (Tailwind CSS)",
    "• SQL (Structured Query Language)",
    "• Git (version control)",
    "• APIs and using Postman for testing and debugging",
  ];

  skills.forEach((text, index) => {
    doc.text(text, 10, 100 + index * spacing);
  });

  // Section: OJT Training
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("OJT Training", 10, 150);
  doc.line(10, 152, 200, 152);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  const ojtText = `I successfully completed my On-the-Job Training (OJT) at Passafund, 
  where I worked on developing a CMS studio using Laravel and Vue.js with Vuetify. 
  During my training, I also gained hands-on experience in Agile methodologies 
  and applied clean code practices throughout the project.`;

  doc.text(doc.splitTextToSize(ojtText, 180), 10, 160);

  // Section: Educational Background
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("Educational Background", 10, 188);
  doc.line(10, 190, 200, 190);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  const education = [
    "College: Consolatrix College of Toledo City Inc. (2021 - 2025)",
    "Senior High School: Bato National High School (2019 - 2021)",
    "Junior High School: Santa Monica Academy (2016 - 2019)",
    "Elementary: Tajao Central School (2010 - 2016)",
  ];

  education.forEach((text, index) => {
    doc.text(text, 10, 198 + index * spacing);
  });

  doc.save("Charles_Caseñas_CV.pdf");
};
