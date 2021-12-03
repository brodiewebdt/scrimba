
const container = document.querySelector('.container')
const greeting = document.getElementById("greeting")
const btn = document.getElementById("btn")
const btn2 = document.getElementById("btn-2")

function fix() {
  // Task:
  // - Write a function to fix the UI problems with this Christmas message (make it Christmassy!)
  // - Run the function when the Fix button is clicked.
}

btn.addEventListener('click', function() {
    document.body.style.background = 'url(https://source.unsplash.com/5PQn41LFsQk) no-repeat center /cover';
    container.style.backgroundColor = 'hsla(206, 30%, 95%, .8)';
    greeting.style.fontFamily = 'Meow Script';
    greeting.style.fontSize = '64px';
    greeting.textContent = '🎄 Merry Christmas 🎄';
    btn.textContent = 'Ho Ho Ho';
})
//Stretch goals:
// - Add an extra theme, and the option to switch between them.
btn2.addEventListener('click', function() {
    document.body.style.background = 'url(https://source.unsplash.com/AZgVZHk9DkU) no-repeat center /cover';
    container.style.backgroundColor = 'hsla(206, 30%, 95%, .8)';
    greeting.style.fontFamily = 'Schoolbell';
    greeting.style.fontSize = '56px';
    greeting.textContent = '🥛 Merry Christmas 🍪';
    btn2.textContent = 'Jingle Bells';
    btn2.style.backgroundColor = 'var(--light-green)';
})
// - Change the message and theme to a New Year’s one automatically on December 31st.