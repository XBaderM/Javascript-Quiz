
// links to the elements
const timerEl = document.getElementById('timer');
const questionEl = document.getElementById('question');
const answerOne = document.getElementById('answer-1');
const answerTwo = document.getElementById('answer-2');
const answerThree = document.getElementById('answer-3');
const answerFour = document.getElementById('answer-4');
const finalScoreEl = document.getElementById('final-score');
const initialsEl = document.getElementById('initials');
const highScoresListEl = document.getElementById('highscores-list')

const questions = [

    {
        question: 'How do you write an IF statement in JavaScript?',
        answersArray: [
            { answer: "if (i === 5)", correct: true },  // Correct
            { answer: 'if i = 5 then', correct: false },
            { answer: 'if i === 5 then', correct: false },
            { answer: 'if (i = 5)', correct: false }
        ]
    },

    {
        question: 'Which of these array methods returns an array?',
        answersArray: [
            { answer: 'Array.splice()', correct: true }, // Correct
            { answer: 'Array.forEach()', correct: false },
            { answer: 'Array.find()', correct: false },
            { answer: 'Array.reduce()', correct: false }]
    },

    { 
        question: 'What is the function of `Array.unshift()`?',
        answersArray: [
            { answer: 'Removes first element of array', correct: true },  // Correct
            { answer: 'Removes last element of array', correct: false },
            { answer: 'Adds element to end of array', correct: false },
            { answer: 'Adds element to start of array', correct: false }]
    },

    {
        question: ' "What Characters Contains an Array?',
        answersArray: [
            { answer: '( )', correct: false },  
            { answer: '{ }', correct: false },
            { answer: '[ ]', correct: true }, // correct
            { answer: '< >', correct: false }]
    },

    {
        question: 'How do you call a function named "myFunction"?',
        answersArray: [
            { answer: 'call myFunction()', correct: false },  
            { answer: 'read myFunction()', correct: false },
            { answer: 'myFunction()', correct: true }, // correct
            { answer: 'run.myFunction()', correct: false }]
    }

];

// global variables
let currentScore = 0;
let finalScore;
let currentQuestion = -1;
let timer = 10*questions.length;



// Timer function
function startTimer() {
    timerEl.textContent = timer;
    let timerInterval = setInterval(
        () => {
            timer--;
            timerEl.textContent = timer;
            if (timer <= 0) {
                clearInterval(timerInterval);
                endGame();
            }
        }, 1000);
};

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion === questions.length) {
        timer = 0;
        endGame();
    } else {
        questionEl.textContent = questions[currentQuestion].question;
        let arr = [answerOne, answerTwo, answerThree, answerFour];
        let i = 0;
        arr.forEach(element => {
            element.textContent = questions[currentQuestion].answersArray[i].answer;
            i++
        }, i);
    };
};


        // function for changing divs to next
function changeDiv(current, next) {
    document.getElementById(current).classList.add('hide');
    document.getElementById(next).removeAttribute('class')
};
// start the quiz
function startGame() {
    changeDiv('start-page', 'question-container');
    nextQuestion();
    startTimer();
};

