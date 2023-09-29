// JavaScript for handling the contact form submission
$("#contact-form").submit(function (event) {
    event.preventDefault();
    const formData = {
      name: $("#contact-form input[name='name']").val(),
      email: $("#contact-form input[name='email']").val(),
      message: $("#contact-form textarea[name='message']").val()
    };
  
    // Make a POST request to your backend endpoint to send the email
    $.post("/send-email", formData, function (response) {
      alert(response.message);
    });
  });
  
  // Get references to the input fields and button
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');
const sendButton = document.getElementById('sendButton');

// Function to handle sending the email
function sendEmail() {
  const name = nameInput.value;
  const email = emailInput.value;
  const subject = subjectInput.value;
  const message = messageInput.value;

  // Replace this with your actual email sending logic using libraries or APIs.
  // For this example, we'll just display an alert with the user's input.
  alert(`Email sent:
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}`);
}

// Attach the sendEmail function to the button's click event
sendButton.addEventListener('click', sendEmail);