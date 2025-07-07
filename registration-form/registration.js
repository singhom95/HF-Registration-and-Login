document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();


    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const dob = document.getElementById("dob").value;
    const address = document.getElementById("address").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const userType = document.getElementById("userType").value;
    const termsAccepted = document.getElementById("terms").checked;

    // Basic validation
    if (!fullName || !email || !phone || !gender || !dob || !address || !password || !confirmPassword || !userType) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!termsAccepted) {
      alert("You must agree to the Terms and Conditions.");
      return;
    }

    // Submit Data (Here you can replace with actual API call)
    const registrationData = {
      fullName,
      email,
      phone,
      gender,
      dob,
      address,
      password,
      userType,
    };

    console.log("Registration successful!", registrationData);
    alert("Registration successful!");


    form.reset();
  });
});