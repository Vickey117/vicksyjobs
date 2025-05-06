
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signupForm");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you for signing up, " + document.getElementById("name").value + "!");
        form.reset();
      });
    }
  });
  