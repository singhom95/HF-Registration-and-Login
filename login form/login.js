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
  const signUpLink = document.getElementById("signUpLink");
  if (signUpLink) {
    signUpLink.addEventListener("click", function (e) {
      e.preventDefault();
      // Use encoded path
      window.location.href = "../registration%20form/registration.html";
    });
  }

  // Optional: Handle "Forgot Password" click
  const forgotPasswordLink = document.getElementById("forgotPasswordLink");
if (forgotPasswordLink) {
  forgotPasswordLink.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Redirect to forgot password page (to be implemented)");
  });
}
});
