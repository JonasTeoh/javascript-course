function darkmode() {
    console.log(document.querySelector('.box').checked);
    if (document.querySelector('.box').checked) {
        document.querySelector('body').classList.add('body2');
        document.querySelector('.js-score').classList.add('js-score2');
        document.querySelector('.js-vs').classList.add('js-vs2');
        document.querySelector('.move').classList.add('move2');
        document.querySelector('.dark-mode').classList.add('dark-mode2');
        var list = document.querySelectorAll('.move-img-div');
        for (var i = 0; i < list.length; ++i) {
            list[i].classList.add('move-img-div2');
        }
        var list = document.querySelectorAll('.reset-button');
        for (var i = 0; i < list.length; ++i) {
            list[i].classList.add('reset-button2');
        }
        document.querySelector('.title').classList.add('title2');
        document.querySelectorAll('.all-button').forEach((allButton, index)=>{
            allButton.classList.add('all-button2');
        })
        /*
        var list = document.querySelectorAll('.all-button');
        console.log(list);
        for (var i = 0; i < list.length; ++i) {
            console.log('2');
            list[i].classList.add('all-button2');
        }
        */
        var list = document.querySelectorAll('.button-div');
        for (var i = 0; i < list.length; ++i) {
            list[i].classList.add('button-div2');
        }
    } else {
        console.log('test');
        document.querySelector('body').classList.remove('body2');
        document.querySelector('.js-score').classList.remove('js-score2');
        document.querySelector('.js-vs').classList.remove('js-vs2');
        document.querySelector('.move').classList.remove('move2');
        document.querySelector('.dark-mode').classList.remove('dark-mode2');
        var list = document.querySelectorAll('.move-img-div');
        for (var i = 0; i < list.length; ++i) {
            list[i].classList.remove('move-img-div2');
        }
        var list = document.querySelectorAll('.reset-button');
        for (var i = 0; i < list.length; ++i) {
            list[i].classList.remove('reset-button2');
        }
        document.querySelector('.title').classList.remove('title2');
        var list = document.querySelectorAll('.all-button');
        for (var i = 0; i < list.length; ++i) {
            list[i].classList.remove('all-button2');
        }
        var list = document.querySelectorAll('.button-div');
        for (var i = 0; i < list.length; ++i) {
            list[i].classList.remove('button-div2');
        }
    }
}

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};
/*above code same as the below
  if(score === null){
    score = {
      wins: 0,
      losses: 0,
      ties: 0
    };
  }*/

let random;
let pcChoice = '';
let result = '';

function paperPlayGame() {
    let move = 'Paper';
    random = Math.random();
    if (random < 1 / 3) {
        pcChoice = 'Paper';
        result = 'It\'s a tie.';
    } else if (random > 2 / 3) {
        pcChoice = 'Scissor';
        result = 'You lose!';
    } else {
        pcChoice = 'Rock';
        result = 'You win!';
    }
    updateScore();
    //alert(`You picked Paper. Computer picked ${pcChoice}. ${result}\nWins: ${score.wins}, Loses: ${score.losses}, Ties: ${score.ties}`);
    displayMove(move);
    displayResult();
}

function scissorPlayGame() {
    let move = 'Scissor';
    random = Math.random();
    if (random < 1 / 3) {
        pcChoice = 'Scissor';
        result = 'It\'s a tie.';
    } else if (random > 2 / 3) {
        pcChoice = 'Rock';
        result = 'You lose!';
    } else {
        pcChoice = 'Paper';
        result = 'You win!';
    }
    updateScore();
    //alert(`You picked Paper. Computer picked ${pcChoice}. ${result}\nWins: ${score.wins}, Loses: ${score.losses}, Ties: ${score.ties}`);
    displayMove(move);
    displayResult();
}

function rockPlayGame() {
    let move = 'Rock';
    random = Math.random();
    if (random < 1 / 3) {
        pcChoice = 'Rock';
        result = 'It\'s a tie.';
    } else if (random > 2 / 3) {
        pcChoice = 'Paper';
        result = 'You lose!';
    } else {
        pcChoice = 'Scissor';
        result = 'You win!';
    }
    updateScore();
    //alert(`You picked Paper. Computer picked ${pcChoice}. ${result}\nWins: ${score.wins}, Loses: ${score.losses}, Ties: ${score.ties}`);
    displayMove(move);
    displayResult();
}

