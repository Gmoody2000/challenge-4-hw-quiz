// Quiz questions
const questions = [
	
	{
	  question: "Which programming language is used to build web pages?",
	  options: ["JavaScript", "Python", "Java", "HTML"],
	  correctAnswer: 3
	},
	{
		question: "What is the purpose of the 'addEventListener' method in JavaScript?",
		options: ["To add styles to an HTML element", "To change the content of an HTML element", "To perform a calculation", "To listen for and respond to events"],
		correctAnswer: 3
	},
	{
	  question: "Which of the following is NOT a JavaScript framework?",
	  options: ["React", "Angular", "Vue", "Python"],
	  correctAnswer: 3
	},
	{
	  question: "What is the purpose of the 'this' keyword in JavaScript?",
	  options: ["To refer to the current function", "To refer to the global object", "To refer to the previous object", "To refer to the HTML element"],
	  correctAnswer: 2
	},
	{
	  question: "What is the difference between '==' and '===' in JavaScript?",
	  options: ["They are equivalent", "'==' compares both value and type, '===' compares only value", "'==' compares only value, '===' compares both value and type", "None of the above"],
	  correctAnswer: 2
	},
	{
	  question: "What is the purpose of a callback function in JavaScript?",
	  options: ["To execute code immediately", "To handle errors in the code", "To perform an asynchronous operation", "To store and retrieve data"],
	  correctAnswer: 2
	},
	{
		question: "What is the output of the following code snippet? \n\nconsole.log(3 + 4 + '5');",
		options: ["12", "345", "75", "Error"],
		correctAnswer: 1
	},
	
  ];
  
  
  
  const startScreen = document.getElementById("start-screen");
  const quizScreen = document.getElementById("quiz-screen");
  const resultScreen = document.getElementById("result-screen");
  const startButton = document.getElementById("start-btn");
  const questionText = document.getElementById("question-text");
  const answerOptions = document.getElementById("answer-options");
  const finalScore = document.getElementById("final-score");
  const initialsForm = document.getElementById("initials-form");
  
  
  let currentQuestionIndex = 0;
  let timer;
  let timeRemaining = 60;
  let score = 0;
  
  
  function startQuiz() {
	startScreen.classList.add("hide");
	quizScreen.classList.remove("hide");
	startTimer();
	showQuestion();
  }
  
  
  function showQuestion() {
	const question = questions[currentQuestionIndex];
	questionText.textContent = question.question;
  
	
	answerOptions.innerHTML = "";
  
	
	question.options.forEach((option, index) => {
	  const button = document.createElement("button");
	  button.classList.add("answer-btn");
	  button.textContent = option;
	  button.addEventListener("click", () => selectAnswer(index));
	  answerOptions.appendChild(document.createElement("li")).appendChild(button);
	});
  }
  
  
  function selectAnswer(index) {
	const question = questions[currentQuestionIndex];
  
	if (index === question.correctAnswer) {
	  score++;
	} else {
	  timeRemaining -= 10;
	  if (timeRemaining < 0) {
		timeRemaining = 0;
	  }
	}
  
	currentQuestionIndex++;
  
	if (currentQuestionIndex === questions.length) {
	  endQuiz();
	} else {
	  showQuestion();
	}
  }
  
  
  function endQuiz() {
	clearInterval(timer);
	quizScreen.classList.add("hide");
	resultScreen.classList.remove("hide");
	finalScore.textContent = score;
  }
  
  
  function startTimer() {
	timer = setInterval(() => {
	  timeRemaining--;
	  if (timeRemaining <= 0) {
		clearInterval(timer);
		endQuiz();
	  }
	}, 1000);
  }
  
  
  function saveHighScore(event) {
	event.preventDefault();
  
	const initialsInput = document.getElementById("initials");
	const initials = initialsInput.value.trim();
  
	if (initials !== "") {
	
  
	  initialsInput.value = "";
	  initialsForm.classList.add("hide");
	 
	}
  }
  
 
  startButton.addEventListener("click", startQuiz);
  initialsForm.addEventListener("submit", saveHighScore);
  