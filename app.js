var choice
var tab = ['rock','paper','scissors']
var score = document.getElementById('score')
var img = document.getElementById('img')
var imgIA = document.getElementById('imgIA')
var your_p = document.getElementById('your')
var his_p = document.getElementById('his')
var sy = 0
var sh = 0

function rock(){
    choice = 'rock'
    img.className = "fa-regular fa-hand-back-fist"
    IA()
}

function paper(){
    choice = 'paper'
    img.className = "fa-regular fa-hand"
    IA()
}

function scissors(){
    choice = 'scissors'
    img.className = "fa-regular fa-hand-scissors"
    IA()
}

function IA(){

    var rand = Math.floor(Math.random()*tab.length);
    var choiceIA = tab[rand];
    console.log(choiceIA)
    
    if (choiceIA == 'rock'){
        imgIA.className = "fa-regular fa-hand-back-fist"
    }
    if (choiceIA == 'paper'){
        imgIA.className = "fa-regular fa-hand"
    }
    if (choiceIA == 'scissors'){
        imgIA.className = "fa-regular fa-hand-scissors"
    }

    battle(choiceIA)
}

function battle(choiceIA){

    if (choice == choiceIA){
        score.innerText = 'Égalité'
    }

    if (choice == 'rock'){
        if (choiceIA == 'paper'){
            score.innerText = 'Perdu !'
            s = 0
        }
        if (choiceIA == 'scissors') {
            score.innerText = 'Gagné !'
            s = 1
        }
    }

    if (choice == 'paper'){
        if (choiceIA == 'scissors'){
            score.innerText = 'Perdu !'
            s = 0
        }
        if (choiceIA == 'rock') {
            score.innerText = 'Gagné !'
            s = 1
        }
    }

    if (choice == 'scissors'){
        if (choiceIA == 'rock'){
            score.innerText = 'Perdu !'
            s = 0
        }
        if (choiceIA == 'paper') {
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