function updateScore() {
    if (result === 'You win!') {
        score.wins += 1;
    } else if (result === 'You lose!') {
        score.losses += 1;
    } else if (result === 'It\'s a tie.') {
        score.ties += 1;
    }
    localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Loses: ${score.losses}, Ties: ${score.ties}`;
}

function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Loses: ${score.losses}, Ties: ${score.ties}`;
}

document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Loses: ${score.losses}, Ties: ${score.ties}`;

function displayResult() {
    document.querySelector('.js-result').innerHTML = `${result}`;
    document.querySelector('.js-result').classList.remove('result-win', 'result-lose', 'result-tie', 'result-win2', 'result-lose2', 'result-tie2');
    if (result === 'You win!') {
        document.querySelector('.js-result').classList.add('result-win');
        if (document.querySelector('.box').checked) {
            document.querySelector('.result-win').classList.add('result-win2');
        }
    } else if (result === 'You lose!') {
        document.querySelector('.js-result').classList.add('result-lose');
        if (document.querySelector('.box').checked) {
            document.querySelector('.result-lose').classList.add('result-lose2');
        }
    } else if (result === 'It\'s a tie.') {
        document.querySelector('.js-result').classList.add('result-tie');
        if (document.querySelector('.box').checked) {
            document.querySelector('.result-tie').classList.add('result-tie2');
        }
    }
}

function displayMove(move) {
    if (move === 'Paper') {
        document.querySelector('.js-move-img').innerHTML = '<img class="move-img" src="https://supersimple.dev/projects/rock-paper-scissors/images/paper-emoji.png">You';
    } else if (move === 'Scissor') {
        document.querySelector('.js-move-img').innerHTML = '<img class="move-img" src="https://supersimple.dev/projects/rock-paper-scissors/images/scissors-emoji.png">You';
    } else if (move === 'Rock') {
        document.querySelector('.js-move-img').innerHTML = '<img class="move-img" src="https://supersimple.dev/projects/rock-paper-scissors/images/rock-emoji.png">You';
    }
    document.querySelector('.js-vs').innerHTML = 'vs';
    if (pcChoice === 'Paper') {
        document.querySelector('.js-pcmove-img').innerHTML = '<img class="move-img" src="https://supersimple.dev/projects/rock-paper-scissors/images/paper-emoji.png">Computer';
    } else if (pcChoice === 'Scissor') {
        document.querySelector('.js-pcmove-img').innerHTML = '<img class="move-img" src="https://supersimple.dev/projects/rock-paper-scissors/images/scissors-emoji.png">Computer';
    } else if (pcChoice === 'Rock') {
        document.querySelector('.js-pcmove-img').innerHTML = '<img class="move-img" src="https://supersimple.dev/projects/rock-paper-scissors/images/rock-emoji.png">Computer';
    }
    document.querySelector('.js-move').innerHTML = `You picked ${move} vs Computer picked ${pcChoice}`;
}

let autoPlaying = false;
let intervalID;

function autoPlay() {
    if(!autoPlaying){
        intervalID = setInterval(function(){
            let random = Math.random();
            if (random > 2/3) {
                paperPlayGame();
            }else if (random > 1/3) {
                rockPlayGame();
            }else if (random > 0) {
                scissorPlayGame();
            }
            autoPlaying = true;
        }, 1000)
        document.querySelector('.autoplay-button').innerHTML = "Auto Playing...";
    }else {
        clearInterval(intervalID);
        autoPlaying = false;
        document.querySelector('.autoplay-button').innerHTML = "Auto Play";
    }   
}

document.querySelector('.js-dark-mode').addEventListener('click', () => {
    darkmode();
});

document.body.addEventListener('keydown', (eventt) => {
    console.log(eventt);
    if (eventt.key === 'r'){
        rockPlayGame();
    } else if (eventt.key === 's'){
        scissorPlayGame();
    } else if (eventt.key === 'p'){
        paperPlayGame();
    }
})