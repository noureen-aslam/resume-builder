function generateResume() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const education = document.getElementById('education').value;
  const experience = document.getElementById('experience').value;
  const skills = document.getElementById('skills').value;
  const projects = document.getElementById('projects').value;
  const certificates = document.getElementById('certificates').value;
  const template = document.getElementById('template').value;

  // Hide all templates first
  document.querySelectorAll('.resume-template').forEach(t => t.style.display = 'none');

  // Show selected template and inject content
  const selectedDiv = document.getElementById(template);
  selectedDiv.style.display = 'block';

  selectedDiv.innerHTML = `
    <h1>${name}</h1>
    <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone}</p>

    <h2>Education</h2><p>${education}</p>
    <h2>Experience</h2><p>${experience}</p>
    <h2>Skills</h2><p>${skills}</p>
    <h2>Projects</h2><p>${projects}</p>
    <h2>Certificates</h2><p>${certificates}</p>
  `;
}

// Download function using jsPDF
async function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const selectedDiv = document.querySelector('.resume-template[style*="block"]');
  if (!selectedDiv || !selectedDiv.innerText.trim()) {
    alert("Please generate your resume preview first.");
    return;
  }

  doc.html(selectedDiv, {
    callback: function (doc) {
      doc.save('My_Resume.pdf');
    },
    x: 10,
    y: 10
  });
}
