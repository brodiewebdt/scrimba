
const sign = document.getElementById('sign')
const textInput = document.getElementById('text-input')
const btn = document.getElementById('btn')
// Task:
// - Write a function to update the Santa Stop Here sign with the user's own text.

function writeMessage() {
    sign.innerHTML = `🎅 ${textInput.value} ☃️`;
    textInput.value = '';
    textInput.focus();
}

btn.addEventListener('click', function() {
    writeMessage();
})


// Stretch goals
// - Add a min and max length to the message.
// - Add interchangeable emojis.
// - Allow the user to customize the colors and other styling elements, too.