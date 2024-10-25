const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  
  timer = setInterval(() => {
    startButton.disabled = true;
    remainingTime--;
    console.log(remainingTime);
    const timerElement = document.querySelector('#time')
    timerElement.innerText = remainingTime;
    if (remainingTime <= 0) {
      clearInterval(timer);
      showToast()
      remainingTime = DURATION+1;
      startButton.disabled = false;
      
    }
  }, 1000);
  

  console.log("startCountdown called!");
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
}
