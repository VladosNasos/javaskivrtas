// Sample Questions for Each Subject
const allQuestions = {
    HTML: [
        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "Home Tool Markup Language",
                "Hyperlinks and Text Markup Language",
                "Hyper Textual Mark Language"
            ],
            correctAnswer: 0
        },
        {
            question: "Which HTML tag is used to define an internal style sheet?",
            options: ["<style>", "<css>", "<script>", "<link>"],
            correctAnswer: 0
        },
        {
            question: "What is the correct HTML element for inserting a line break?",
            options: ["<lb>", "<break>", "<br>", "<newline>"],
            correctAnswer: 2
        },
    ],
    CSS: [
        {
            question: "What does CSS stand for?",
            options: [
                "Creative Style Sheets",
                "Cascading Style Sheets",
                "Computer Style Sheets",
                "Colorful Style Sheets"
            ],
            correctAnswer: 1
        },
        {
            question: "Which CSS property controls the text size?",
            options: ["font-style", "text-size", "font-size", "text-style"],
            correctAnswer: 2
        },
        {
            question: "How do you insert a comment in a CSS file?",
            options: [
                "// this is a comment",
                "/* this is a comment */",
                "<!-- this is a comment -->",
                "** this is a comment **"
            ],
            correctAnswer: 1
        },
    ],
    JS: [
        {
            question: "Which company developed JavaScript?",
            options: ["Netscape", "Microsoft", "Google", "Apple"],
            correctAnswer: 0
        },
        {
            question: "Which symbol is used for comments in JavaScript?",
            options: ["//", "<!-- -->", "#", "/* */"],
            correctAnswer: 0
        },
        {
            question: "How do you create a function in JavaScript?",
            options: [
                "function:myFunction()",
                "function myFunction()",
                "create myFunction()",
                "def myFunction()"
            ],
            correctAnswer: 1
        },
    ],
    Mixed: []
};

// Generate Mixed Questions
function generateMixedQuestions() {
    const mixed = [];
    for (let subject in allQuestions) {
        if (subject !== 'Mixed') {
            mixed.push(...allQuestions[subject]);
        }
    }
    return shuffleArray(mixed);
}

allQuestions.Mixed = generateMixedQuestions();

// Shuffle Array Utility
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length -1; i >0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Game State
const gameState = {
    players: [],
    subject: '',
    difficulty: 3,
    questions: [],
    currentPlayerIndex: 0,
    currentQuestionIndex: 0,
    scores: {},
    playerChoices: {},
    totalQuestions: 0
};

// Player Colors
const playerColors = ['#e74c3c', '#3498db', '#2ecc71', '#9b59b6'];

// DOM Elements
const playerSelectionScreen = document.getElementById('player-selection');
const subjectSelectionScreen = document.getElementById('subject-selection');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');
const reviewScreen = document.getElementById('review-screen');
const congratsAnimation = document.getElementById('congrats-animation');

const playerButtons = document.querySelectorAll('.player-btn');
const toSubjectScreenBtn = document.getElementById('to-subject-screen');

const subjectButtons = document.querySelectorAll('.subject-btn');
const difficultyButtons = document.querySelectorAll('.difficulty-btn');
const toGameScreenBtn = document.getElementById('to-game-screen');
const backToPlayerBtn = document.getElementById('back-to-player');

const currentPlayerDisplay = document.getElementById('current-player');
const timerDisplay = document.getElementById('time-left');
const scoresDiv = document.getElementById('scores');
const questionText = document.getElementById('question-text');
const optionsDiv = document.getElementById('options');
const submitAnswerBtn = document.getElementById('submit-answer');

const winnersList = document.getElementById('winners-list');
const finalScoresList = document.getElementById('final-scores');
const newGameBtn = document.getElementById('new-game');
const reviewGameBtn = document.getElementById('review-game');

const reviewContent = document.getElementById('review-content');
const backToEndBtn = document.getElementById('back-to-end');

const themeToggleBtn = document.getElementById('theme-toggle');

const githubBtn = document.getElementById('github-btn');
const onlyFansBtn = document.getElementById('onlyfans-btn');

// Event Listeners
playerButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        selectNumberOfPlayers(parseInt(btn.getAttribute('data-count')));
        playerButtons.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        toSubjectScreenBtn.disabled = false;
    });
});

toSubjectScreenBtn.addEventListener('click', () => {
    navigateToScreen(playerSelectionScreen, subjectSelectionScreen);
});

subjectButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        selectSubject(btn.getAttribute('data-subject'));
        subjectButtons.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        checkSubjectAndDifficultySelected();
    });
});

difficultyButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        selectDifficulty(parseInt(btn.getAttribute('data-difficulty')));
        difficultyButtons.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        checkSubjectAndDifficultySelected();
    });
});

backToPlayerBtn.addEventListener('click', () => {
    navigateToScreen(subjectSelectionScreen, playerSelectionScreen);
});

toGameScreenBtn.addEventListener('click', () => {
    navigateToScreen(subjectSelectionScreen, gameScreen);
    initializeGame();
});

submitAnswerBtn.addEventListener('click', () => {
    submitAnswer();
});

newGameBtn.addEventListener('click', () => {
    resetGame();
    navigateToScreen(endScreen, playerSelectionScreen);
});

reviewGameBtn.addEventListener('click', () => {
    navigateToScreen(endScreen, reviewScreen);
    displayReview();
});

backToEndBtn.addEventListener('click', () => {
    navigateToScreen(reviewScreen, endScreen);
});

themeToggleBtn.addEventListener('click', toggleTheme);

githubBtn.addEventListener('click', () => {
    window.open('https://github.com/VladosNasos', '_blank');
});

onlyFansBtn.addEventListener('click', () => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
});

function selectNumberOfPlayers(count) {
    gameState.players = [];
    gameState.scores = {};
    gameState.playerChoices = {};
    for (let i = 1; i <= count; i++) {
        gameState.players.push({
            name: `Player ${i}`,
            color: playerColors[i - 1]
        });
        gameState.scores[`Player ${i}`] = 0;
        gameState.playerChoices[`Player ${i}`] = [];
    }
}

function selectSubject(subject) {
    gameState.subject = subject;
}

function selectDifficulty(difficulty) {
    gameState.difficulty = difficulty;
}

function checkSubjectAndDifficultySelected() {
    if (gameState.subject && gameState.difficulty) {
        toGameScreenBtn.disabled = false;
    }
}

function navigateToScreen(fromScreen, toScreen) {
    fromScreen.classList.add('hidden');
    toScreen.classList.remove('hidden');
}

function initializeGame() {
    gameState.currentPlayerIndex = 0;
    gameState.currentQuestionIndex = 0;
    gameState.playerChoices = {};
    gameState.scores = {};

    gameState.players.forEach(player => {
        gameState.scores[player.name] = 0;
        gameState.playerChoices[player.name] = [];
    });

    if (gameState.subject === 'Mixed') {
        gameState.questions = shuffleArray(allQuestions.Mixed).slice(0, gameState.players.length * gameState.difficulty);
    } else {
        const subjectQuestions = allQuestions[gameState.subject] || [];
        gameState.questions = shuffleArray(subjectQuestions).slice(0, gameState.players.length * gameState.difficulty);
    }

    gameState.totalQuestions = gameState.questions.length;
    updateScoresDisplay();
    loadQuestion();
}

let timerInterval;
let timeLeft = 15;

function loadQuestion() {
    clearInterval(timerInterval);
    timeLeft = 15;
    timerDisplay.textContent = timeLeft;
    submitAnswerBtn.disabled = true;
    optionsDiv.innerHTML = '';

    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    const currentQuestion = gameState.questions[gameState.currentQuestionIndex];

    currentPlayerDisplay.textContent = `${currentPlayer.name}'s Turn`;
    currentPlayerDisplay.style.color = currentPlayer.color;

    updateScoresDisplay();
    questionText.textContent = currentQuestion.question;

    currentQuestion.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.textContent = option;
        btn.dataset.index = index;
        btn.style.borderColor = currentPlayer.color;
        btn.addEventListener('click', () => {
            selectOption(btn, currentPlayer.color);
        });
        optionsDiv.appendChild(btn);
    });

    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            submitAnswer();
        }
    }, 1000);
}

function selectOption(button, color) {
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
        btn.style.backgroundColor = 'transparent';
    });

    button.classList.add('selected');
    button.style.backgroundColor = color;
    submitAnswerBtn.disabled = false;
}

