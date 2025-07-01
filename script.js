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
  const photoInput = document.getElementById('photo');

  const preview = document.getElementById('resume-preview');
  preview.className = "resume-template for-pdf";

  let photoHTML = "";

  if (photoInput.files && photoInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      photoHTML = `<img src="${e.target.result}" alt="Profile Photo" class="profile-pic">`;
      renderTemplate();
    };
    reader.readAsDataURL(photoInput.files[0]);
  } else {
    renderTemplate();
  }

  function renderTemplate() {
    if (template === 'template1') {
      preview.classList.add('template1');
      preview.innerHTML = `
        <h1>${name}</h1>
        <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone}</p>
        <h2>Education</h2><p>${education}</p>
        <h2>Experience</h2><p>${experience}</p>
        <h2>Skills</h2><p>${skills}</p>
        <h2>Projects</h2><p>${projects}</p>
        <h2>Certificates</h2><p>${certificates}</p>
      `;
    } else if (template === 'template2') {
      preview.classList.add('template2');
      preview.innerHTML = `
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
    } else if (template === 'template3') {
      preview.classList.add('template1');
      preview.innerHTML = `
        ${photoHTML}
        <h1>${name}</h1>
        <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone}</p>
        <h2>Education</h2><p>${education}</p>
        <h2>Experience</h2><p>${experience}</p>
        <h2>Skills</h2><p>${skills}</p>
        <h2>Projects</h2><p>${projects}</p>
        <h2>Certificates</h2><p>${certificates}</p>
      `;
    }else if (template === 'template4') {
  preview.classList.add('template4');
  preview.innerHTML = `
    <div class="template4-left">
      <h1>${name}</h1>
      <p><strong>Email:</strong><br>${email}</p>
      <p><strong>Phone:</strong><br>${phone}</p>
      <h2>Skills</h2><p>${skills}</p>
      <h2>Certificates</h2><p>${certificates}</p>
    </div>
    <div class="template4-right">
      <h2>Education</h2><p>${education}</p>
      <h2>Experience</h2><p>${experience}</p>
      <h2>Projects</h2><p>${projects}</p>
    </div>
  `;
  } else if (template === 'template5') {
  preview.classList.add('template5');
  preview.innerHTML = `
    <h1>${name}</h1>
    <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone}</p>
    <h2>Education</h2><p>${education}</p>
    <h2>Experience</h2><p>${experience}</p>
    <h2>Skills</h2><p>${skills}</p>
    <h2>Projects</h2><p>${projects}</p>
    <h2>Certificates</h2><p>${certificates}</p>
  `;
}

    }
  }


async function downloadPDF(event) {
  event.preventDefault();

  const { jsPDF } = window.jspdf;
  const content = document.getElementById("resume-preview");

  if (!content || content.innerHTML.trim() === '') {
    alert("Please preview your resume first.");
    return;
  }

  try {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: [794, 1123]
    });

    await doc.html(content, {
      callback: function (doc) {
        doc.save("My_Resume.pdf");
      },
      x: 0,
      y: 0,
      html2canvas: {
        scale: 2,
        useCORS: true
      }
    });
  } catch (error) {
    alert("PDF generation failed.");
    console.error("Error:", error);
  }
}
