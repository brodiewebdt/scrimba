

const greeting = document.getElementById("greeting")
const christmassifierBtn = document.getElementById("christmassifierBtn")
christmassifierBtn.addEventListener("click", christmassifyName)

function christmassifyName() {
   // Task:
  // - Add christmassify class to greeting.
  //- Check whether christmassifierBtn has christmassify on it. If so, change text to "De-christmassify", if not, change text to "Christmassify"
  if (greeting.classList.contains('christmassified')) {
    document.body.style.background = 'url(https://source.unsplash.com/gWG3hqE07ls) no-repeat center /cover';
    garland.style.display = 'none';
    confetti.style.display = 'block';
    greeting.classList.remove('christmassified');
    christmassifierBtn.textContent = 'Christmassify';
    greeting.style.fontFamily = 'Dancing Script';
    greeting.textContent = '🎉 Happy New Year! 🎇';
       
} else {
    document.body.style.background = 'url(https://source.unsplash.com/pCA7fwigQMs) no-repeat center /cover';
    garland.style.display = 'block';
    confetti.style.display = 'none';
    greeting.classList.add('christmassified');
    christmassifierBtn.textContent = 'De-Christmassify';
    greeting.style.fontFamily = 'Mountains of Christmas';
    greeting.textContent = '🎅 Merry Christmas! ☃️';   
}
}

// Stretch goals:
// - Play Christmas music when Christmas class is added.
// - Remove the Christmas class after a given time.
