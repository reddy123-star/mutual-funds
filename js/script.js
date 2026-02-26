// ===== MUTUAL FUNDS DATA =====
const funds = [
  {
    id: 1,
    name: "Equity Growth Fund",
    category: "Equity",
    risk: "high",
    returns1Y: 15,
    returns3Y: 12,
    returns5Y: 14,
    expenseRatio: 1.2,
    description: "Large-cap focused equity fund for growth-oriented investors"
  },
  {
    id: 2,
    name: "Balanced Advantage Fund",
    category: "Hybrid",
    risk: "medium",
    returns1Y: 10,
    returns3Y: 9,
    returns5Y: 10,
    expenseRatio: 0.8,
    description: "Dynamic allocation between equity and debt for balanced returns"
  },
  {
    id: 3,
    name: "Secure Income Fund",
    category: "Debt",
    risk: "low",
    returns1Y: 5,
    returns3Y: 5.5,
    returns5Y: 5.2,
    expenseRatio: 0.4,
    description: "Fixed income fund for conservative investors seeking stability"
  },
  {
    id: 4,
    name: "Dividend Yield Fund",
    category: "Equity",
    risk: "medium",
    returns1Y: 12,
    returns3Y: 11,
    returns5Y: 12,
    expenseRatio: 0.9,
    description: "Dividend-focused equity fund for regular income generation"
  },
  {
    id: 5,
    name: "International Growth Fund",
    category: "Equity - International",
    risk: "high",
    returns1Y: 18,
    returns3Y: 14,
    returns5Y: 16,
    expenseRatio: 1.5,
    description: "Global equity exposure for diversification and growth"
  }
];

// ===== LOGIN FUNCTION =====
function login() {
  const role = document.getElementById("role").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!role) {
    alert("Please select a role");
    return;
  }

  if (!username || !password) {
    alert("Please enter username and password");
    return;
  }

  // Save user session in localStorage
  const userData = {
    role: role,
    name: username,
    loginTime: new Date().toLocaleString()
  };

  localStorage.setItem('mf_user', JSON.stringify(userData));

  // Redirect based on role
  if (role === "investor") {
    window.location.href = "dashboard.html";
  } else if (role === "admin") {
    window.location.href = "admin.html";
  } else if (role === "advisor") {
    window.location.href = "advisor.html";
  }
}

// ===== LOGOUT FUNCTION =====
function logout() {
  const confirmed = confirm("Are you sure you want to logout?");
  if (confirmed) {
    localStorage.removeItem('mf_user');
    window.location.href = "index.html";
  }
}

// ===== LOAD USER DATA =====
function loadUserData() {
  const userStr = localStorage.getItem('mf_user');
  if (userStr) {
    const user = JSON.parse(userStr);
    const userNameElements = document.querySelectorAll('#userName');
    userNameElements.forEach(el => {
      el.textContent = user.name + " (" + user.role.charAt(0).toUpperCase() + user.role.slice(1) + ")";
    });
  }
}

// Load user data on page load
document.addEventListener('DOMContentLoaded', loadUserData);

// ===== DISPLAY FUNDS =====
function displayAllFunds() {
  const fundsList = document.getElementById('fundsList');
  if (!fundsList) return;

  fundsList.innerHTML = '';

  funds.forEach(fund => {
    const fundHTML = `
      <div class="fund-item" data-risk="${fund.risk}">
        <h3>${fund.name}</h3>
        <p class="fund-category">${fund.category}</p>
        <div class="fund-info">
          <div class="fund-info-row">
            <span class="label">Risk Level:</span>
            <span class="value"><span class="badge ${fund.risk}-risk">${fund.risk.charAt(0).toUpperCase() + fund.risk.slice(1)}</span></span>
          </div>
          <div class="fund-info-row">
            <span class="label">1Y Return:</span>
            <span class="value">${fund.returns1Y}%</span>
          </div>
          <div class="fund-info-row">
            <span class="label">3Y Return:</span>
            <span class="value">${fund.returns3Y}%</span>
          </div>
          <div class="fund-info-row">
            <span class="label">5Y Return:</span>
            <span class="value">${fund.returns5Y}%</span>
          </div>
          <div class="fund-info-row">
            <span class="label">Expense Ratio:</span>
            <span class="value">${fund.expenseRatio}%</span>
          </div>
          <div class="fund-info-row">
            <span class="label">Description:</span>
            <span class="value">${fund.description}</span>
          </div>
        </div>
        <button class="btn btn-primary" onclick="investFund(${fund.id}, '${fund.name}')">Invest Now</button>
      </div>
    `;
    fundsList.innerHTML += fundHTML;
  });
}

