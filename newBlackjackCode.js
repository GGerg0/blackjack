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
  standButton.style.display = "none";
  hitButton.style.display = "none";
  if (deck.some(CheckDeck)) {
    dealer[dealer.length] = DealingV2();
    Wait(1);
    console.log(dealer);
    player[player.length] = DealingV2();
    Wait(1);
    console.log(player);
    
  } else {
    console.log("Üres a pakli");
  }
  
    standButton.style.display = "inline-block";
  hitButton.style.display = "inline-block";
  
  
  console.log(deck);
}


//start
startButton.addEventListener("click", () => {
  EnableButtons();
});

//hit
hitButton.addEventListener("click", () => {
  Round();
});
