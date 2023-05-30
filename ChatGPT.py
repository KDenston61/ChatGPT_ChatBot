import os  # Provides functions for interacting with the operating system
import webbrowser  # Enables opening a browser window
from flask import Flask, request, jsonify, render_template  # Imports necessary classes and functions from Flask library
import openai  # Imports the OpenAI library for interacting with the OpenAI API

openai.api_key = 'Insert your OpenAI API Key here'  # Sets the API key for OpenAI

ChatGPT = Flask(__name__)  # Creates a Flask application instance

@ChatGPT.route('/')
def home():
    return render_template('index.html')

@ChatGPT.route('/chat', methods=['POST'])
def chat():
    question = request.form['question']
    response = generate_response(question)
    return jsonify({'response': response})

def generate_response(question):
    # Use the OpenAI API to generate a response based on the user's question
    response = openai.Completion.create(
        engine='text-davinci-003',
        prompt=question,
        max_tokens=500,
        n=1,
        stop=None,
        temperature=0.7,
    )

    # Extract the generated response from the API's response
    generated_text = response.choices[0].text.strip()

    return generated_text

@ChatGPT.route('/favicon.ico')
def favicon():
    return '', 204

if __name__ == '__main__':

    # Open the browser window automatically
    webbrowser.open('http://localhost:5000')

    # Redirect stderr to a null device
    stderr_fd = os.open(os.devnull, os.O_WRONLY)
    os.dup2(stderr_fd, 2)


ChatGPT.run()