// ===== FILTER FUNDS =====
function filterFunds(riskLevel) {
  const fundsList = document.getElementById('fundsList');
  if (!fundsList) return;

  const fundItems = fundsList.querySelectorAll('.fund-item');

  // Update active button
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');

  // Filter funds
  fundItems.forEach(item => {
    if (riskLevel === 'all') {
      item.style.display = 'block';
    } else {
      if (item.dataset.risk === riskLevel) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    }
  });
}

// ===== INVEST FUNCTION =====
function investFund(fundId, fundName) {
  const user = JSON.parse(localStorage.getItem('mf_user'));
  
  if (!user) {
    alert("You need to login first to invest");
    window.location.href = "login.html";
    return;
  }

  const investmentAmount = prompt(`Enter investment amount for ${fundName}:`, "10000");

  if (investmentAmount === null) {
    return;
  }

  if (isNaN(investmentAmount) || investmentAmount <= 0) {
    alert("Please enter a valid amount");
    return;
  }

  // Save investment to localStorage
  let portfolio = JSON.parse(localStorage.getItem('mf_portfolio')) || [];
  
  portfolio.push({
    fundId: fundId,
    fundName: fundName,
    amount: investmentAmount,
    date: new Date().toLocaleDateString()
  });

  localStorage.setItem('mf_portfolio', JSON.stringify(portfolio));

  alert(`Successfully invested ₹${investmentAmount} in ${fundName}!`);
}

// ===== ADMIN TAB SWITCHING =====
function showTab(tabName) {
  // Hide all tabs
  const tabs = document.querySelectorAll('.admin-tab-content');
  tabs.forEach(tab => {
    tab.classList.remove('active');
  });

  // Remove active class from all buttons
  const buttons = document.querySelectorAll('.admin-tab');
  buttons.forEach(btn => {
    btn.classList.remove('active');
  });

  // Show selected tab
  const selectedTab = document.getElementById(tabName + '-tab');
  if (selectedTab) {
    selectedTab.classList.add('active');
  }

  // Add active class to clicked button
  event.target.classList.add('active');
}

// ===== ADVISOR TAB SWITCHING =====
function showAdvisorTab(tabName) {
  // Hide all tabs
  const tabs = document.querySelectorAll('.advisor-tab-content');
  tabs.forEach(tab => {
    tab.classList.remove('active');
  });

  // Remove active class from all buttons
  const buttons = document.querySelectorAll('.advisor-tab');
  buttons.forEach(btn => {
    btn.classList.remove('active');
  });

  // Show selected tab
  const selectedTab = document.getElementById(tabName + '-tab');
  if (selectedTab) {
    selectedTab.classList.add('active');
  }

  // Add active class to clicked button
  event.target.classList.add('active');
}

// ===== ALLOW ENTER KEY IN LOGIN FORM =====
document.addEventListener('DOMContentLoaded', function() {
  const passwordInput = document.getElementById('password');
  if (passwordInput) {
    passwordInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        login();
      }
    });
  }

  // Initialize funds on funds page
  if (document.getElementById('fundsList')) {
    displayAllFunds();
  }
});

// ===== UTILITY FUNCTIONS =====
function formatCurrency(amount) {
  return '₹' + parseFloat(amount).toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 18) return "Good Afternoon";
  return "Good Evening";
}

// ===== CONSOLE MESSAGE =====
console.log("Mutual Funds Platform loaded successfully!");
console.log("© 2026 Mutual Funds Investment Platform");
