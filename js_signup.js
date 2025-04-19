// Handle Sign-Up Form Submission
document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get input values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  // Simulate form submission (you can integrate a backend API here)
  console.log(`Name: ${name}, Email: ${email}`);

  // Show success message
  const successMessage = document.getElementById('success-message');
  successMessage.classList.remove('hidden');

  // Clear form fields
  document.getElementById('signup-form').reset();
});