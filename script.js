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

    if (card1.dataset.img === card2.dataset.img) {
      // it's a match!
      card1.removeEventListener("click", flipCard);
      card2.removeEventListener("click", flipCard);
    } else {
      // not a match
      setTimeout(() => {
        card1.classList.remove("flip");
        card2.classList.remove("flip");
      }, 1000);
    }
  }
}

cards.forEach((card) => card.addEventListener("click", flipCard));
