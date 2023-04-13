const quiz = [
	{
		question: "What does HTML stand for?",
		choices: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
		answer: 0
	},
	{
		question: "What does CSS stand for?",
		choices: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets"],
		answer: 1
	},
	{
		question: "What does JS stand for?",
		choices: ["Java Server", "Java Script", "Java Standard"],
		answer: 1
	}
];

const quizContainer = document.querySelector("#quiz-container");
const questionEl = document.querySelector("#question");
const choicesEl = document.querySelector("#choices");
const submitBtn = document.querySelector("#submit");
const timerEl = document.querySelector("#timer");

let currentQuestion = 0;
let score = 0;
let timeLeft = 60;

function startQuiz() {
setInterval(function() {
		if (timeLeft <= 0) {
			endQuiz();
		} else {
			timerEl.textContent = "Time left: " + timeLeft + " seconds";
			timeLeft--;
		}
	}, 1000);
	
	
	loadQuestion();
}

function loadQuestion() {
	questionEl.textContent = quiz[currentQuestion].question;
	
	choicesEl.innerHTML = "";
	
	quiz[currentQuestion].choices.forEach(function(choice, index) {
		const li = document.createElement("li");
		const radio = document.createElement("input");
		radio.type = "radio";
		radio.name = "choice";
		radio.value = index;
		
		li.appendChild(radio);
		li.appendChild(document.createTextNode(choice));
		
		choicesEl.appendChild(li);
	});
}

function checkAnswer() {
	const userChoice = document.querySelector("input[name='choice']:checked");
}
	
	if (userChoice) {
		const userAnswer = parseInt(userChoice.value);
    }
		
		if (userAnswer === quiz[currentQuestion].answer) {
			score++;
		}
		
		currentQuestion++;
		
		if (currentQuestion === quiz.length) {
			endQuiz();
		} 
