const questions = [
    {
        question:"What does JavaScript primarily add to a website?",
        answers: [
	{ text: "A) Styling", correct: false },
        { text: "B) Interactivity", correct: true },
        { text: "C) Structure", correct: false },
        { text: "D) Database connectivity", correct: false }
	],
     
        hint: "B) Interactivity"
    },
    { 
        question:"Which keyword is used to declare variables in JavaScript?", 
        answers: [
	{ text: "A) var", correct: true },
        { text: "B) variable", correct: false },
        { text: "C) v", correct: false },
        { text: "D) int", correct: false }
	],
     
        hint: "A) var"
    },
    { 
        question: "What is the purpose of the `console.log()` function in JavaScript?",
        answers: [
	{ text: "A) Display a message box", correct: false },
        { text: "B) Print output to the console", correct: true },
        { text: "C) Create a pop-up alert", correct: false },
        { text: "D) Update the webpage content", correct: false }
	],
     
        hint: "B) Print output to the console "
    },
    { 
        question:"How do you write a single-line comment in JavaScript",
        answers: [
	{ text: "A) // This is a comment", correct: true },
        { text: "B) <!-- This is a comment -->", correct: false },
        { text: "C) /* This is a comment */", correct: false },
        { text: "D)  question: This is a comment", correct: false },
	],
     
        hint: "A) // This is a comment question:"
    },
    { 
        question:"Which operator is used for equality comparison in JavaScript?" ,
        answers: [
	{ text: "A) ==", correct: false },
        { text: "B) =", correct: false },
        { text: "C) ===", correct: true },
        { text: "D) :=", correct: false }
	],
     
        hint: "C) ===" 
    },
    { 
        question:"What is the purpose of the `if` statement in JavaScript?" ,
        answers: [
	{ text: "A) To declare a variable", correct: false },
        { text: "B) To create a loop", correct: false },
        { text: "C) To make decisions based on conditions", correct: true },
        { text: "D) To define a function", correct: false },
	],
     
        hint: "C) To make decisions based on conditions" 
    },
    { 
        question:"How do you declare a function in JavaScript?",
        answers: [
	{ text: "A) function myFunction() {}", correct: true },
        { text: "B) var myFunction = function() {}", correct: false },
        { text: "C) def myFunction() {}", correct: false },
        { text: "D) myFunction = function() {}", correct: false }
	],
     
        hint: "A) function myFunction() {}" 
    },
    { 
        question:"What is the purpose of the `for` loop in JavaScript?",
        answers: [
	{ text: "A) To iterate over elements in an array", correct: true },
        { text: "B) To define a function", correct: false },
        { text: "C) To create a conditional statement", correct: false },
       	{ text: "D) To declare a variable", correct: false }
	],
     
        hint: "A) To iterate over elements in an array" 
    },
    { 
        question:"Which method is used to add an element to the end of an array in JavaScript?" ,
        answers: [
	{ text: "A) push()", correct: true },
        { text: "B) add()", correct: false },
        { text: "C) append()", correct: false },
        { text: "D) insert()", correct: false }
	],
     
        hint: "A) push()"
    },
    { 
        question:"What is the purpose of the `else` statement in JavaScript? ",
        answers: [
	{ text: "A) To define a function", correct: false },
        { text: "B) To create a loop", correct: false },
        { text: "C) To provide an alternative code block if the `if` condition is false", correct: true },
        { text: "D) To declare a variable", correct: false }
	],
     
         hint: "C) To provide an alternative code block if the `if` condition is false"
    },
    { 
        question:"How do you access the length of an array in JavaScript?",
        answers: [
	{ text: "A) length()", correct: false },
        { text: "B) array.length", correct: true },
        { text: "C) len(array)", correct: false },
        { text: "D) array.size()", correct: false }
	],
     
         hint: "B) array.length"
    },
    { 
        question:"Which built-in method is used to convert a string to uppercase in JavaScript?", 
        answers: [
	{ text: "A) toUpperCase()", correct: true },
        { text: "B) upperCase()", correct: false },
        { text: "C) convertUpperCase()", correct: false },
        { text: "D) changeCase()", correct: false }
	],
     
         hint: "A) toUpperCase()"
    },
    {  
        question:"What is the purpose of the `return` statement in a function?",
        answers: [
	{ text: "A) To print a message to the console", correct: false },
        { text: "B) To stop the execution of a function", correct: false },
        { text: "C) To return a value from a function", correct: true },
        { text: "D) To declare a variable", correct: false }
	],
     
         hint: "C) To return a value from a function" 
    },
    {  
        question:"Which operator is used to combine two or more strings in JavaScript?",
        answers: [
	{ text: "A) &&", correct: false },
        { text: "B) +", correct: true },
        { text: "C) ||", correct: false },
        { text: "D) *", correct: false },
	],
     
         hint: "B) +"
    },
    { 
        question:"What is the purpose of the `addEventListener` method in JavaScript?" ,
        answers: [
	{ text: "A) To create a new HTML element", correct: false },
        { text: "B) To attach an event handler to an element", correct: true },
        { text: "C) To define a function", correct: false },
        { text: "D) To remove an element from the DOM", correct: false }
	],
     
         hint: "B) To attach an event handler to an element" 
    },
    { 
        question:"Which method is used to remove the last element from an array in JavaScript?",
        answers: [
	{ text: "A) pop()", correct: true },
        { text: "B) remove()", correct: false },
        { text: "C) delete()", correct: false },
        { text: "D) splice()", correct: false }
	],
     
         hint: "A) pop()" 
    },
    { 
        question:"How do you declare a constant variable in JavaScript?",
        answers: [
	{ text: "A) const myVar = 10;", correct: true },
        { text: "B) let myVar = 10;", correct: false },
        { text: "C) var myVar = 10;", correct: false },
        { text: "D) constant myVar = 10;", correct: false }
	],
     
         hint: "A) const myVar = 10;"
    },
    { 
        question:"What is the purpose of the `typeof` operator in JavaScript?", 
        answers: [
	{ text: "A) To create a new variable", correct: false },
        { text: "B) To check the type of a variable or expression", correct: true },
        { text: "C) To define a function", correct: false },
        { text: "D) To concatenate strings", correct: false }
	],
     
         hint: "B) To check the type of a variable or expression"
    },
    { 
        question:"Which built-in object is used to represent a date and time in JavaScript?",
        answers: [
	{ text: "A) TimeObject", correct: false },
        { text: "B) DateObject", correct: true },
        { text: "C) DateTime", correct: false },
        { text: "D) Clock", correct: false }
	],
     
         hint: "B) DateObject" 
    },
    { 
        question:"How do you convert a string to a number in JavaScript?",
        answers: [
	{ text: "A) convertToNumber()", correct: false },
        { text: "B) parseInt()", correct: true },
        { text: "C) toNumber()", correct: false },
        { text: "D) strToNum()", correct: false }
	],
     
         hint: "B) parseInt()"
    },
    { 
        question:"What is the purpose of the `this` keyword in JavaScript?", 
        answers: [
	{ text:"A) It refers to the current function", correct: false },
        { text: "B) It refers to the global object", correct: false },
        { text: "C) It refers to the calling object", correct: true },
        { text: "D) It defines a new variable", correct: false }
	],
     
         hint: "C) It refers to the calling object"
    },
    { 
        question:"Which method is used to remove an event listener in JavaScript?",
        answers: [
	{ text: "A) removeEventListener()", correct: true },
        { text: "B) deleteEventListener()", correct: false },
        { text: "C) off()", correct: false },
        { text: "D) detachEvent()", correct: false }
	],
     
         hint: "A) removeEventListener()"
    },
    { 
        question:"What is the purpose of the `localStorage` object in JavaScript?",
        answers: [
	{ text: "A) To store data temporarily during a session", correct: false },
        { text: "B) To store data permanently on the server", correct: false },
        { text: "C) To store data temporarily on the server", correct: false },
        { text: "D) To store data permanently on the client's machine", correct: true }
	],
     
         hint: "D) To store data permanently on the client's machine" 
    },
    { 
        question:"How do you create a new object in JavaScript using the constructor pattern?",
        answers: [
	{ text: "A) var obj = createObject();", correct: false },
        { text: "B) var obj = new Object();", correct: true },
        { text: "C) var obj = Object.create();", correct: false },
        { text: "D) var obj = initializeObject();", correct: false }
	],
     
         hint: "B) var obj = new Object();"
    },
    { 
        question:"What is the purpose of the `JSON.stringify()` method in JavaScript?",
        answers: [
	{ text: "A) To parse a JSON string", correct: false },
        { text: "B) To convert a JavaScript object to a JSON string", correct: true },
        { text: "C) To stringify a non-JSON object", correct: false },
        { text: "D) To remove quotes from a string", correct: false }
	],
     
         hint: "B) To convert a JavaScript object to a JSON string"
    },
    // Add more questions here
];

