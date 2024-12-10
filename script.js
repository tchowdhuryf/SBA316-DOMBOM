const cards = document.querySelectorAll(".card");

let cardFlipped = false;
let card1, card2;

function flipCard() {
  this.classList.add("flip");

  if (!cardFlipped) {
    cardFlipped = true;
    card1 = this;
  } else {
    cardFlipped = false;
    card2 = this;
  }
}

cards.forEach((card) => card.addEventListener("click", flipCard));
