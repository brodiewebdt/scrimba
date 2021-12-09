
const container = document.querySelector('.container')
const house = document.getElementById("house")
const decorator = document.getElementById("decorator")
decorator.addEventListener("click", deckTheHalls)

function openWin() {
    myWindow = window.open("", "", "width=100, height=100");  // Opens a new window
  }

function deckTheHalls() {
  // Task:
  // Write a function to add decorations (e.g. ☃️, 🎄, etc) next to the house when the switch is toggled. 
  if(decorator.checked) {
      openWin()
    function resizeWin() {
        myWindow.resizeTo(250, 250);                             // Resizes the new window
        myWindow.focus();                                        // Sets focus to the new window
      }
    // container.style.width = '850px';
    house.textContent = '⛄ 🔔 ❄️ 🦌 🎄 🏡 🎄 ☃️ 🎁 🎅 🌟';
  } else {
    house.textContent = '🏡'; 
  }
  
}

// Stretch goals:
// - Make sure that the house & decorations all stay on one line, even if there are a lot of decorations.
// - Allow the user to select different decorations.