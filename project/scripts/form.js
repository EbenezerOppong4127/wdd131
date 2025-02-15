const form = () => {
  const contactForm = document.querySelector(".contactForm"),
    responseMessage = document.querySelector(".response");

};
export default form;

// Make sure jQuery is loaded
$(document).ready(() => {
  // Form submission event with jQuery validation
  $('.contactForm').on('submit', function(e) {
    e.preventDefault();

    // Get form input values
    const name = $('input[name="name"]').val().trim();
    const email = $('input[name="email"]').val().trim();
    const message = $('textarea[name="message"]').val().trim();

    // Basic validation (additional jQuery validation rules can be added)
    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return;
    }

    // Simple email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Create a message object with template literals for any output
    const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD format
    const newMessage = {
      name,
      email,
      message,
      date: today,
      timestamp: Date.now()
    };

    // Retrieve stored messages from localStorage (or initialize as an empty array)
    let messages = JSON.parse(localStorage.getItem('messages')) || [];

    // Filter messages to count how many were sent today
    const messagesToday = messages.filter(msg => msg.date === today);

    // Conditional branching: Limit messages to 5 per day
    if (messagesToday.length >= 5) {
      alert(`You have reached the maximum number of messages for today.`);
      return;
    }

    // Add the new message to the array and save back to localStorage
    messages.push(newMessage);
    localStorage.setItem('messages', JSON.stringify(messages));

    // Build the response message using template literals exclusively
    const responseText = `Thank you, ${name}! Your message has been sent successfully. You have sent ${messagesToday.length + 1} message(s) today.`;

    // DOM manipulation: Update the response element and add a class for styling
    const $responseMessage = $('.response');
    $responseMessage.addClass('open').text(responseText);

    // Call an additional function to log the message details (object and array usage demonstration)
    logMessage(newMessage);

    // After a delay, redirect the user to a confirmation page
    setTimeout(() => {
      window.location.href = "message-sent.html"; // Make sure this page exists
    }, 2000);

    // Reset the form fields
    $(this).trigger('reset');
  });

  // Additional working function: Logs message details using an array method and template literals
  function logMessage(messageObj) {
    const keys = Object.keys(messageObj);
    const logString = keys.map(key => `${key}: ${messageObj[key]}`).join(', ');
    console.log(`Message details: ${logString}`);
  }
});