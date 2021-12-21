
const btnCalc = document.getElementById('btn-calc');
const speedometer = document.getElementById("speedometer")
const select = document.getElementById("select")
const time = document.getElementById("time")
const reindeerSpeed = document.getElementById('reindeer-speed')
let currentLocation = ""
let timeTaken = 0
let distance = 0

let destination = [
    {
        name: "North Pole",
        distanceFromPrevDestination: 9876
    },
    {
        name: "Munich",
        distanceFromPrevDestination: 2892
    },
    {
        name: "Kiev",
        distanceFromPrevDestination: 1111
    },
    {
        name: "Ulaanbaatar",
        distanceFromPrevDestination: 5324
    },
     {
        name: "Sydney",
        distanceFromPrevDestination: 5458
    },
    {
        name: "Tijuana",
        distanceFromPrevDestination: 6531
    },
    {
        name: "Chicago",
        distanceFromPrevDestination: 1729
    }
]

// Task:
    // - Retrieve distance from previous destination from array of objects.
    // - Calculate speed and round speed to an integer (whole number).
    // - Display speed in speedometer paragraph.
    // - Display location as North Pole on pageload.
function calculateSpeed() {
    let speed = 0    
    currentLocation = select.value

    for(let i = 0; i < destination.length; i++) {
        if(destination[i].name === currentLocation) {
            distance = destination[i].distanceFromPrevDestination;
        }
    }
   
    speed = Math.floor(distance / time.value);
    reindeerSpeed.textContent = speed;
       
}

btnCalc.addEventListener('click', function() {
    calculateSpeed() 
})
