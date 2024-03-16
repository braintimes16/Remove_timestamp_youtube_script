document.getElementById('processButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    fetch('/process', {
        method: 'POST',
        body: new URLSearchParams({'text': inputText})
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('outputText').innerText = data.text;
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('copyButton').addEventListener('click', function() {
    const outputText = document.getElementById('outputText').innerText;
    navigator.clipboard.writeText(outputText)
        .then(() => alert('Copied to clipboard!'))
        .catch(err => console.error('Error copying text: ', err));
});