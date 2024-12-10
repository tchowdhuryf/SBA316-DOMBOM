const cards = document.querySelectorAll(".card");

let cardFlipped = false;
let lockBoard = false;
let card1, card2;

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

function checkForMatch() {
  if (card1.dataset.img === card2.dataset.img) {
    card1.removeEventListener("click", flipCard);
    card2.removeEventListener("click", flipCard);
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
