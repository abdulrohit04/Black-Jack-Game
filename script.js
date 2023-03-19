let cards = []
let sum = 0
let isAlive = false
let blackJack = false
let message = ""

let player= {
    name: "Player",
    chips: "200"
}


let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let perEl = document.getElementById("pear-el")



function getRandomcard(){
    let number = Math.floor(Math.random() * 13) +1
    if (number === 1){
        return 11
    }
    else if (number >= 10){
        return 10
    }
    else{
        return number
    }
}



function startGame(){
    let firstCard = getRandomcard()
    let secondCard = getRandomcard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}


function renderGame(){
if (sum<21){
    message = "Do you want to draw a new card?"
    isAlive = true
}

else if(sum===21){
    message = "You win it is a BlackJack"
    blackJack = true
}

else{
    message = "You fail"
    isAlive = false
}
    messageEl.textContent = message
    cardsEl.textContent = "Cards : "  + cards
    sumEl.textContent = "Sum : " + sum
    if (blackJack=== true){
    perEl.textContent = player.name + " $ "+  player.chips
    }
}

function newcard(){
    if (isAlive == true && blackJack == false ){
    let card = getRandomcard()
    cards.push(card)
    sum += card
    
    renderGame()
    }
}    

