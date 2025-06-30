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

  // Show only the selected template
  document.querySelectorAll('.resume-template').forEach(t => t.classList.remove('active'));
  const selectedDiv = document.getElementById(template);
  selectedDiv.classList.add('active');

  if (template === 'template1') {
    selectedDiv.innerHTML = `
      <h1>${name}</h1>
      <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone}</p>
      <h2>Education</h2><p>${education}</p>
      <h2>Experience</h2><p>${experience}</p>
      <h2>Skills</h2><p>${skills}</p>
      <h2>Projects</h2><p>${projects}</p>
      <h2>Certificates</h2><p>${certificates}</p>
    `;
  } else if (template === 'template2') {
    selectedDiv.innerHTML = `
      <div class="template2-sidebar">
        <h1>${name}</h1>
        <p><strong>Email:</strong><br>${email}</p>
        <p><strong>Phone:</strong><br>${phone}</p>
        <p><strong>Skills:</strong><br>${skills}</p>
        <p><strong>Certificates:</strong><br>${certificates}</p>
      </div>
      <div class="template2-main">
        <h2>Education</h2><p>${education}</p>
        <h2>Experience</h2><p>${experience}</p>
        <h2>Projects</h2><p>${projects}</p>
      </div>
    `;
  } else {
    selectedDiv.innerHTML = "<p>No preview available for this template.</p>";
  }
}



// Download function using jsPDF
async function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF('p', 'pt', 'a4');

  const content = document.getElementById('export-container');
  if (!content || !content.innerText.trim()) {
    alert("Please generate your resume preview first.");
    return;
  }

  await doc.html(content, {
    callback: function (doc) {
      doc.save('My_Resume.pdf');
    },
    x: 20,
    y: 20
  });
}
