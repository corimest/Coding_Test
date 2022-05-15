const startButton = document.getElementById('start-btn')
const answerBtns = document.getElementById('answer-btns')
const questionsEl = document.getElementById('question-container')
const questEl = document.getElementById('question')

let shuffledQuestions, currentQuestionindex


startButton.addEventListener('click', startQuiz)


function startQuiz() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionindex = 0
    questionsEl.classList.remove('hide')
    answerBtns.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion () {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionindex])
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
    setStatusClass(document.body, correct)
    Array.from(answerBtns.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    }
    else {
        element.classList.add('wrong')
    }
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