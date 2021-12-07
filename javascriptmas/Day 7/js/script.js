

const playBtn = document.getElementById("play-btn")
const pauseBtn = document.getElementById("pause-btn")
const stopBtn = document.getElementById("stop-btn")
 
const music = new Audio('bells.mp3');
let volumeControl = document.querySelector ('.volume-control');

// - Add the functionality to play, pause and stop the jingling bells (bells.mp3).
playBtn.addEventListener('click', function() {
    music.play();
})

pauseBtn.addEventListener('click', function() {
    // music.pause();
    if (music.paused) {
        music.play();
    }else{
        music.pause();
        music.currentTime = 0.0;
    }
})

stopBtn.addEventListener('click', function() {
    music.pause();
    music.currentTime = 0.0;
})

// Stretch goals:
// - Add volume controls.
// - Allow the user to select different sounds.
volumeControl.addEventListener('input', function(e) {
    music.volume = e.currentTarget.value / 100;
})