let currentQuestionIndex = 0;
let score = 0;
let attemptedQuestions = [];
let unattemptedQuestions = [];

const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const previousButton = document.getElementById('previous-btn');
const nextButton = document.getElementById('next-btn');
const submitButton = document.getElementById('submit-btn');
const hintButton = document.getElementById('hint-btn');
const resultContainer = document.getElementById('result-container');
const counterContainer = document.getElementById('counter-container');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    attemptedQuestions = [];
    unattemptedQuestions = [];
    showQuestion();
    showButtons();
    hideResult();
    updateCounter();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerText = currentQuestion.question;

    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn', 'answer-btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    const currentQuestion = questions[currentQuestionIndex];

    if (!attemptedQuestions.includes(currentQuestionIndex)) {
        attemptedQuestions.push(currentQuestionIndex);
    }

    if (answer.correct) {
        score++;
    }

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showResult();
    }

    updateCounter();
}

function showResult() {
    hideButtons();
    resultContainer.innerText = `You scored ${score} out of ${questions.length} questions.`;
    resultContainer.style.color = 'green';
    resultContainer.style.fontWeight = 'bold';
}

function showButtons() {
    previousButton.style.display = 'inline-block';
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'inline-block';
    hintButton.style.display = 'inline-block';
}

function hideButtons() {
    previousButton.style.display = 'none';
    nextButton.style.display = 'none';
    submitButton.style.display = 'none';
    hintButton.style.display = 'none';
}

function hideResult() {
    resultContainer.innerText = '';
}

function changeQuestion(offset) {
    currentQuestionIndex += offset;
    if (currentQuestionIndex < 0) {
        currentQuestionIndex = 0;
    } else if (currentQuestionIndex >= questions.length) {
        currentQuestionIndex = questions.length - 1;
    }
    showQuestion();
    updateCounter();
}

function submitQuiz() {
    showResult();
    hideButtons();
}

function showHint() {
    const currentQuestion = questions[currentQuestionIndex];
    alert(currentQuestion.hint);
}

function updateCounter() {
    const totalQuestions = questions.length;
    const attemptedCount = attemptedQuestions.length;
    const unattemptedCount = totalQuestions - attemptedCount;

    counterContainer.innerText = `Attempted: ${attemptedCount} | Unattempted: ${unattemptedCount}`;
}

startQuiz();
