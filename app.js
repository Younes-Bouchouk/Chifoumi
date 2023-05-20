let score = document.getElementById('score')
let imgIA = document.getElementById('imgIA')
let your_p = document.getElementById('your')
let his_p = document.getElementById('his')
let sy = 0
let sh = 0
let MyChoice = ''
let IAChoice = ''
var s = 0

function yourChoice(choice) {
    MyChoice = choice
    console.log(MyChoice)

    let img = document.getElementById('yourImg')
    img.src = `./assets/${MyChoice}.png`

    ChoiceIA()
}

function ChoiceIA(){
    let tab = ['rock','paper','scissors']
    let rand = Math.floor(Math.random()*tab.length);
    IAChoice = tab[rand];
    console.log(IAChoice)
    
    let imgIA = document.getElementById('IAImg')
    imgIA.src = `./assets/${IAChoice}.png`

    battle()
}


function battle(){
    console.log("Moi :", MyChoice)
    console.log("Adversaire :", IAChoice)

    if (MyChoice == IAChoice){
        score.innerText = 'Égalité'
        s = 2
    }

    if (MyChoice == 'rock'){
        if (IAChoice == 'paper'){
            score.innerText = 'Perdu !'
            s = 0
        }
        if (IAChoice == 'scissors') {
            score.innerText = 'Gagné !'
            s = 1
        }
    }

    if (MyChoice == 'paper'){
        if (IAChoice == 'scissors'){
            score.innerText = 'Perdu !'
            s = 0
        }
        if (IAChoice == 'rock') {
            score.innerText = 'Gagné !'
            s = 1
        }
    }

    if (MyChoice == 'scissors'){
        if (IAChoice == 'rock'){
            score.innerText = 'Perdu !'
            s = 0
        }
        if (IAChoice == 'paper') {
            score.innerText = 'Gagné !'
            s = 1
        }
    }
    points()
}

function points(){

    
    if (s == 1){
        sy += 1
        document.getElementById('your').innerHTML = sy
    }

    if (s == 0){
        sh += 1
        document.getElementById('his').innerHTML = sh
    }
}
