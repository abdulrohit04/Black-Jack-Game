let firstCard = 1
let secondCard = 7
let sum = firstCard + secondCard
let isAlive = true
let blackJack = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function start(){
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
    cardsEl.textContent = "Cards : " + firstCard + ", " + secondCard
    sumEl.textContent = "Sum : " + sum
}

function newcard(){
    let thirdCard = 5
    sum += thirdCard

    start()

}    

