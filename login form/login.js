document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector("form");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const loginId = document.getElementById("loginId").value.trim();
    const loginPassword = document.getElementById("loginPassword").value.trim();

    if (loginId === "" || loginPassword === "") {
      alert("Please fill in all fields.");
      return;
    }

    if (loginId === "user@example.com" && loginPassword === "123456") {
      alert("Login successful!");
    } else {
      alert("Invalid login credentials. Please try again.");
    }
  });

  // Handle signup click
  const signUpLink = document.querySelector('a[href="registration form/registration.html"]');
  if (signUpLink) {
    signUpLink.addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "registration form/registration.html";
    });
  }

  // Optional: Handle "Forgot Password" click
  const forgotPasswordLink = document.querySelector('a[href="#"]');
  if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener("click", function (e) {
      e.preventDefault();
      alert("Forgot Password functionality is not implemented yet.");
    });
  }
});
