// Box Grid
const todaysDate = new Date();
const todaysDay = todaysDate.getDate();

const boxGrid = document.getElementById('box-grid');
const numberToWords = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen'
};
let newHtml = ''

for (let i = 1; i < 17; i++) {
  if (todaysDay > i) {
    newHtml += `<div class="${ numberToWords[i]} gift-box lipstick-hide"></div>`
  } else if (todaysDay === i) {
    newHtml += `<div id="todays-box" class="${ numberToWords[i]} gift-box snowflakes numbers">${ i }</div>`
  } else {
    newHtml += `<div class="${ numberToWords[i]} gift-box numbers">${ i }</div>`
  }
};

boxGrid.insertAdjacentHTML('afterbegin', newHtml);
const special = document.getElementById('todays-box');

special.onclick = (event) => {
  const specialDiv = event.target
  specialDiv.classList.toggle('numbers');
  specialDiv.classList.toggle('hide-number');
  specialDiv.classList.toggle('snowflakes');
  specialDiv.classList.toggle('lipstick-show');
  modal.style.display = "block";
}

// Modal
const modal = document.getElementById('giftModal');
const span = document.getElementsByClassName("close")[0];

// close modal when x clicked
span.onclick = function() {
    modal.style.display = "none";
}

// close modal when anywhere ourside modal clicked
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Countdown timer
const countDownTime = todaysDate.setHours(24,0,0,0); // count to midnight

const x = setInterval(function() {
    const now = new Date().getTime(); // time now
    const distance = countDownTime - now; // between now & countdown time
    
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // time calculations
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("countdown-timer").innerHTML = hours + "h : "
    + minutes + "m : " + seconds + "s "; // show timer on UI
    
    if (distance < 0) { // countdown over
        clearInterval(x);
        document.getElementById("countdown-timer").innerHTML = "EXPIRED";
    }
}, 1000);