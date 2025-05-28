const hit = document.getElementById("hit-game-button");
const stand = document.getElementById("stand-game-button");
const dealerlapok = document.getElementById("dealer");
const playerlapok = document.getElementById("kartyak");


function Kiosztas(){
    let ertekek = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let rnd = Math.floor(Math.random() * ertekek.length);
    let ertek = ertekek[rnd];
    let card;

    if (ertek === "J" || ertek === "Q" || ertek === "K") {
        card = 10;
    } else if (ertek === "A") {
        card = 11;
    } else {
        card = parseInt(ertek);
    }

    return {
        nev: ertek,
        ertek: card 
    };
}

class Player {
    constructor() {
        this.cards = []; //kartyak
        this.ertek = 0;  //ertek
    }

    addCard(card) {
        this.cards.push(card);
        this.calculateScore();
    }

    calculateScore() {
        let total = 0;
        for (const card of this.cards) {
            total += card.ertek;
        }
        this.ertek = total;
    }

    getScore() {
        return parseInt(this.ertek);
    }

    reset() {
        this.cards = [];
        this.ertek = 0;
    }
}

var player = new Player();
var dealer = new Player();

//kiiras
function updateScores() {
    playerlapok.innerHTML = "Player: " + player.getScore();
    dealerlapok.innerHTML = "Dealer: " + dealer.getScore();
}

function startGame(){
    player.reset();
    dealer.reset();

    player.addCard(Kiosztas());
    player.addCard(Kiosztas());
    if(player.getScore() === 21){alert("Nyertél 21-el!"); startGame()}
    
    dealer.addCard(Kiosztas());
    dealer.addCard(Kiosztas());
    if(dealer.getScore() === 21){alert("Dealer nyert 21-el!"); startGame()}

    updateScores();
}

hit.addEventListener("click", () => {
    player.addCard(Kiosztas());
    updateScores();

    if (player.getScore() === 21) {
        alert("Nyertél 21-el!");
        startGame();
    } 
    else if (player.getScore() > 21) {
        alert("Túllépted, vesztettél!");
        startGame();
    }
});

stand.addEventListener("click", () => {
    while (dealer.getScore() < 18) {
        dealer.addCard(Kiosztas());
        updateScores();
    }

    if (dealer.getScore() > 21) {
        alert("Dealer túllépett, te nyertél!");
    } else if (dealer.getScore() > player.getScore()) {
        alert("Dealer nyert!");
    } else if (dealer.getScore() < player.getScore()) {
        alert("Nyertél!");
    } else {
        alert("Döntetlen!");
    }

    startGame();
});

startGame();
