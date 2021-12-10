

const meter = document.getElementById("meter")

// Task:
// Write a function to wire up the festivity loader to reflect how many days are remaining until Christmas!

const countdownDisplay = document.getElementById("countdown-display")
const timesUp = 'December 25, 2021';
const countdownTimer = document.getElementById('countdown-timer');

function christmasCountdown(){
    const christmas = 25
    // Task:
    // - Get today's date (you only need the day).

    const date = new Date();
    const todayDate = date.getDate();
    // - Calculate remaining days.
    const remainingDays = christmas - todayDate;
    // - Display remaining days in countdownDisplay.
    countdownDisplay.textContent = remainingDays;
    // SEt meter to days left until Christmas
    meter.value = todayDate;
    meter.max = christmas;
}

christmasCountdown()

