from flask import Flask, render_template, request, jsonify
import re

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def process_text():
    text = request.form['text']
    processed_text = re.sub(r'\(\d{2}:\d{2}\)', '', text)
    return jsonify({'text': processed_text})

if __name__ == '__main__':
    app.run(debug=True)
