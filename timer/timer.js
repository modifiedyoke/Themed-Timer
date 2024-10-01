const minutesInput = document.querySelector('#number');
const startButton = document.querySelector('#start');
const timerDisplay = document.querySelector('#minutes');
const setButton = document.querySelector('#set');
let countdownInterval;
function updateTimerDisplay(timeInSeconds) {

  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600)/ 60) ;
  const seconds = timeInSeconds % 60;
timerDisplay.textContent = `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

setButton.addEventListener('click', () => {
  let timeInMinutes = parseInt(minutesInput.value);
  if (isNaN(timeInMinutes) || timeInMinutes <= 0) {
    alert('Please enter a valid number of minutes.');
    return;
  }
  let timeInSeconds = timeInMinutes * 60;
  updateTimerDisplay(timeInSeconds);
})

startButton.addEventListener('click', () => {
  let timeInMinutes = parseInt(minutesInput.value);
  if (isNaN(timeInMinutes) || timeInMinutes <= 0) {
    alert('Please enter a valid number of minutes.');
    return;
  }

  let timeInSeconds = timeInMinutes * 60;
  
  clearInterval(countdownInterval);
  
  countdownInterval = setInterval(() => {
    
      updateTimerDisplay(timeInSeconds);
      timeInSeconds--;
      if (timeInSeconds < 0) {
        clearInterval(countdownInterval);
        timerDisplay.textContent = '00:00:00';
        alert('Time is up!');
      }

      }, 1000); 
    });