function generateResume() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const education = document.getElementById('education').value;
  const experience = document.getElementById('experience').value;
  const skills = document.getElementById('skills').value;
  const projects = document.getElementById('projects').value;
  const certificates = document.getElementById('certificates').value;

  document.getElementById('resume-preview').innerHTML = `
    <h2>${name}</h2>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>

    <h3>Projects</h3>
    <p>${projects}</p>

    <h3>Certificates</h3>
    <p>${certificates}</p>
  `;
}
async function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const resumeElement = document.getElementById('resume-preview');
  if (!resumeElement.innerText.trim()) {
    alert("Please fill in the form and click Preview before downloading.");
    return;
  }

  doc.html(resumeElement, {
    callback: function (doc) {
      doc.save('My_Resume.pdf');
    },
    x: 10,
    y: 10
  });
}

