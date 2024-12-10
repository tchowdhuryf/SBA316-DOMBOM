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

    checkForMatch();
  }
}

function checkForMatch() {
  if (card1.dataset.img === card2.dataset.img) {
    card1.removeEventListener("click", flipCard);
    card2.removeEventListener("click", flipCard);
  } else {
    setTimeout(() => {
      card1.classList.remove("flip");
      card2.classList.remove("flip");
    }, 1000);
  }
}

cards.forEach((card) => card.addEventListener("click", flipCard));
