

const greetingDisplay = document.getElementById("greeting-display")
const btn = document.getElementById("btn")
const bauble = document.getElementById("bauble")
// btn.addEventListener("click", writeGreeting)

const greetings = [
    "Santa Claus is coming to town!",
    "We wish you a Merry Christmas!",
    "Happy holidays!",
    "Ho, ho, ho! Merry Christmas!",
    "Jingle all the way!",
    "Merry Christmas! Wishing you all the happiness in the world!",
    "It's the most wonderful time of the year!",
    "Wishing you peace and joy all season long. Happy Holidays!",
    "Tis the season to be jolly! ",
    "I hope your holiday is full of love, peace and joy!",
    "Merry Christmas and Happy New Year!",
    "Wishing you a Christmas that's merry and bright!",
]

// Task:
// Write a function to display a random greeting in the card.
btn.addEventListener('click', function() {
    let randomNum = Math.floor(Math.random() * greetings.length);
    greetingDisplay.textContent = greetings[randomNum]
})
// Stretch goals:
// - Allow the user to input to and from names.
// - Add an input for custom messages.