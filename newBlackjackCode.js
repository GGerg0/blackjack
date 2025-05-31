// let typeOfCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// let deck = [typeOfCard, typeOfCard, typeOfCard, typeOfCard];
let deck = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];

console.log(deck);
let deckCOunt = 56;
const hitButton = document.getElementById("hit-game-button");
const standButton = document.getElementById("stand-game-button");
const deckDiv = document.getElementById("deck");
const startButton = document.getElementById("start");
const playerDiv = document.getElementById("player");
const dealerDiv = document.getElementById("dealer");
let playerValue = 0;
let dealerValue = 0;

standButton.style.display = "none";
hitButton.style.display = "none";

let dealer = [];
let player = [];
let stand = false;

function CardValue(c) {
  switch (c) {
    case "J":
      return 10;
      break;
    case "Q":
      return 10;
      break;
    case "Q":
      return 10;
      break;
    case "A":
      return 10;
      break;
    default:
      return c;
  }
}

function EnableButtons() {
  standButton.style.display = "inline-block";
  hitButton.style.display = "inline-block";
}

//funcion a pakli elllenőrézéshez
function CheckDeck(k) {
  return k > 0;
}

//function a késleltetéshez
function Wait(sec) {
  let date1 = new Date().getTime();
  let date2 = date1 + sec * 1000;
  while (date1 < date2) {
    date1 = new Date().getTime();
  }
}

//Kártya osztás egy embernek
function DealingV2() {
  let kartya = parseInt(Math.floor(Math.random() * 14));
  while (deck[kartya] < 1) {
    kartya = parseInt(Math.floor(Math.random() * 14));
  }
  deck[kartya] -= 1;

  switch (kartya) {
    case 10:
      return "J";
      break;
    case 11:
      return "Q";
      break;
    case 12:
      return "K";
      break;
    case 13:
      return "A";
      break;
    default:
      return kartya + 1;
  }

  //egy kör functionje
}
function Round() {
  hitButton.setAttribute("disabled", "true");
  standButton.style.display = "none";
  hitButton.style.display = "none";
  if (deck.some(CheckDeck)) {
    dealer[dealer.length] = DealingV2();
    dealerDiv.innerHTML += `<div>${
      dealer.length == 1 ? dealer[dealer.length - 1] : ""
    }</div>`;
    // Wait(1);
    console.log(dealer);
    player[player.length] = DealingV2();
    playerDiv.innerHTML += `<div>${player[player.length - 1]}</div>`;
    // Wait(1);
    console.log(player);
    deckCOunt -= 2;
    playerValue = CardValue(player.length - 1);
    dealerValue = CardValue(dealer.length - 1);
  } else {
    console.log("Üres a pakli");
  }

  standButton.style.display = "inline-block";
  hitButton.style.display = "inline-block";
  hitButton.removeAttribute("disabled", "true");

  deckDiv.innerHTML = deckCOunt;
  console.log(deck);
}

//start
startButton.addEventListener("click", () => {
  startButton.style.display = "none";
  EnableButtons();
});

//hit
hitButton.addEventListener("click", () => {
  Round();
});
