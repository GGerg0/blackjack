// let typeOfCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// let deck = [typeOfCard, typeOfCard, typeOfCard, typeOfCard];
let deck = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];

console.log(deck);

let hitButton = document.getElementById("hit-game-button");
let standButton = document.getElementById("stand-game-button");
let startButton = document.getElementById("start");

standButton.style.display = "none";
hitButton.style.display = "none";

let dealer = [];
let player = [];
let stand = false;

function EnableButtons() {
  standButton.style.display = "inline-block";
  hitButton.style.display = "inline-block";
}

// function DealingV1() {
//   let elso = 0
//   let masodik = 0

//   do {
//     elso = parseInt(Math.floor(Math.random()*4));
//     masodik = parseInt(Math.floor(Math.random() * 15));
//   }while (deck[elso][masodik] < 1)

//   let szam = deck[elso][masodik];

//   deck[elso][masodik] = 0;
//   return szam;
// }

function CheckDeck(k) {
  return k > 0;
}

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
}
function Round() {
  standButton.style.display = "none";
  hitButton.style.display = "none";
  if (deck.some(CheckDeck)) {
    dealer[dealer.length] = DealingV2();
    player[player.length] = DealingV2();
  }
  else {
    console.log("Üres a pakli")
  }
  setTimeout(EnableButtons(), 2000);
  console.log(dealer);
  console.log(player);
  console.log(deck);
}

startButton.addEventListener("click", () => {
  EnableButtons();
});
hitButton.addEventListener("click", () => {
  Round();
});
