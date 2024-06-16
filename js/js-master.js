let count = 0;
let cards = document.querySelectorAll(".content");
let cards1 = document.querySelectorAll(".quaContent");

function toggleTheme() {
  count++;
  if (count % 2 !== 0) {
    document.querySelector("body").classList.remove("bg-dark", "text-white");
    for (let i = 0; i < cards.length; i++) {
      let card = cards[i];
      card.classList.remove("bg-dark", "text-white");
      card.classList.add("bg-white", "text-black");
    }
    for (let i = 0; i < cards1.length; i++) {
      let card = cards1[i];
      card.classList.remove("border-light");
      card.classList.add("border-dark");
    }
  } else {
    document.querySelector("body").classList.add("bg-dark", "text-white");
    for (let i = 0; i < cards.length; i++) {
      let card = cards[i];
      card.classList.remove("bg-white", "text-black");
      card.classList.add("bg-dark", "text-white");
    }
    for (let i = 0; i < cards1.length; i++) {
      let card = cards1[i];
      card.classList.remove("border-dark");
      card.classList.add("border-light");
    }
  }
}
