// Event Handling - Button Click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Hello 👋, welcome to My Website website');
  });
  
  // Hover Effect
  document.getElementById('hoverElement').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'aqua';
  });
  document.getElementById('hoverElement').addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
  });
  
  // Keypress Detection
  document.addEventListener('keypress', function(event) {
    console.log(`Key pressed: ${event.key}`);
  });
  
  // Button to Change Text/Color
  document.getElementById('colorButton').addEventListener('click', function() {
    const colors = ['red', 'green', 'blue', 'orange', 'purple'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    this.style.backgroundColor = randomColor;
    this.textContent = `Color changed to ${randomColor}`;
  });
  
  // Image Gallery (Slideshow)
  const images = ['img1.jpg', 'img2.jpg', 'img3.jpg']; // Make sure these images exist
  let currentImage = 0;
  setInterval(function() {
    document.getElementById('image').src = images[currentImage];
    currentImage = (currentImage + 1) % images.length;
  }, 3000);
  
  // Tabs/Accordion Functionality
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const contentId = this.getAttribute('data-content');
      document.querySelectorAll('.tab-content').forEach(content => {
        content.style.display = content.id === contentId ? 'block' : 'none';
      });
    });
  });
  
  // Form Validation
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const emailFeedback = document.getElementById('emailFeedback');
  const passwordFeedback = document.getElementById('passwordFeedback');
  
  // Real-time Email Feedback
  emailInput.addEventListener('input', function() {
    const email = emailInput.value;
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    emailFeedback.textContent = regex.test(email) ? 'Valid email' : 'Invalid email';
  });
  
  // Real-time Password Feedback
  passwordInput.addEventListener('input', function() {
    const password = passwordInput.value;
    passwordFeedback.textContent = password.length >= 8 ? 'Password is strong' : 'Password must be at least 8 characters';
  });
  
  // Submit Event for Form
  document.getElementById('myForm').addEventListener('submit', function(event) {
    if (!emailInput.value || !passwordInput.value) {
      event.preventDefault();
      alert('Please fill out both fields.');
    }
  });
  