function showAlert() {
    alert("Thanks for clicking!");
  }
  
  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); // prevents page refresh
    alert("Thank you for your message.");
    
  });
  
const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  
  // Optionally, save preference
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// On page load, apply saved theme
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }
});
