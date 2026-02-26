// Login Function
function login() {
  const role = document.getElementById("role").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!role || !username || !password) {
    alert("Please fill all fields!");
    return;
  }

  // Store user session (in real app, this would be backend validation)
  localStorage.setItem("userRole", role);
  localStorage.setItem("username", username);

  switch (role) {
    case "investor":
      window.location.href = "dashboard.html";
      break;
    case "admin":
      window.location.href = "admin.html";
      break;
    case "advisor":
      window.location.href = "advisor.html";
      break;
    case "analyst":
      window.location.href = "analyst.html";
      break;
    default:
      alert("Invalid role selected!");
  }
}

// Register Function
function register() {
  const role = document.getElementById("role").value;
  const inputs = document.querySelectorAll(".login-box input, .login-box select");
  
  let allFilled = true;
  inputs.forEach(input => {
    if (!input.value) {
      allFilled = false;
    }
  });

  if (!allFilled) {
    alert("Please fill all fields!");
    return;
  }

  alert("Registration successful! You can now login.");
  window.location.href = "login.html";
}

// Invest in Fund
function investFund(fundName) {
  const amount = prompt(`Enter investment amount for ${fundName} (minimum ₹500):`);
  
  if (amount === null) return;
  
  if (isNaN(amount) || amount < 500) {
    alert("Please enter a valid amount (minimum ₹500)");
    return;
  }

  alert(`Successfully invested ₹${amount} in ${fundName}!\nThank you for investing with us.`);
  // In a real app, this would save to database
  localStorage.setItem(`investment_${fundName}`, amount);
}

// Redeem Fund
function redeemFund(fundName) {
  if (confirm(`Are you sure you want to redeem ${fundName}?`)) {
    alert(`Successfully redeemed ${fundName}!\nThe amount will be transferred to your account within 3-5 business days.`);
    // In a real app, this would process the redemption
    localStorage.removeItem(`investment_${fundName}`);
  }
}

// Add Fund (Admin)
function addFund() {
  const inputs = document.querySelectorAll(".admin-card form input, .admin-card form textarea");
  
  let allFilled = true;
  inputs.forEach(input => {
    if (!input.value) {
      allFilled = false;
    }
  });

  if (!allFilled) {
    alert("Please fill all market fields!");
    return;
  }

  alert("Fund added successfully!");
  // Reset form
  document.querySelectorAll(".admin-card form input, .admin-card form textarea").forEach(input => {
    input.value = "";
  });
}

// Send Recommendation (Advisor)
function sendRecommendation() {
  const selects = document.querySelectorAll(".advisor-card form select");
  const textarea = document.querySelector(".advisor-card textarea");

  let allFilled = true;
  selects.forEach(select => {
    if (!select.value) {
      allFilled = false;
    }
  });

  if (!allFilled || !textarea.value) {
    alert("Please fill all fields!");
    return;
  }

  alert("Recommendation sent to client successfully!");
  textarea.value = "";
  document.querySelectorAll(".advisor-card form select").forEach(select => {
    select.value = "";
  });
}

// Publish Content (Advisor)
function publishContent() {
  const textarea = document.querySelectorAll(".advisor-card textarea")[1];
  
  if (!textarea || !textarea.value) {
    alert("Please write content before publishing!");
    return;
  }

  alert("Article published successfully!");
  textarea.value = "";
}

// Update Performance (Analyst)
function updatePerformance() {
  const inputs = document.querySelectorAll(".analyst-card form input, .analyst-card form select");
  
  let allFilled = true;
  inputs.forEach(input => {
    if (!input.value) {
      allFilled = false;
    }
  });

  if (!allFilled) {
    alert("Please fill all fields!");
    return;
  }

  alert("Fund performance updated successfully!");
  inputs.forEach(input => {
    input.value = "";
  });
}

// Generate Report (Analyst)
function generateReport(type) {
  alert(`${type.charAt(0).toUpperCase() + type.slice(1)} report generated successfully!\nThe report has been ready for download.`);
}

// Check Authentication
function checkAuth() {
  const userRole = localStorage.getItem("userRole");
  const username = localStorage.getItem("username");
  
  // If user is not logged in and not on login or register page
  const currentPage = window.location.pathname.split("/").pop();
  if (!userRole && currentPage !== "login.html" && currentPage !== "register.html" && currentPage !== "index.html") {
    window.location.href = "login.html";
  }
}

// Run authentication check on page load
document.addEventListener("DOMContentLoaded", checkAuth);

// Logout Function
function logout() {
  localStorage.removeItem("userRole");
  localStorage.removeItem("username");
  window.location.href = "login.html";
}