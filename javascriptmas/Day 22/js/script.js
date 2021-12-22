
const btn = document.getElementById("btn")
let timer = document.getElementById("timer")
let affirmation = document.getElementById("affirmation")
let timeout;

const playBtn = document.getElementById("play-btn")
const pauseBtn = document.getElementById("pause-btn")
const stopBtn = document.getElementById("stop-btn")
const audioControls = document.querySelector(".audio-controls")

const music = new Audio("https://devgarage.net/image-store/relaxing-piano.mp3")
let volumeControl = document.querySelector(".volume-control")
volumeControl.addEventListener("input", function (e) {
  music.volume = e.currentTarget.value / 100
})

// Task:
// - Write a function to start the countdown timer on the button click and display it in the DOM. Stop the timer when it reaches 0.
function startTimer(duration, display) {
  let timeCounter = duration;
  let minutes;
  let seconds;
   const myInterval = setInterval(function () {
     minutes = parseInt(timeCounter / 60, 10)
     seconds = parseInt(timeCounter % 60, 10)

     // set minutes to '0 if minutes < 10;
     // otherwise, set it to minutes
     minutes = minutes < 10 ? "0" + minutes : minutes
     // set seconds to '0 if seconds < 10;
     // otherwise, set it to seconds
     seconds = seconds < 10 ? "0" + seconds : seconds

     timer.textContent = minutes + ":" + seconds

     if (--timeCounter < 0) {
       timeCounter = duration
       clearInterval(myInterval)
     }
   }, 1000)
}
 

// Stretch goals:
// - Show a relaxing image in the background while the timer is running.
// - Play relaxing music.
btn.addEventListener('click', function() {
  timeout = 60 * 15;
  const display = document.querySelector("#timer");
  startTimer(timeout, display);
  document.body.style.background =
    "url(https://source.unsplash.com/mOcdke2ZQoE) no-repeat center /cover";
    audioControls.style.display = 'block';
    music.play();
})


// - Add the functionality to play, pause and stop the music.
playBtn.addEventListener("click", function () {
  music.play()
})

pauseBtn.addEventListener("click", function () {
  // music.pause();
  if (music.paused) {
    music.play()
  } else {
    music.pause()
    music.currentTime = 0.0
  }
})

stopBtn.addEventListener("click", function () {
  music.pause()
  music.currentTime = 0.0
})



