const questions = [
    {
        question: "What does HTML stand for?",
            answers: [
        { text: "A) Hyper Text Markup Language", correct: true },
            { text: "B) High-level Text Markup Language", correct: false },
            { text: "C) Hyperlink and Text Markup Language", correct: false },
            { text: "D) Home Tool Markup Language", correct: false }
        ],
            hint: "A) Hyper Text Markup Language"
        },
        {
            question: " Which tag is used to define the structure of an HTML document?",
            answers: [
        { text: "A) <body>", correct: false },
            { text: "B) <head>", correct: false },
            { text: "C) <html>", correct: true },
            { text: "D) <title>", correct: false }
        ],
            hint: "C) <html>"
        },
        {
            question: " What is the purpose of the <head> tag in HTML?",
            answers: [
        { text: "A) To define the main content of the document", correct: false },
            { text: "B) To contain meta-information about the document", correct: true },
            { text: "C) To define the body of the document", correct: false },
            { text: "D) To include external scripts and stylesheets", correct: false }
        ],
            hint: "B) To contain meta-information about the document"
        },
        {
            question: " Which tag is used to create a hyperlink in HTML?",
            answers: [
        { text: "A) <a>", correct: true },
            { text: "B) <link>", correct: false },
            { text: "C) <href>", correct: false },
            { text: "D) <hyperlink>", correct: false }
        ],
            hint: "A) <a>"
        },
        {
            question: " How do you create an ordered list in HTML?",
            answers: [
        { text: "A) <ul>", correct: false },
            { text: "B) <ol>", correct: true },
            { text: "C) <li>", correct: false },
            { text: "D) <list>", correct: false }
        ],
            hint: "<ol>"
        },
        {
            question: " Which attribute is used to define inline styles in HTML?",
            answers: [
        { text: "A) style", correct: true },
            { text: "B) css", correct: false },
            { text: "C) inline", correct: false },
            { text: "D) design", correct: false }
        ],
            hint: "A) style"
        },
        {
            question: " What does the alt attribute in the <img> tag provide?",
            answers: [
        { text: "A) Alternative text for the image", correct: true },
            { text: "B) Alignment of the image", correct: false },
            { text: "C) Link to the image source", correct: false },
            { text: "D) Image size", correct: false }
        ],
            hint: "A) Alternative text for the image"
        },
        {
            question: " Which tag is used to create a line break in HTML?",
            answers: [
        { text: "A) <br>", correct: true },
            { text: "B) <lb>", correct: false },
            { text: "C) <break>", correct: false },
            { text: "D) <newline>", correct: false }
        ],
            hint: "A) <br>"
        },
        {
            question: " What is the purpose of the <meta charset='UTF-8'> tag in HTML?",
            answers: [
        { text: "A) It defines a meta description for the document", correct: false },
            { text: "B) It specifies the character encoding for the document", correct: true },
            { text: "C) It links an external stylesheet", correct: false },
            { text: "D) It defines the language of the document", correct: false }
        ],
            hint: "B) It specifies the character encoding for the document"
        },
        {
            question: " Which tag is used to create a table in HTML?",
            answers: [
        { text: "A) <table>", correct: true },
            { text: "B) <tab>", correct: false },
            { text: "C) <tr>", correct: false },
            { text: "D) <tbl>", correct: false }
        ],
            hint: "A) <table>"
        },
        {
            question: " What is the purpose of the colspan attribute in a table cell?",
            answers: [
        { text: "A) It defines the color of the cell", correct: false },
            { text: "B) It specifies the width of the cell", correct: false },
            { text: "C) It spans multiple columns", correct: true },
            { text: "D) It defines the alignment of the cell content", correct: false }
        ],
            hint: "C) It spans multiple columns"
        },
        {
            question: " Which tag is used to create a hyperlink that opens in a new tab or window?",
            answers: [
        { text: "A) <a target='_blank'>", correct: true },
            { text: "B) <a href='_new'>", correct: false },
            { text: "C) <a newtab>", correct: false },
            { text: "D) <a window='_new'>", correct: false }
        ],
            hint: "A) <a target='_blank'>"
        },
        {
            question: " What is the purpose of the <iframe> tag in HTML?",
            answers: [
        { text: "A) To create an inline frame", correct: true },
            { text: "B) To define an image", correct: false },
            { text: "C) To create a form", correct: false },
            { text: "D) To insert a video", correct: false }
        ],
            hint: "A) To create an inline frame"
        },
        {
            question: " Which HTML tag is used for creating a dropdown list?",
            answers: [
        { text: "A) <list>", correct: false },
            { text: "B) <dropdown>", correct: false },
            { text: "C) <select>", correct: true },
            { text: "D) <input type='dropdown'>", correct: false }
        ],
            hint: "C) <select>"
        },
        {
            question: " How can you make a text input field mandatory in a form?",
            answers: [
        { text: "A) required='true'", correct: false },
            { text: "B) mandatory='true'", correct: false },
            { text: "C) <input required>", correct: true },
            { text: "D) <input mandatory>", correct: false }
        ],
             hint: "C) <input required>"
        },
        {
            question: " Which tag is used for defining the definition list in HTML?",
            answers: [
        { text: "A) <ul>", correct: false },
            { text: "B) <ol>", correct: false },
            { text: "C) <dl>", correct: true },
            { text: "D) <list>", correct: false }
        ],
            hint: "C) <dl>"
        },
        {
            question: " What is the purpose of the <em> tag in HTML?",
            answers: [
        { text: "A) To define a section of code", correct: false },
            { text: "B) To emphasize text (italic)", correct: true },
            { text: "C) To create a strong emphasis (bold)", correct: false },
            { text: "D) To define a list item", correct: false }
        ],
            hint: "B) To emphasize text (italic)"
        },
        {
            question: " How do you add a comment in HTML?",
            answers: [
        { text: "A) <!--This is a comment-->", correct: true },
            { text: "B) //This is a comment//", correct: false },
            { text: "C) /This is a comment/", correct: false },
            { text: "D) --This is a comment--", correct: false }
        ],
            hint: "A) <!--This is a comment-->"
        },
        {
            question: " What does the acronym DOCTYPE stand for in HTML?",
            answers: [
        { text: "A) Document Type", correct: true },
            { text: "B) Document Text", correct: false },
            { text: "C) Document Template", correct: false },
            { text: "D) Document Tag", correct: false }
        ],
            hint: "A) Document Type"
        },
        {
            question: " Which attribute is used to specify the source URL of an embedded audio or video file?",
            answers: [
        { text: "A) src", correct: true },
            { text: "B) href", correct: false },
            { text: "C) link", correct: false },
            { text: "D) file", correct: false }
        ],
            hint: "A) src"
        },
        {
            question: " What is the purpose of the HTML <form> tag?",
            answers: [
        { text: "A) To define a section of code", correct: false },
            { text: "B) To create a table", correct: false },
            { text: "C) To create a form for user input", correct: true },
            { text: "D) To define a list", correct: false }
        ],
            hint: "C) To create a form for user input"
        },
        {
            question: " Which HTML tag is used to create a horizontal line?",
            answers: [
        { text: "A) <line>", correct: false },
            { text: "B) <hr>", correct: true },
            { text: "C) <hl>", correct: false },
            { text: "D) <horizontal>", correct: false }
        ],
            hint: "B) <hr>"
        },
        {
            question: " How can you add a background color to an HTML element?",
            answers: [
        { text: "A) bg-color", correct: false },
            { text: "B) background-color", correct: true },
            { text: "C) color-background", correct: false },
            { text: "D) bgcolor", correct: false }
        ],
            hint: "B) background-color"
        },
        {
            question: " What is the purpose of the HTML <article> tag?        ",
            answers: [
        { text: "A) To define a section of code", correct: false },
            { text: "B) To define a standalone piece of content", correct: true },
            { text: "C) To create a table", correct: false },
            { text: "D) To create a form", correct: false }
        ],
            hint: "B) To define a standalone piece of content"
        },
        {
            question: " Which HTML tag is used to define a footer for a document or section?        ",
            answers: [
        { text: "A) <footer>", correct: true },
            { text: "B) <end>", correct: false },
            { text: "C) <bottom>", correct: false },
            { text: "D) <section-footer>", correct: false },
        ],
            hint: "A) <footer>"
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
