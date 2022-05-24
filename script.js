const startButton = document.getElementById('start-btn')
const answerBtns = document.getElementById('answer-btns')
const questionsEl = document.getElementById('question-container')
const questEl = document.getElementById('question')
const wrongEl = document.getElementById('wrong')
const correctEl = document.getElementById('correct')
var timer = document.querySelector('timer')
var timeLeft = document.getElementById("timeLeft")


let shuffledQuestions, currentQuestionindex
let totalTime = 150

startButton.addEventListener('click', startQuiz)


function startQuiz() {
    startButton.classList.add('hide')

    // Timer function!!!!
    var startTime = setInterval(function() {
        timeLeft.textContent = totalTime; 
        totalTime--; 
            if(totalTime <= 0) {
                clearInterval(startTime); 
                if (currentQuestionindex < questions.length - 1){
                    gameOver()
                }
            }
        }, 1000);
    //end Timer function!!
   
     currentQuestionindex = 0
    
    questionsEl.classList.remove('hide')
    answerBtns.classList.remove('hide')
    
    setNextQuestion()
}


function setNextQuestion () {
    
    resetState()
    showQuestion(questions[currentQuestionindex])
    currentQuestionindex++
    
   
}

function showQuestion(question) {
 
    questEl.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
       button.addEventListener('click', selectAnswer)
        answerBtns.appendChild(button)
    })
}

function resetState() {
    while (answerBtns.firstChild) {
        answerBtns.removeChild
        (answerBtns.firstChild)
    }
}

function selectAnswer (event) {
    const selectedButton = event.target
    
    const correct = selectedButton.dataset.correct
    

    setStatusClass(selectedButton,Boolean(correct))
   
}

function setStatusClass(element, correct) {
  
    if(correct) {
        correctEl.style.display="block"
        console.dir(correctEl)
        wrongEl.style.display="none"
 
    }
    else{
        correctEl.style.display="none"
        wrongEl.style.display="block"
   
    }
    clearStatusClass(element)
    setNextQuestion()
}

function clearStatusClass (element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: "Commonly used data types do NOT include:",
        answers: [
            {text: 'Strings', correct: false},
            {text: 'Booleans', correct: false},
            {text: 'Alerts', correct: true},
            {text: 'Numbers', correct: false}
        ]
    }, 
    {
        question: "Arrays in Javascript can be used to store:",
        answers: [
            {text: 'numbers and strings', correct: false},
            {text: 'other arrays', correct: false},
            {text: 'booleans', correct: false},
            {text: 'all of the above', correct: true}
        ]
    }, 
    {
        question: "The condition in an if/else statement is enclosed with:",
        answers: [
            {text: 'quotes', correct: false},
            {text: 'curly brackets', correct: false},
            {text: 'parenthesis', correct: true},
            {text: 'square brackets', correct: false}
        ]
    }, 
    {
        question: "String values must be enclosed within _____ when being assigned to variables:",
        answers: [
            {text: 'commas', correct: false},
            {text: 'curly brackets', correct: false},
            {text: 'quotes', correct: true},
            {text: 'parenthesis', correct: false}
        ]
    }, 
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            {text: 'Javascript', correct: false},
            {text: 'terminal/bash', correct: false},
            {text: 'for loops', correct: false},
            {text: 'console.log', correct: true}
        ]
    }
]

