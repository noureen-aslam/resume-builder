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
        <h2>Education</h2><p>${education.replace(/\n/g, '<br>')}</p>
        <h2>Experience</h2><p>${experience.replace(/\n/g, '<br>')}</p>
        <h2>Skills</h2><p>${skills.replace(/,\s*/g, '</li><li>').replace(/^/, '<ul><li>').replace(/$/, '</li></ul>')}</p>
        <h2>Projects</h2><p>${projects.replace(/\n/g, '<br>')}</p>
        <h2>Certificates</h2><p>${certificates.replace(/\n/g, '<br>')}</p>
      `;
    } else if (template === 'template2') {
      preview.classList.add('template2');
      preview.innerHTML = `
        <div class="template2-sidebar">
          <h1>${name}</h1>
          <p><strong>Email:</strong><br>${email}</p>
          <p><strong>Phone:</strong><br>${phone}</p>
          <p><strong>Skills:</strong><br>${skills.replace(/,\s*/g, '</li><li>').replace(/^/, '<ul><li>').replace(/$/, '</li></ul>')}</p>
          <p><strong>Certificates:</strong><br>${certificates.replace(/\n/g, '<br>')}</p>
        </div>
        <div class="template2-main">
          <h2>Education</h2><p>${education.replace(/\n/g, '<br>')}</p>
          <h2>Experience</h2><p>${experience.replace(/\n/g, '<br>')}</p>
          <h2>Projects</h2><p>${projects.replace(/\n/g, '<br>')}</p>
        </div>
      `;
    } else if (template === 'template3') {
      preview.classList.add('template1');
      preview.innerHTML = `
        ${photoHTML}
        <h1>${name}</h1>
        <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone}</p>
        <h2>Education</h2><p>${education.replace(/\n/g, '<br>')}</p>
        <h2>Experience</h2><p>${experience.replace(/\n/g, '<br>')}</p>
        <h2>Skills</h2><p>${skills.replace(/,\s*/g, '</li><li>').replace(/^/, '<ul><li>').replace(/$/, '</li></ul>')}</p>
        <h2>Projects</h2><p>${projects.replace(/\n/g, '<br>')}</p>
        <h2>Certificates</h2><p>${certificates.replace(/\n/g, '<br>')}</p>
      `;
    }else if (template === 'template4') {
  preview.classList.add('template4');
  preview.innerHTML = `
    <div class="template4-left">
      <h1>${name}</h1>
      <p><strong>Email:</strong><br>${email}</p>
      <p><strong>Phone:</strong><br>${phone}</p>
      <h2>Skills</h2><p>${skills.replace(/,\s*/g, '</li><li>').replace(/^/, '<ul><li>').replace(/$/, '</li></ul>')}</p>
      <h2>Certificates</h2><p>${certificates.replace(/\n/g, '<br>')}</p>
    </div>
    <div class="template4-right">
      <h2>Education</h2><p>${education.replace(/\n/g, '<br>')}</p>
      <h2>Experience</h2><p>${experience.replace(/\n/g, '<br>')}</p>
      <h2>Projects</h2><p>${projects.replace(/\n/g, '<br>')}</p>
    </div>
  `;
  } else if (template === 'template5') {
  preview.classList.add('template5');
  preview.innerHTML = `
    <h1>${name}</h1>
    <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone}</p>
    <h2>Education</h2><p>${education.replace(/\n/g, '<br>')}</p>
    <h2>Experience</h2><p>${experience.replace(/\n/g, '<br>')}</p>
    <h2>Skills</h2><p>${skills.replace(/,\s*/g, '</li><li>').replace(/^/, '<ul><li>').replace(/$/, '</li></ul>')}</p>
    <h2>Projects</h2><p>${projects.replace(/\n/g, '<br>')}</p>
    <h2>Certificates</h2><p>${certificates.replace(/\n/g, '<br>')}</p>
  `;
  } else if (template === 'template6') {
  preview.classList.add('template6');
  preview.innerHTML = `
    <h1>${name}</h1>
    <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone}</p>
    <h2>Education</h2><p>${education.replace(/\n/g, '<br>')}</p>
    <h2>Experience</h2><p>${experience.replace(/\n/g, '<br>')}</p>
    <h2>Skills</h2><p>${skills.replace(/,\s*/g, '</li><li>').replace(/^/, '<ul><li>').replace(/$/, '</li></ul>')}</p>
    <h2>Projects</h2><p>${projects.replace(/\n/g, '<br>')}</p>
    <h2>Certificates</h2><p>${certificates.replace(/\n/g, '<br>')}</p>
  `;
  } else if (template === 'template7') {
  preview.classList.add('template7');
  preview.innerHTML = `
    <div class="template7-header">
      <h1>${name}</h1>
      <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone}</p>
    </div>
    <div class="template7-body">
      <h2>Education</h2><p>${education.replace(/\n/g, '<br>')}</p>
      <h2>Experience</h2><p>${experience.replace(/\n/g, '<br>')}</p>
      <h2>Skills</h2><p>${skills.replace(/,\s*/g, '</li><li>').replace(/^/, '<ul><li>').replace(/$/, '</li></ul>')}</p>
      <h2>Projects</h2><p>${projects.replace(/\n/g, '<br>')}</p>
      <h2>Certificates</h2><p>${certificates.replace(/\n/g, '<br>')}</p>
    </div>
  `;

} else if (template === 'template8') {
  preview.classList.add('template8');
  preview.innerHTML = `
    <h1>${name}</h1>
    <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone}</p>
    <div class="timeline-section">
      <h2>Education</h2><p>${education.replace(/\n/g, '<br>')}</p>
      <h2>Experience</h2><p>${experience.replace(/\n/g, '<br>')}</p>
      <h2>Skills</h2><p>${skills.replace(/,\s*/g, '</li><li>').replace(/^/, '<ul><li>').replace(/$/, '</li></ul>')}</p>
      <h2>Projects</h2><p>${projects.replace(/\n/g, '<br>')}</p>
      <h2>Certificates</h2><p>${certificates.replace(/\n/g, '<br>')}</p>
    </div>
  `;
}
 else if (template === 'template9') {
  preview.classList.add('template9');
  preview.innerHTML = `
    <div class="template9-left">
      <h2>Contact</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <h2>Skills</h2><p>${skills.replace(/,\s*/g, '</li><li>').replace(/^/, '<ul><li>').replace(/$/, '</li></ul>')}</p>
      <h2>Certificates</h2><p>${certificates.replace(/\n/g, '<br>')}</p>
    </div>
    <div class="template9-right">
      <h2>Education</h2><p>${education.replace(/\n/g, '<br>')}</p>
      <h2>Experience</h2><p>${experience.replace(/\n/g, '<br>')}p>
      <h2>Projects</h2><p>${projects.replace(/\n/g, '<br>')}</p>
    </div>
  `;
} else if (template === 'template10') {
  preview.classList.add('template10');
  preview.innerHTML = `
    <h1>${name}</h1>
    <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone}</p>
    <h2>Education</h2><p>${education.replace(/\n/g, '<br>')}</p>
    <h2>Experience</h2><p>${experience.replace(/\n/g, '<br>')}</p>
    <h2>Skills</h2><p>${skills.replace(/,\s*/g, '</li><li>').replace(/^/, '<ul><li>').replace(/$/, '</li></ul>')}</p>
    <h2>Projects</h2><p>${projects.replace(/\n/g, '<br>')}</p>
    <h2>Certificates</h2><p>${certificates.replace(/\n/g, '<br>')}</p>
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


