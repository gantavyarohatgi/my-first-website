function showAlert() {
    alert("Thanks for clicking!");
  }
  
  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); // prevents page refresh
    alert("Thank you for your message.");
    
  });
  