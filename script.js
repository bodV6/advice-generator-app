// DOM Elements
const adviceButton = document.querySelector("button");

const adviceId = document.querySelector("#advice-id>span");

const adviceText = document.querySelector(".advice-text");


// Click Button event
adviceButton.addEventListener("click", getAdvice);



// Fetch Api
async function getAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");
  let data = await response.json();
  loadNewAdvice(data);
}

// Display Api
function loadNewAdvice(advice) {
  adviceId.innerText = advice.slip.id;
  adviceText.innerText = advice.slip.advice;
}
