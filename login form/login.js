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
});