function submitAnswer() {
    clearInterval(timerInterval);

    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    const currentQuestion = gameState.questions[gameState.currentQuestionIndex];

    const selectedBtn = document.querySelector('.option-btn.selected');
    let selectedAnswer = null;
    if (selectedBtn) {
        selectedAnswer = parseInt(selectedBtn.dataset.index);
    }

    if (selectedAnswer === currentQuestion.correctAnswer) {
        gameState.scores[currentPlayer.name] += 10;
    }

    gameState.playerChoices[currentPlayer.name].push({
        question: currentQuestion.question,
        selected: selectedAnswer !== null ? currentQuestion.options[selectedAnswer] : "No Answer",
        correct: currentQuestion.options[currentQuestion.correctAnswer],
        isCorrect: selectedAnswer === currentQuestion.correctAnswer
    });

    updateScoresDisplay();

    gameState.currentPlayerIndex++;
    gameState.currentQuestionIndex++;

    if (gameState.currentPlayerIndex >= gameState.players.length) {
        gameState.currentPlayerIndex = 0;
    }

    if (gameState.currentQuestionIndex >= gameState.questions.length) {
        endGame();
    } else {
        loadQuestion();
    }
}

function updateScoresDisplay() {
    scoresDiv.innerHTML = '';
    gameState.players.forEach(player => {
        const scoreSpan = document.createElement('span');
        scoreSpan.classList.add('score');
        scoreSpan.textContent = `${player.name}: ${gameState.scores[player.name]}`;
        scoreSpan.style.backgroundColor = player.color;
        scoresDiv.appendChild(scoreSpan);
    });
}

function endGame() {
    navigateToScreen(gameScreen, endScreen);
    displayWinners();
    displayFinalScores();
    triggerCongratsAnimation();
}

function displayWinners() {
    winnersList.innerHTML = '';
    const maxScore = Math.max(...Object.values(gameState.scores));
    const winners = gameState.players.filter(player => gameState.scores[player.name] === maxScore);

    winners.forEach(winner => {
        const li = document.createElement('li');
        li.textContent = `${winner.name} (${gameState.scores[winner.name]} points)`;
        li.style.color = winner.color;
        winnersList.appendChild(li);
    });
}

function displayFinalScores() {
    finalScoresList.innerHTML = '';
    const sortedPlayers = [...gameState.players].sort((a, b) => gameState.scores[b.name] - gameState.scores[a.name]);
    sortedPlayers.forEach(player => {
        const li = document.createElement('li');
        li.textContent = `${player.name}: ${gameState.scores[player.name]} points`;
        li.style.color = player.color;
        finalScoresList.appendChild(li);
    });
}

function resetGame() {
    gameState.players = [];
    gameState.subject = '';
    gameState.difficulty = 3;
    gameState.questions = [];
    gameState.currentPlayerIndex = 0;
    gameState.currentQuestionIndex = 0;
    gameState.scores = {};
    gameState.playerChoices = {};
    gameState.totalQuestions = 0;

    playerButtons.forEach(b => b.classList.remove('selected'));
    subjectButtons.forEach(b => b.classList.remove('selected'));
    difficultyButtons.forEach(b => b.classList.remove('selected'));

    toSubjectScreenBtn.disabled = true;
    toGameScreenBtn.disabled = true;

    congratsAnimation.classList.add('hidden');
}

function displayReview() {
    reviewContent.innerHTML = '';
    gameState.players.forEach(player => {
        const playerDiv = document.createElement('div');
        playerDiv.style.border = `2px solid ${player.color}`;
        playerDiv.style.borderRadius = '5px';
        playerDiv.style.padding = '10px';
        playerDiv.style.marginBottom = '15px';

        const playerHeader = document.createElement('h3');
        playerHeader.textContent = player.name;
        playerHeader.style.color = player.color;
        playerDiv.appendChild(playerHeader);

        const choices = gameState.playerChoices[player.name];
        choices.forEach((choice, index) => {
            const questionP = document.createElement('p');
            questionP.innerHTML = `<strong>Q${index + 1}:</strong> ${choice.question}`;
            playerDiv.appendChild(questionP);

            const selectedP = document.createElement('p');
            selectedP.innerHTML = `<strong>Your Answer:</strong> ${choice.selected}`;
            selectedP.style.color = choice.isCorrect ? '#2ecc71' : '#e74c3c';
            playerDiv.appendChild(selectedP);

            const correctP = document.createElement('p');
            correctP.innerHTML = `<strong>Correct Answer:</strong> ${choice.correct}`;
            correctP.style.color = '#3498db';
            playerDiv.appendChild(correctP);

            const hr = document.createElement('hr');
            playerDiv.appendChild(hr);
        });

        reviewContent.appendChild(playerDiv);
    });
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    themeToggleBtn.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
}

function triggerCongratsAnimation() {
    congratsAnimation.classList.remove('hidden');
    setTimeout(() => {
        congratsAnimation.classList.add('hidden');
    }, 4000);
}

themeToggleBtn.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
