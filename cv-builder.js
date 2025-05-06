document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("cvForm");
    const output = document.getElementById("cvOutput");
    const preview = document.getElementById("cvPreview");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = document.getElementById("cvName").value;
      const email = document.getElementById("cvEmail").value;
      const statement = document.getElementById("cvStatement").value;
      const experience = document.getElementById("cvExperience").value;
      const education = document.getElementById("cvEducation").value;
      const skills = document.getElementById("cvSkills").value;
  
      output.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <h4>Personal Statement</h4><p>${statement}</p>
        <h4>Work Experience</h4><p>${experience}</p>
        <h4>Education</h4><p>${education}</p>
        <h4>Skills</h4><p>${skills.split(",").map(skill => `<span>• ${skill.trim()}</span><br>`).join("")}</p>
      `;
  
      preview.style.display = "block";
    });
  });
  