let typeOfCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let deck = [typeOfCard, typeOfCard, typeOfCard, typeOfCard];

let hitButton = document.getElementById("hit-game-button");
let standButton = document.getElementById("stand-game-button");
let startButton = document.getElementById("start");

standButton.style.display = "none";
hitButton.style.display = "none";

let dealer = [];
let player = [];
let stand = false;

function EnableButtons(){
  standButton.style.display = "inline-block";
  hitButton.style.display = "inline-block";
}

function Dealing() {
  let elso = parseInt(Math.random(0, 4));
  let masodik = parseInt(Math.floor(Math.random() * 15));

  let szam = deck[elso][masodik];

  deck[elso][masodik] = 0;
  return szam;
}

function Round() {
  standButton.style.display = "none";
  hitButton.style.display = "none";
  dealer[dealer.length] = Dealing();
  player[player.length] = Dealing();
  setTimeout()
}
Round();
console.log(dealer);
console.log(player);

startButton.addEventListener("click", () => {
  EnableButtons()
});
