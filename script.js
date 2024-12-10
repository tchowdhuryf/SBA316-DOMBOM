const cards = document.querySelectorAll(".card");
const nameForm = document.querySelector("#nameForm");
const playerName = document.querySelector("#playerName");
const scoreContainer = document.getElementById("score-container");
const score = document.getElementById("score");

let cardFlipped = false;
let lockBoard = false;
let card1, card2;
let trackScore = 0;

function flipCard() {
  if (lockBoard) return;

  this.classList.add("flip");

  if (!cardFlipped) {
    cardFlipped = true;
    card1 = this;
  } else {
    cardFlipped = false;
    card2 = this;

    checkForMatch();
  }
}

function updateScore() {
  score.textContent = `Score: ${trackScore}`;
}

function checkForMatch() {
  if (card1.dataset.img === card2.dataset.img) {
    card1.removeEventListener("click", flipCard);
    card2.removeEventListener("click", flipCard);
    trackScore++;
    updateScore();
  } else {
    lockBoard = true;
    setTimeout(() => {
      card1.classList.remove("flip");
      card2.classList.remove("flip");
      lockBoard = false;
    }, 1000);
  }
}

(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos; //order-flex items property
  });
})();

cards.forEach((card) => card.addEventListener("click", flipCard));

//form doesn't hide with 3 letter names
nameForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (playerName.value.length >= 3) {
    const messageBox = document.getElementById("welcome-message");

    if (!messageBox) {
      const newMessageBox = document.createElement("div");
      newMessageBox.id = "welcome-message";
      document.body.appendChild(newMessageBox);
    }

    document.getElementById(
      "welcome-message"
    ).innerText = `Welcome, ${playerName.value}!`;

    messageBox.style.display = "block";
    nameForm.style.display = "none";
  } else {
    alert("Please enter a name with at least 3 characters.");
  }
});
