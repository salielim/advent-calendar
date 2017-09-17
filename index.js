// Box Grid
const todaysDate = new Date();
const todaysDay = todaysDate.getDate();
const boxGrid = document.getElementById("box-grid");

let newHtml = ""

for (let i = 1; i < 25; i++) {
  if (todaysDay > i) {
    newHtml += `<div class="box lipstick-hide-img"></div>`
  } else if (todaysDay === i) {
    newHtml += `<div id="todays-box" class="box snowflakes-img box-numbers">${i}</div>`
  } else {
    newHtml += `<div class="box box-numbers">${i}</div>`
  }
};

boxGrid.insertAdjacentHTML("afterbegin", newHtml);
const special = document.getElementById("todays-box");
const specialMobile = document.getElementById("todays-box-mobile");

special.onclick = (event) => {
  const specialDiv = event.target
  specialDiv.classList.toggle("box-numbers");
  specialDiv.classList.toggle("hide-number");
  specialDiv.classList.toggle("snowflakes-img");
  specialDiv.classList.toggle("lipstick-show-img");
  modal.style.display = "block";
}

specialMobile.onclick = (event) => {
  const specialDiv = event.target
  modal.style.display = "block";
}

// Modal
const modal = document.getElementById("giftModal");
const span = document.getElementsByClassName("modal-close")[0];

span.onclick = function () {
  modal.style.display = "none"; // close when x clicked
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none"; // close when anywhere outside modal clicked
  }
}

// Countdown timer
const countDownTime = todaysDate.setHours(24, 0, 0, 0); // count to midnight

const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownTime - now;
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // time calculations
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  const countdownTimerDiv = document.getElementById("countdown-timer")

  countdownTimerDiv.innerHTML = `${ hours }h : ${ minutes }m : ${ seconds }s `;  

  if (distance < 0) { // countdown over
    clearInterval(x);
    document.getElementById("countdown-timer").innerHTML = "EXPIRED";
  }
}, 1000);

// Apply Code Box
const applyCodeBox = document.getElementById("apply-code");
applyCodeBox.onclick = function () {
  applyCodeBox.innerHTML = "Applying...";

  setTimeout(function () { 
    applyCodeBox.innerHTML = "Applied";
    applyCodeBox.className = "applied-disabled"
  }, 500);
}