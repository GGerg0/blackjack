let deck = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];

console.log(deck);
let deckCOunt = 56;
const hitButton = document.getElementById("hit-game-button");
const standButton = document.getElementById("stand-game-button");
const deckDiv = document.getElementById("deck");
const startButton = document.getElementById("start");
const playerDiv = document.getElementById("player");
const dealerDiv = document.getElementById("dealer");
const EndDiv = document.getElementById("endresult");
const content = document.querySelectorAll("#content>:not(#endresult)");
const playerText = document.querySelector("#player~p");
const resetButton = document.getElementById("reset");
let playerValue = 0;
let dealerValue = 0;

let dealer = [];
let player = [];
let stand = false;
resetButton.style.display = "none"

//Egy kártya valós értéke
function CardValue(c) {
  switch (c) {
    case "J":
      return 10;
      break;
    case "Q":
      return 10;
      break;
    case "K":
      return 10;
      break;
    case "A":
      return 10;
      break;
    default:
      return c;
  }
}

//Alap értékek beállítása
function GameReset() {
  deck = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];
  deckCOunt = 56;
  playerValue = 0;
  dealerValue = 0;
  dealer = [];
  player = [];
  stand = false;
  EndDiv.style.display = "none";
  playerDiv.style.transform = `translate(0vw)`;
  playerDiv.innerHTML = ``;
  dealerDiv.innerHTML = ``;
  resetButton.style.display = "none"
  startButton.style.display = "inline-block"
  deckDiv.innerHTML = deckCOunt;
}

//Kártya elrendezés
function CardLayout() {
  const cards = document.querySelectorAll("#player>div");
  let counter = 0;

  playerDiv.style.transform = `translate(-${((cards.length - 1) / 2) * 10}vw)`;

  cards.forEach((c) => {
    c.style.transform = `translate(${counter * 10}vw)`;
    counter++;
  });
}

//túllépés ellenőrzése
function CheckBust(value) {
  if (value > 21) {
    return true;
  } else {
    return false;
  }
}

//Játék vége
function EndGame() {
  if (CheckBust(playerValue)) {
    HideButtons();
    EndDiv.style.display = "block";
    EndDiv.innerHTML = `<h1>Dealer nyert!</h1>`;
    resetButton.style.display = "inline-block";
    return true;
  }

  if (CheckBust(dealerValue)) {
    HideButtons();
    EndDiv.style.display = "block";
    EndDiv.innerHTML = `<h1>Játékos nyert!</h1>`;
    resetButton.style.display = "inline-block";
    return true;
  }
  if (stand == true && playerValue > dealerValue) {
    HideButtons();
    EndDiv.style.display = "block";
    EndDiv.innerHTML = `<h1>Játékos nyert!</h1>`;
    resetButton.style.display = "inline-block";
    return true;
  }
  if (stand == true && playerValue == dealerValue) {
    EndDiv.style.display = "block";
    EndDiv.innerHTML = `<h1>Döntetlen!</h1>`;
    resetButton.style.display = "inline-block";
    return true;
  }
  return false;
}

//játék elemek elrejtése
function HideGame() {
  content.forEach((e) => {
    e.style.display = "none";
  });
}

//vezérl gobmbok megejelenítése
function ShowButtons() {
  standButton.style.display = "inline-block";
  hitButton.style.display = "inline-block";
}
//vezérl gobmbok elrejtése
function HideButtons() {
  standButton.style.display = "none";
  hitButton.style.display = "none";
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
//random szám
function RandomNumber(max){
  return parseInt(Math.floor(Math.random() * max))
}

//Kártya osztás egy embernek
function DealingV2() {
  let kartya = RandomNumber(14);
  while (deck[kartya] < 1) {
    kartya = RandomNumber(14);
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
}

//player kártyaosztás
function PlayerDealing() {
  player[player.length] = DealingV2();
  playerDiv.innerHTML += `<div>${player[player.length - 1]}</div>`;
  CardLayout();
  deckCOunt -= 1;
  playerValue += CardValue(player[player.length - 1]);
  deckDiv.innerHTML = deckCOunt;
}

//dealer kártyaosztás
function DealerDealing() {
      dealer[dealer.length] = DealingV2();
    dealerDiv.innerHTML += `<div>${
      dealer.length == 1
        ? dealer[dealer.length - 1]
        : `<img src="shh.png" alt= "shhhh">`
    }</div>`;
    dealerValue += CardValue(dealer[dealer.length - 1]);
    deckCOunt -= 1;
}

//egy kör functionje
function PlayerRound() {
  if (deck.some(CheckDeck)) {
    PlayerDealing()
    console.log(playerValue);
    console.log(player);
  } else {
    console.log("Üres a pakli");
  }
  
  console.log(deck);
  EndGame();
}

function DealerRound() {
  while (dealerValue < 17) {
    DealerDealing();
    console.log(dealerValue);
    console.log(dealer);
  }
  deckDiv.innerHTML = deckCOunt;
  EndGame();
}

HideButtons();

//start
startButton.addEventListener("click", () => {
  startButton.style.display = "none";
  ShowButtons();

  PlayerDealing();
  DealerDealing();
  PlayerDealing();
  DealerDealing();
});

//hit
hitButton.addEventListener("click", () => {
  PlayerRound();
});
//stand
standButton.addEventListener("click", () => {
  stand = true;
  DealerRound();
});
//reset
resetButton.addEventListener("click", ()=> {
  GameReset();
})