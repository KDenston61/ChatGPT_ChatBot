$(document).ready(function() {
  // Handle form submission
  $('#chat-form').submit(function(event) {
    event.preventDefault(); // Prevent page refresh
    submitForm();
  });

  // Handle Enter key press
  $('#user-input').keydown(function(event) {
    if (event.keyCode === 13) {
      event.preventDefault(); // Prevent line break
      submitForm();
    }
  });

  // Send user input to the server and get the response
  function sendUserInput(userInput) {
    $.ajax({
      url: '/chat',
      type: 'POST',
      data: { question: userInput },
      success: function(response) {
        // Display server response
        appendMessage('server', response.response);
      },
      error: function(xhr, status, error) {
        console.error(error);
      }
    });
  }

  // Append a message to the chat box
  function appendMessage(sender, message) {
    var senderName = sender === 'user' ? 'User' : 'ChatGPT';
    var messageClass = sender === 'user' ? 'user-message' : 'server-message';
    var messageContainer = $('<div>', {
      class: 'message ' + messageClass,
      html: '<strong>' + senderName + ': </strong><br>'
    });

    $('#messages').append(messageContainer);

    // Scroll to the bottom of the chat box
    $('#messages').scrollTop($('#messages')[0].scrollHeight);

    // Display the message character by character with a typing effect
    var currentChar = 0;
    var messageText = message;

    var typingInterval = setInterval(function() {
      if (currentChar < messageText.length) {
        // Append the next character
        messageContainer.append(messageText[currentChar]);
        currentChar++;
      } else {
        // Typing effect complete, stop the interval
        clearInterval(typingInterval);
      }
    }, 30); // Adjust typing speed by changing the delay (in milliseconds)
  }
  
  // Handle Clear button click
  $('#clear-button').click(function() {
    clearMessages();
  });

  // Clear the chat messages
  function clearMessages() {
    $('#messages').empty();
  }

  // Function to submit the form
  function submitForm() {
    // Get user input
    var userInput = $('#user-input').val().trim();

    if (userInput !== '') {
      // Clear user input
      $('#user-input').val('');

      // Display user message
      appendMessage('user', userInput);

      // Send user input to the server
      sendUserInput(userInput);
    }
  }
  
  // Handle Dark Mode toggle
  $('#dark-mode-checkbox').change(function() {
    var isChecked = $(this).is(':checked');
    toggleDarkMode(isChecked);
  });

  // Toggle Dark Mode styles
  function toggleDarkMode(isDarkMode) {
    if (isDarkMode) {
      $('body').addClass('dark-mode');
    } else {
      $('body').removeClass('dark-mode');
    }
  }
});
