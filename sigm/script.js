document.addEventListener('DOMContentLoaded', () => {
    // Questions Data
    const allQuestions = {
        HTML: [
            {
                question: "What is the purpose of the `<div>` element in HTML?",
                options: ["To divide the HTML document into sections", "To style elements", "To create links", "To insert images"],
                correctAnswer: 0
            },
            {
                question: "What does the `<!DOCTYPE html>` declaration do?",
                options: ["It defines the document type and version of HTML", "It links CSS file", "It creates a new element", "None of the above"],
                correctAnswer: 0
            },
            {
                question: "What is the correct HTML element for inserting a line break?",
                options: ["`<br>`", "`<break>`", "`<lb>`", "`<brk>`"],
                correctAnswer: 0
            },
            {
                question: "What is the purpose of the `<meta>` tag in HTML?",
                options: ["To provide metadata about the HTML document", "To style elements", "To create links", "To insert images"],
                correctAnswer: 0
            },
            {
                question: "What is the purpose of the `href` attribute in an `<a>` element in HTML?",
                options: ["To specify the URL or destination that the link should navigate to when clicked", "To style elements", "To create links", "To insert images"],
                correctAnswer: 0
            },
            {
                question: "What is the correct HTML element for a list item?",
                options: ["`<li>`", "`<listitem>`", "`<list-item>`", "`<li>`"],
                correctAnswer: 0
            },
            {
                question: "What is the correct HTML element for a table header?",
                options: ["`<th>`", "`<header>`", "`<tableheader>`", "`<table-header>`"],
                correctAnswer: 0
            },
            {
                question: "What is the correct HTML element for a table data cell?",
                options: ["`<td>`", "`<data>`", "`<tabledata>`", "`<table-data>`"],
                correctAnswer: 0
            },
            {
                question: "What is the correct HTML element for a form input field?",
                options: ["`<input>`", "`<field>`", "`<inputfield>`", "`<input-field>`"],
                correctAnswer: 0
            },
            {
                question: "What is the correct HTML element for a form submit button?",
                options: ["`<input type='submit'>`", "`<button type='submit'>`", "`<input-button type='submit'>`", "`<button-input type='submit'>`"],
                correctAnswer: 0
            },
            {
                question: "What is the correct HTML element for an image?",
                options: ["`<img>`", "`<picture>`", "`<image>`", "`<img-tag>`"],
                correctAnswer: 0
            },
            {
                question: "What is the correct HTML element for a video?",
                options: ["`<video>`", "`<videotag>`", "`<videoelement>`", "`<video-tag>`"],
                correctAnswer: 0
            },
            {
                question: "What is the correct HTML element for a script?",
                options: ["`<script>`", "`<scripttag>`", "`<scriptelement>`", "`<script-tag>`"],
                correctAnswer: 0
            },
            {
                question: "What is the correct HTML element for a style?",
                options: ["`<style>`", "`<styletag>`", "`<styleelement>`", "`<style-tag>`"],
                correctAnswer: 0
            },
            {
                question: "What is the correct HTML element for a header?",
                options: ["`<header>`", "`<header>`", "`<header>`", "`<header>`"],
                correctAnswer: 0
            },
            {
                question: "What is the correct HTML element for a footer?",
                options: ["`<footer>`", "`<footer>`", "`<footer>`", "`<footer>`"],
                correctAnswer: 0
            },
            {
                question: "What is the correct HTML element for a navigation bar?",
                options: ["`<nav>`", "`<navbar>`", "`<navigation>`", "`<nav-bar>`"],
                correctAnswer: 0
            },
            {
                question: "What is the correct HTML element for a section?",
                options: ["`<section>`", "`<section>`", "`<section>`", "`<section>`"],
                correctAnswer: 0
            },
            {
                question: "What is the correct HTML element for a main content area?",
                options: ["`<main>`", "`<main>`", "`<main>`", "`<main>`"],
                correctAnswer: 0
            },
            {
                question: "What is the correct HTML element for a sidebar?",
                options: ["`<aside>`", "`<sidebar>`", "`<aside>`", "`<aside>`"],
                correctAnswer: 0
            },
            {
                question: "What is the correct HTML element for a details summary?",
                options: ["`<details>`", "`<summary>`", "`<details>`", "`<summary>`"],
                correctAnswer: 0
            }
        ],
        CSS: [
            {
                question: "What does CSS stand for?",
                options: ["Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets", "Creative Style Sheets"],
                correctAnswer: 0
            },
            {
                question: "Where in an HTML document is the correct place to refer to an external style sheet?",
                options: ["In the `<body>` section", "At the end of the document", "In the `<head>` section", "In the `<footer>` section"],
                correctAnswer: 2
            },
            {
                question: "What is the correct CSS syntax?",
                options: ["`body:color=black;`", "`body {color: black;}`", "`{body;color:black;}`", "`{body:color=black;}`"],
                correctAnswer: 1
            },
            {
                question: "What is the correct way to add a comment in a CSS file?",
                options: ["`/*This is a comment*/`", "`//This is a comment`", "`<!--This is a comment-->`", "`<!This is a comment>`"],
                correctAnswer: 0
            },
            {
                question: "What does the `!important` rule in CSS do?",
                options: ["It makes a CSS rule more important than other rules", "It makes a CSS rule less important than other rules", "It makes a CSS rule apply to all elements", "It makes a CSS rule apply to no elements"],
                correctAnswer: 0
            },
            {
                question: "What is the correct CSS property to change the text color?",
                options: ["`color`", "`text-color`", "`font-color`", "`text-colour`"],
                correctAnswer: 0
            },
            {
                question: "What is the correct CSS property to change the background color?",
                options: ["`background-color`", "`bg-color`", "`background-colour`", "`bg-colour`"],
                correctAnswer: 0
            },
            {
                question: "What is the correct CSS property to change the font size?",
                options: ["`font-size`", "`text-size`", "`font-scale`", "`text-scale`"],
                correctAnswer: 0
            },
            {
                question: "What is the correct CSS property to change the font family?",
                options: ["`font-family`", "`text-font`", "`font-face`", "`text-face`"],
                correctAnswer: 0
            },
            {
                question: "What is the correct CSS property to change the font weight?",
                options: ["`font-weight`", "`text-weight`", "`font-strength`", "`text-strength`"],
                correctAnswer: 0
            },
            {
                question: "What is the correct CSS property to change the text alignment?",
                options: ["`text-align`", "`align-text`", "`text-position`", "`align-position`"],
                correctAnswer: 0
            },
            {
                question: "What is the correct CSS property to change the margin?",
                options: ["`margin`", "`space`", "`padding`", "`border`"],
                correctAnswer: 0
            },
            {
                question: "What is the correct CSS property to change the padding?",
                options: ["`padding`", "`space`", "`margin`", "`border`"],
                correctAnswer: 0
            },
            {
                question: "What is the correct CSS property to change the border?",
                options: ["`border`", "`border-style`", "`border-color`", "`border-width`"],
                correctAnswer: 0
            },
            {
                question: "What is the correct CSS property to change the width?",
                options: ["`width`", "`size`", "`length`", "`dimension`"],
                correctAnswer: 0
            },
            {
                question: "What is the correct CSS property to change the height?",
                options: ["`height`", "`size`", "`length`", "`dimension`"],
                correctAnswer: 0
            },
            {
                question: "What is the correct CSS property to change the box-sizing?",
                options: ["`box-sizing`", "`box-size`", "`box-dimension`", "`box-length`"],
                correctAnswer: 0
            },
            {
                question: "What is the correct CSS property to change the position?",
                options: ["`position`", "`location`", "`place`", "`spot`"],
                correctAnswer: 0
            },
            {
                question: "What is the correct CSS property to change the display?",
                options: ["`display`", "`show`", "`view`", "`showcase`"],
                correctAnswer: 0
            }
        ],
        JavaScript: [
            {
                question: "Inside which HTML element do we put the JavaScript?",
                options: ["`<javascript>`", "`<js>`", "`<scripting>`", "`<script>`"],
                correctAnswer: 3
            },
            {
                question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
                options: ["`<script href='xxx.js'>`", "`<script name='xxx.js'>`", "`<script src='xxx.js'>`", "`<script file='xxx.js'>`"],
                correctAnswer: 2
            },
            {
                question: "How do you create a function in JavaScript?",
                options: ["`function:myFunction()`", "`function = myFunction()`", "`function myFunction()`", "`myFunction:function()`"],
                correctAnswer: 2
            },
            {
                question: "What does '===' operator do in JavaScript?",
                options: ["Checks if two values are equal", "Checks if two values are not equal", "Checks if two values are the same type", "Checks if two values are not the same type"],
                correctAnswer: 2
            },
            {
                question: "What does '==' operator do in JavaScript?",
                options: ["Checks if two values are equal", "Checks if two values are not equal", "Checks if two values are the same type", "Checks if two values are not the same type"],
                correctAnswer: 0
            },
            {
                question: "What does '!=' operator do in JavaScript?",
                options: ["Checks if two values are not equal", "Checks if two values are equal", "Checks if two values are the same type", "Checks if two values are not the same type"],
                correctAnswer: 0
            },
            {
                question: "What does '!==' operator do in JavaScript?",
                options: ["Checks if two values are not equal", "Checks if two values are equal", "Checks if two values are not the same type", "Checks if two values are the same type"],
                correctAnswer: 2
            },
            {
                question: "What does '&&' operator do in JavaScript?",
                options: ["Performs a logical AND operation", "Performs a logical OR operation", "Performs a logical NOT operation", "Performs a logical XOR operation"],
                correctAnswer: 0
            },
            {
                question: "What does '||' operator do in JavaScript?",
                options: ["Performs a logical OR operation", "Performs a logical AND operation", "Performs a logical NOT operation", "Performs a logical XOR operation"],
                correctAnswer: 0
            },
            {
                question: "What does '!' operator do in JavaScript?",
                options: ["Performs a logical NOT operation", "Performs a logical AND operation", "Performs a logical OR operation", "Performs a logical XOR operation"],
                correctAnswer: 0
            },
            {
                question: "What does '>>' operator do in JavaScript?",
                options: ["Performs a right shift operation", "Performs a left shift operation", "Performs a bitwise AND operation", "Performs a bitwise OR operation"],
                correctAnswer: 0
            },
            {
                question: "What does '<<' operator do in JavaScript?",
                options: ["Performs a left shift operation", "Performs a right shift operation", "Performs a bitwise AND operation", "Performs a bitwise OR operation"],
                correctAnswer: 0
            },
            {
                question: "What does '>>>' operator do in JavaScript?",
                options: ["Performs a zero-fill right shift operation", "Performs a left shift operation", "Performs a right shift operation", "Performs a bitwise AND operation"],
                correctAnswer: 0
            },
            {
                question: "What does '&' operator do in JavaScript?",
                options: ["Performs a bitwise AND operation", "Performs a logical AND operation", "Performs a bitwise OR operation", "Performs a logical OR operation"],
                correctAnswer: 0
            },
            {
                question: "What does '|' operator do in JavaScript?",
                options: ["Performs a bitwise OR operation", "Performs a logical OR operation", "Performs a bitwise AND operation", "Performs a logical AND operation"],
                correctAnswer: 0
            },
            {
                question: "What does '^' operator do in JavaScript?",
                options: ["Performs a bitwise XOR operation", "Performs a logical XOR operation", "Performs a bitwise AND operation", "Performs a logical AND operation"],
                correctAnswer: 0
            },
            {
                question: "What does '~' operator do in JavaScript?",
                options: ["Performs a bitwise NOT operation", "Performs a logical NOT operation", "Performs a bitwise AND operation", "Performs a logical AND operation"],
                correctAnswer: 0
            },
            {
                question: "What does '+' operator do in JavaScript?",
                options: ["Performs an addition operation", "Performs a subtraction operation", "Performs a multiplication operation", "Performs a division operation"],
                correctAnswer: 0
            },
            {
                question: "What does '-' operator do in JavaScript?",
                options: ["Performs a subtraction operation", "Performs an addition operation", "Performs a multiplication operation", "Performs a division operation"],
                correctAnswer: 0
            },
            {
                question: "What does '*' operator do in JavaScript?",
                options: ["Performs a multiplication operation", "Performs an addition operation", "Performs a subtraction operation", "Performs a division operation"],
                correctAnswer: 0
            },
            {
                question: "What does '/' operator do in JavaScript?",
                options: ["Performs a division operation", "Performs an addition operation", "Performs a subtraction operation", "Performs a multiplication operation"],
                correctAnswer: 0
            }
        ]
    };

    // Generate Mixed Questions
    allQuestions.Mixed = [];
    for (let subject in allQuestions) {
        if (subject !== 'Mixed') {
            allQuestions.Mixed = allQuestions.Mixed.concat(allQuestions[subject]);
        }
    }
    allQuestions.Mixed = shuffleArray(allQuestions.Mixed);

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

    // Player Colors (Minimized Red Usage)
    const playerColors = ['#2980b9', '#27ae60', '#8e44ad', '#f1c40f']; // Blue, Green, Purple, Yellow

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

    // Function Definitions
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
        fromScreen.classList.remove('active');
        toScreen.classList.add('active');
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
            playerDiv.classList.add('player-review');

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
                selectedP.classList.add(choice.isCorrect ? 'correct' : 'incorrect');
                playerDiv.appendChild(selectedP);

                const correctP = document.createElement('p');
                correctP.innerHTML = `<strong>Correct Answer:</strong> ${choice.correct}`;
                correctP.classList.add('correct');
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

    // Initialize Theme Icon
    themeToggleBtn.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
});
