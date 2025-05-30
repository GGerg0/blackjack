
let typeOfCard = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

let deck = [typeOfCard,typeOfCard,typeOfCard,typeOfCard]


let hitButton = document.getElementById("hit-game-button")
let standButton = document.getElementById("stand-game-button")


function Dealing (gameDeck)
{
    let elso = parseInt(Math.random(0,4));
    let masodik = parseInt(Math.floor(Math.random() * 15))
    return gameDeck[elso][masodik];

}

console.log(Dealing(deck));


