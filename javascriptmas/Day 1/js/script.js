

const countdownDisplay = document.getElementById("countdown-display")
const timesUp = 'December 25, 2021';
const countdownTimer = document.getElementById('countdown-timer');

function renderCountdown(){
    const christmas = 25
    // Task:
    // - Get today's date (you only need the day).
    const date = new Date()
    const todayDate = date.getDate();
    // - Calculate remaining days.
    const remainingDays = christmas - todayDate;
    // - Display remaining days in countdownDisplay.
    countdownDisplay.textContent = remainingDays;
}

renderCountdown()

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.

function timeRemaining(Xmas){
    const total = Date.parse(Xmas) - Date.parse(new Date());
    const seconds = Math.floor( (total/1000) % 60 );
    const minutes = Math.floor( (total/1000/60) % 60 );
    const hours = Math.floor( (total/(1000*60*60)) % 24 );
    const days = Math.floor( total/(1000*60*60*24) );
  
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }

function initializeClock(endTime) {
    const clock = countdownTimer;
    const timeInterval = setInterval(() => {
      const t = timeRemaining(endTime);
      clock.textContent = t.days + ' days'  + ' ' +
                          t.hours + ' hours' +  ' ' +
                          t.minutes + ' minutes' +  ' ' +
                          t.seconds + ' seconds' ;

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    } , 1000);
  }

  initializeClock(timesUp)
  