const homeEl = document.querySelector(".home-el")
const guestEl = document.querySelector(".guest-el")
const homeScoreDisplay = document.querySelector(".home-score span");
const guestScoreDisplay = document.querySelector(".guest-score span");
const btnReset = document.querySelector(".btn-reset");
const homeUl = document.querySelector("ul.home");
const guestUl = document.querySelector("ul.guest");

let homeScore = 0;
let guestScore = 0;

// Resets the game variables and display
btnReset.addEventListener("click", () => {
    homeScoreDisplay.textContent = 0;
    guestScoreDisplay.textContent = 0;
    homeScore = 0;
    guestScore = 0;

    checkHighScore();
});

homeUl.addEventListener("click", (e) => {
    homeScore += parseInt(e.target.value);
    homeScoreDisplay.textContent = homeScore;

    
    checkHighScore()
});

guestUl.addEventListener("click", (e) => {
    guestScore += parseInt(e.target.value);
    guestScoreDisplay.textContent = guestScore;

    checkHighScore()
});

// Adds outline to the display of the current high score
function checkHighScore() {
    if (homeScore > guestScore) {
        homeEl.classList.add("outline")
        guestEl.classList.remove("outline");
    } else if (guestScore > homeScore) {
        guestEl.classList.add("outline")
        homeEl.classList.remove("outline");
    } else {
        homeEl.classList.remove("outline");
        guestEl.classList.remove("outline");
    }
}
