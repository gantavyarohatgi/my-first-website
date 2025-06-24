window.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('theme-toggle');

  // Function to update the button text
  function updateButtonText() {
    if (document.body.classList.contains('dark')) {
      toggleButton.textContent = '☀️ Toggle to Light Mode';
    } else {
      toggleButton.textContent = '🌙 Toggle to Dark Mode';
    }
  }

  // Set theme on load
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }

  updateButtonText(); // Set correct label on load

  // Toggle theme on click
  toggleButton.addEventListener('click', function () {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }

    updateButtonText(); // Update label after change
  });
});

const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('show');
});



  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); // prevents page refresh
    alert("Thank you for your message.");
  });
  