const questions = [
    {
        question: "What does CSS stand for?",
        answers: [
	    { text: "A) Counter Style Sheet", correct: false },
        { text: "B) Computer Style Sheet", correct: false },
        { text: "C) Cascading Style Sheet", correct: true },
        { text: "D) Creative Style Sheet", correct: false }
	],

        hint: "C) Cascading Style Sheet"
    },
    {
        question: "How do you include an external CSS file in an HTML document?",
        answers: [ 
	    { text: "A) <css src='style.css'>", correct: false },
        { text: "B) <link href='style.css' rel='stylesheet'>", correct: true },
        { text: "C) <style link='style.css'>", correct: false },
        { text: "D) <include css='style.css'>", correct: false }
	],

        hint: "B) <link href='style.css' rel='stylesheet'>"
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        answers: [ 
	    { text: "A) text-color", correct: false },
        { text: "B) color", correct: true },
        { text: "C) font-color", correct: false },
        { text: "D) textColor", correct: false }
	],

        hint: "B) color"
    },
    {
        question: "What is the purpose of the CSS property 'margin'?",
        answers: [ 
	    { text: "A) It sets the inner spacing of an element", correct: false },
        { text: "B) It sets the outer spacing of an element", correct: true },
        { text: "C) It defines the width of an element", correct: false },
        { text: "D) It controls the background color of an element", correct: false }
	],

        hint: "B) It sets the outer spacing of an element"
    },
    {
        question: "How can you center an element horizontally in CSS?",
        answers: [
	    { text: "A) text-align: center;", correct: false },
        { text: "B) margin: auto;", correct: true },
        { text: "C) align: center;", correct: false },
        { text: "D) position: center;", correct: false }
	],

        hint: "B) margin: auto;"
    },
    {
        question: "Which CSS property is used for controlling the layout of a webpage?",
        answers: [ 
	    { text: "A) display", correct: true },
        { text: "B) layout", correct: false },
        { text: "C) position", correct: false },
        { text: "D) structure", correct: false }
	],

         hint: "A) display"
    },
    {
        question: "What does the 'float' property in CSS do?",
        answers: [ 
	    { text: "A) It makes the element transparent", correct: false },
        { text: "B) It positions the element relative to its normal position", correct: false },
        { text: "C) It aligns the element to the right or left", correct: true },
        { text: "D) It controls the font size of the element", correct: false }
	],

        hint: "C) It aligns the element to the right or left"
    },
    {
        question: "How can you add rounded corners to an element in CSS?",
        answers: [ 
	    { text: "A) corner-radius", correct: false },
        { text: "B) border-radius", correct: true },
        { text: "C) rounded-corners", correct: false },
        { text: "D) curve-border", correct: false }
	],

        hint: "B) border-radius"
    },
    {
        question: "What is the purpose of the CSS property 'z-index'?",
        answers: [ 
	    { text: "A) It sets the zoom level of an element", correct: false },
        { text: "B) It controls the transparency of an element", correct: false },
        { text: "C) It defines the stacking order of an element", correct: true },
        { text: "D) It adjusts the indentation of an element", correct: false }
	],

        hint: "C) It defines the stacking order of an element"
    },
    {
        question: "Which CSS property is used to add shadows to text?",
        answers: [ 
	    { text: "A) text-shadow", correct: true },
        { text: "B) shadow", correct: false },
        { text: "C) font-shadow", correct: false },
        { text: "D) box-shadow", correct: false }
	],

        hint: "A) text-shadow"
    },
    {
        question: "How can you change the style of an unordered list (ul) in CSS?",
        answers: [ 
	    { text: "A) list-type: style;", correct: false },
        { text: "B) ul-style: type;", correct: false },
        { text: "C) list-style-type: style;", correct: true },
        { text: "D) ul-type: style;", correct: false }
	],

        hint: "C) list-style-type: style;"
    },
    {
        question: "What is the purpose of the CSS property 'opacity'?",
        answers: [ 
	    { text: "A) It controls the shadow of an element", correct: false },
        { text: "B) It sets the transparency of an element", correct: true },
        { text: "C) It defines the order of an element", correct: false },
        { text: "D) It adjusts the margin of an element", correct: false }
	],

        hint: "B) It sets the transparency of an element"
    },
    {
        question: "How do you select all paragraphs within a div with the class 'content' in CSS?",
        answers: [ 
	    { text: "A) .content > p", correct: false },
        { text: "B) div.content p", correct: true },
        { text: "C) div p.content", correct: false },
        { text: "D) .content p", correct: false }
	],

        hint: "B) div.content p"
    },
    {
        question: "Which CSS property is used to control the space between letters in text?",
        answers: [ 
	    { text: "A) letter-spacing", correct: true },
        { text: "B) text-spacing", correct: false },
        { text: "C) word-spacing", correct: false },
        { text: "D) space-letter", correct: false }
	],

        hint: "A) letter-spacing"
    },
    {
        question: "What is the purpose of the CSS pseudo-class ':hover'?",
        answers: [ 
	    { text: "A) It selects an element when clicked", correct: false },
        { text: "B) It selects an element when focused", correct: false },
        { text: "C) It selects an element when the mouse is over it", correct: true },
        { text: "D) It selects the first child of an element", correct: false }
	],

        hint: "C) It selects an element when the mouse is over it"
    },
    {
        question: "How can you set a background image for an element in CSS?",
        answers: [ 
	    { text: "A) background-image: url('image.jpg');", correct: true },
        { text: "B) img: background('image.jpg');", correct: false },
        { text: "C) image: background('image.jpg');", correct: false },
        { text: "D) background: url('image.jpg');", correct: false }
	],

        hint: "A) background-image: url('image.jpg');"
    },
    {
        question: "Which CSS property is used for controlling the size of text?",
        answers: [ 
	    { text: "A) text-size", correct: false },
        { text: "B) font-size", correct: true },
        { text: "C) size", correct: false },
        { text: "D) text-font", correct: false }
	],

        hint: "B) font-size"
    },
    {
        question: "What is the purpose of the CSS property 'box-sizing: border-box'?",
        answers: [ 
	    { text: "A) It adjusts the width of an element", correct: false },
        { text: "B) It includes padding and border in the element's total width", correct: true },
        { text: "C) It controls the box shadow of an element", correct: false },
        { text: "D) It sets the height of an element", correct: false }
	],

        hint: "B) It includes padding and border in the element's total width"
    },
    {
        question: "How can you hide an element in CSS?",
        answers: [ 
	    { text: "A) display: none;", correct: true },
        { text: "B) visibility: hidden;", correct: false },
        { text: "C) hidden: true;", correct: false },
        { text: "D) opacity: 0;", correct: false }
	],

        hint: "A) display: none;"
    },
    {
        question: "Which CSS property is used to control the spacing between lines of text?",
        answers: [ 
	    { text: "A) line-height", correct: true },
        { text: "B) text-spacing", correct: false },
        { text: "C) spacing-line", correct: false },
        { text: "D) line-spacing", correct: false }
	],

        hint: "A) line-height"
    },
    {
        question: "What is the purpose of the CSS property 'position: relative'?",
        answers: [ 
        { text:"A) It positions the element relative to its normal position", correct: true },
        { text:"B) It centers the element horizontally", correct: false },
        { text:"C) It controls the stacking order of an element", correct: false },
        { text:"D) It adjusts the opacity of an element", correct: false }
	],

        hint: "A) It positions the element relative to its normal position"
    },
    {
        question: "How can you change the style of links that have been visited in CSS?",
        answers: [ 
	    { text: "A) a:visited { styles... }", correct: true },
        { text: "B) visited { styles... }", correct: false },
        { text: "C) a:link { styles... }", correct: false },
        { text: "D) link { styles... }", correct: false }
	],

        hint: "A) a:visited { styles... }"
    },
    {
        question: "What does the CSS property 'flexbox' do?",
        answers: [ 
	{ text: "A) It controls the flexibility of an element", correct: true },
        { text: "B) It sets the font style of an element", correct: false },
        { text: "C) It defines the size of an element", correct: false },
        { text: "D) It adjusts the margin of an element", correct: false }
	],

        hint: "A) It controls the flexibility of an element"
    },
    {
        question: "How do you set the background color of a webpage body in CSS?",
        answers: [ 
	{ text: "A) body-color: #ffffff;", correct: false },
        { text: "B) background-color: #ffffff;", correct: true },
        { text: "C) page-background: #ffffff;", correct: false },
        { text: "D) color-background: #ffffff;", correct: false }
	],

        hint: "B) background-color: #ffffff;"
    },
    {
        question: "What is the purpose of the CSS property 'overflow: hidden'?",
        answers: [ 
	{ text: "A) It hides the text content of an element", correct: false },
        { text: "B) It hides the overflow of an element's content", correct: true },
        { text: "C) It adjusts the visibility of an element", correct: false },
        { text: "D) It hides the border of an element", correct: false }
	],

        hint: "B) It hides the overflow of an element's content"
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
