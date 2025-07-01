// Format comma-separated list (skills) into bullets
function formatBullets(text) {
  if (!text.trim()) return '';
  return '<ul><li>' + text.trim().replace(/,\s*/g, '</li><li>') + '</li></ul>';
}

// Format textarea (experience, projects, certificates) into bullets
function formatLines(text) {
  if (!text.trim()) return '';
  return '<ul><li>' + text.trim().replace(/\n+/g, '</li><li>') + '</li></ul>';
}

// Format education as paragraphs (in case it's just one or two lines)
function formatParagraph(text) {
  return text.trim().replace(/\n/g, '<br>');
}

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

    <h2>Education</h2>
    <p>${formatParagraph(education)}</p>

    <h2>Experience</h2>
    ${formatLines(experience)}

    <h2>Skills</h2>
    ${formatBullets(skills)}

    <h2>Projects</h2>
    ${formatLines(projects)}

    <h2>Certificates</h2>
    ${formatLines(certificates)}
  `;

    } else if (template === 'template2') {
  preview.classList.add('template2');
  preview.innerHTML = `
    <div class="template2-sidebar">
      <h1>${name}</h1>
      <p><strong>Email:</strong><br>${email}</p>
      <p><strong>Phone:</strong><br>${phone}</p>
      <h2>Skills</h2>${formatBullets(skills)}
      <h2>Certificates</h2>${formatLines(certificates)}
    </div>
    <div class="template2-main">
      <h2>Education</h2><p>${formatParagraph(education)}</p>
      <h2>Experience</h2>${formatLines(experience)}
      <h2>Projects</h2>${formatLines(projects)}
    </div>
  `;
}  else if (template === 'template3') {
  const fileInput = document.getElementById('photo');
  const file = fileInput.files[0];

  if (!file) {
    alert("Please upload a photo for this template.");
    return;
  }

  const reader = new FileReader();

  reader.onload = function (e) {
    const photoSrc = e.target.result;

    preview.classList.add('template3');
    preview.innerHTML = `
      <div class="photo-header" style="display: flex; align-items: center; gap: 20px;">
        <img src="${photoSrc}" alt="Profile Photo" width="100" style="border-radius: 8px;">
        <div>
          <h1>${name}</h1>
          <p><strong>Email:</strong> ${email}<br><strong>Phone:</strong> ${phone}</p>
        </div>
      </div>

      <h2>Education</h2><p>${formatParagraph(education)}</p>
      <h2>Experience</h2>${formatLines(experience)}
      <h2>Skills</h2>${formatBullets(skills)}
      <h2>Projects</h2>${formatLines(projects)}
      <h2>Certificates</h2>${formatLines(certificates)}
    `;
  };

  reader.readAsDataURL(file); // converts image to base64
}
 else if (template === 'template4') {
  preview.classList.add('template4');
  preview.innerHTML = `
    <div class="template4-left">
      <h1>${name}</h1>
      <p>${email} | ${phone}</p>
      <h2>Skills</h2>${formatBullets(skills)}
      <h2>Certificates</h2>${formatLines(certificates)}
    </div>
    <div class="template4-right">
      <h2>Education</h2><p>${formatParagraph(education)}</p>
      <h2>Experience</h2>${formatLines(experience)}
      <h2>Projects</h2>${formatLines(projects)}
    </div>
  `;
} else if (template === 'template5') {
  preview.classList.add('template5');
  preview.innerHTML = `
    <h1>${name}</h1>
    <p>${email} | ${phone}</p>
    <h2>Education</h2><p>${formatParagraph(education)}</p>
    <h2>Experience</h2>${formatLines(experience)}
    <h2>Skills</h2>${formatBullets(skills)}
    <h2>Projects</h2>${formatLines(projects)}
    <h2>Certificates</h2>${formatLines(certificates)}
  `;
}
  else if (template === 'template6') {
  preview.classList.add('template6');
  preview.innerHTML = `
    <h1>${name}</h1>
    <p>Email: ${email} | Phone: ${phone}</p>
    <h2>Education</h2><p>${formatParagraph(education)}</p>
    <h2>Experience</h2>${formatLines(experience)}
    <h2>Skills</h2>${formatBullets(skills)}
    <h2>Projects</h2>${formatLines(projects)}
    <h2>Certificates</h2>${formatLines(certificates)}
  `;
} else if (template === 'template7') {
  preview.classList.add('template7');
  preview.innerHTML = `
    <div class="template7-header">
      <h1>${name}</h1>
      <p>Email: ${email} | Phone: ${phone}</p>
    </div>
    <div class="template7-body">
      <h2>Education</h2><p>${formatParagraph(education)}</p>
      <h2>Experience</h2>${formatLines(experience)}
      <h2>Skills</h2>${formatBullets(skills)}
      <h2>Projects</h2>${formatLines(projects)}
      <h2>Certificates</h2>${formatLines(certificates)}
    </div>
  `;
}
 else if (template === 'template8') {
  preview.classList.add('template8');
  preview.innerHTML = `
    <h1>${name}</h1>
    <p>Email: ${email} | Phone: ${phone}</p>
    <div class="timeline-section">
      <h2>Education</h2><p>${formatParagraph(education)}</p>
      <h2>Experience</h2>${formatLines(experience)}
      <h2>Skills</h2>${formatBullets(skills)}
      <h2>Projects</h2>${formatLines(projects)}
      <h2>Certificates</h2>${formatLines(certificates)}
    </div>
  `;
} else if (template === 'template9') {
  preview.classList.add('template9');
  preview.innerHTML = `
    <div class="template9-left">
      <h2>Contact</h2>
      <p>${name}</p>
      <p>${email}</p>
      <p>${phone}</p>
      <h2>Skills</h2>${formatBullets(skills)}
      <h2>Certificates</h2>${formatLines(certificates)}
    </div>
    <div class="template9-right">
      <h2>Education</h2><p>${formatParagraph(education)}</p>
      <h2>Experience</h2>${formatLines(experience)}
      <h2>Projects</h2>${formatLines(projects)}
    </div>
  `;
}
 else if (template === 'template10') {
  preview.classList.add('template10');
  preview.innerHTML = `
    <h1>${name}</h1>
    <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone}</p>

    <h2>Education</h2>
    <p>${formatParagraph(education)}</p>

    <h2>Experience</h2>
    ${formatLines(experience)}

    <h2>Skills</h2>
    ${formatBullets(skills)}

    <h2>Projects</h2>
    ${formatLines(projects)}

    <h2>Certificates</h2>
    ${formatLines(certificates)}
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
      format: [794, 1123] // A4 base
    });

    // Clone content to avoid changes
    const clone = content.cloneNode(true);
    clone.style.margin = '0';
    clone.style.transform = 'scale(1)';
    clone.style.overflow = 'hidden';
    document.body.appendChild(clone);

    // Measure height
    const height = clone.scrollHeight;

    await doc.html(clone, {
      callback: function (doc) {
        doc.save("My_Resume.pdf");
        document.body.removeChild(clone);
      },
      x: 0,
      y: 0,
      width: 794,
      windowWidth: 794,
      html2canvas: {
        scale: 1,
        useCORS: true
      }
    });

  } catch (error) {
    alert("PDF generation failed.");
    console.error("Error:", error);
  }
}


