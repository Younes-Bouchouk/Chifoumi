// Fonction pour générer le choix aléatoire de l'ordinateur
function getRandomChoice() {
    var choices = ['rock', 'paper', 'scissors'];
    var randomIndex = Math.floor(Math.random() * 3);

    let imgComputer = document.getElementById('player')
    imgComputer.src = `./assets/${randomIndex}.png`

    return choices[randomIndex];
}
  
// Fonction pour déterminer le gagnant
function getWinner(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
      return 'Égalité';
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return 'player';
    } 
    else {
      return 'computer';
    }
}

// Fonction pour afficher le statut du tour (Gagné, Perdu ou Égalité)
function showScore(result) {

  var text = document.getElementById('text')
  if (result === 'player') {
    text.textContent = 'Gagné';
  }

  else if (result === 'computer') {
    text.textContent = 'Perdu';
  }

  else {
    text.textContent = 'Égalité';
  }

  text.classList.add('animate')
} 

// Fonction pour afficher les images
function showImg(playerChoice, computerChoice) {

  let imgPlayer = document.getElementById('player')
  imgPlayer.src = `./assets/${playerChoice}.png`
  document.getElementById('player').classList.add('playerHand');

  let imgComputer = document.getElementById('computer')
  imgComputer.src = `./assets/${computerChoice}.png`
  document.getElementById('computer').classList.add('computerHand');

}

// Fonction pour lancer les animations
function anim(result) {
  if (result === 'player' || result === 'computer') {
    wins[result] += 1;

    document.getElementById(`points-${result}`).classList.add('animate');
    document.getElementById(`points-${result}`).textContent = wins[result];

    setTimeout(function() {
      document.getElementById(`points-${result}`).classList.remove('animate');
    }, 300);
  }
  setTimeout(function() {
    document.getElementById('player').classList.remove('playerHand');
    document.getElementById('computer').classList.remove('computerHand');
    text.classList.remove('animate')
  }, 300);
}

// Objet pour le nombre de victoire
let wins = {
  player: 0,
  computer: 0
};
  
// Fonction principale du jeu
function playGame(playerChoice) {

    var computerChoice = getRandomChoice();
    var result = getWinner(playerChoice, computerChoice);

    showImg(playerChoice, computerChoice)

    showScore(result)
    
    console.log('Le joueur a choisi : ' + playerChoice);
    console.log('L\'ordinateur a choisi : ' + computerChoice);
    console.log('Résultat : ' + result);

    anim(result)

}
  