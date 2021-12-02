
const body = document.getElementById("body")
const container = document.getElementById("container")
const greeting = document.getElementById("greeting")
const christmasBtn = document.getElementById("christmas")
const snowBtn = document.getElementById("snow")

// Task:
//- Add the functionality to switch the theme between 'Christmas' and 'snow'.
christmasBtn. addEventListener('click', function() {
    body.style.background = 'var(--wine-red)';
})

snowBtn. addEventListener('click', function() {
    body.style.background = 'url(https://source.unsplash.com/92yiS-nmXU8) no-repeat center /cover';
    container.style.backgroundColor = 'hsla(206, 30%, 95%, .9)';
})

// Stretch goals:
// - Add more themes!
// - Allow the user to customise the themes.
// - Turn the radio buttons into a toggle switch.