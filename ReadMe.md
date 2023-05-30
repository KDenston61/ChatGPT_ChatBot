# ChatGPT Basic Chatbot

Before proceeding with the installation and usage of the provided code, please ensure that you have created an account with OpenAI and obtained an API key from their website.

The provided code consists of three main components: JavaScript, Python (Flask), and HTML. These components work together to create a user-friendly web-based chat interface that interacts with the OpenAI GPT-3.5 model.

## HTML

The HTML code (index.html) sets up the structure and layout of the chat interface. It includes the following elements:

```
container div: Acts as a wrapper for the entire chat interface.
h1 heading: Displays the title "Chat with ChatGPT".
chat div: Contains the chat messages and user input form.
messages div: Represents the container for displaying chat messages.
chat-form form: Allows users to submit their questions.
user-input textarea: Provides a text input area for users to type their questions.
submit button: Submits the user's question to the server.
clear-button button: Clears the chat messages.
dark-mode-toggle button: Toggles between light and dark modes for the chat interface.
```

## JavaScript

The JavaScript code (script.js) adds interactivity to the chat interface. It includes the following functionality:

```
Clearing chat messages: When the "Clear" button is clicked, the event listener clears the content of the messages div.
Toggling dark mode: When the "Toggle Dark Mode" button is clicked, the event listener toggles the presence of the dark-mode class on the body element.
```

## Python (Flask)

Be sure to install these packages first before running the script.

```py
pip install flask
pip install openai
```

The Python code (app.py) utilizes the Flask web framework to handle server-side logic and communication with the OpenAI GPT-3.5 model. It consists of the following parts:

```
Importing necessary modules: The code imports required modules such as os, webbrowser, Flask, request, jsonify, render_template, and openai.
Setting up the Flask application: An instance of the Flask application is created.
Defining routes:
Home route ("/"): Renders the index.html template.
Chat route ("/chat"): Handles the user's question, generates a response using the OpenAI API, and returns the response as JSON.
Generating a response: The generate_response function uses the OpenAI API to generate a response based on the user's question.
Running the application: The Flask application is run using the run() method.
Additional functionality: The code also includes a route for the favicon and some additional setup code for opening the browser window and redirecting stderr.
```

Once the packages are installed, you can run the Flask application using the command : 

```py
python ChatGPT.py
```

By combining these components, you can deploy the chat interface and interact with the OpenAI GPT-3.5 model. Users can enter questions, receive responses, and interact with the chat interface through the provided buttons for clearing messages and toggling dark mode.
