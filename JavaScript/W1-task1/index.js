QUESTIONS = [
    {
        "Q":"WHy is JavaScript so popular?",
        "A":"it was 90s era",
        "B":"It has a cool name",
        "C":"People misunderstood its usage",
        "D":"None it is not popular",
        "R":"It has a cool name"
    },
  {
    "Q": "Why is JavaScript called JavaScript?",
    "A": "Java was already famous",
    "B": "Marketing team had one job",
    "C": "They wanted Java developers to get confused",
    "D": "Nobody knows, not even JavaScript",
    "R": "Java was already famous"
  },
  {
    "Q": "Why does JavaScript have so many frameworks?",
    "A": "Developers get bored easily",
    "B": "Nobody likes writing actual JavaScript",
    "C": "Every developer wants to fix JavaScript",
    "D": "To make node_modules heavier than a truck",
    "R": "Every developer wants to fix JavaScript"
  },
  {
    "Q": "What is the main purpose of JavaScript?",
    "A": "To make websites interactive",
    "B": "To create bugs dynamically",
    "C": "To keep Stack Overflow alive",
    "D": "To make developers question their career",
    "R": "To make websites interactive"
  },
  {
    "Q": "Why is JavaScript loosely typed?",
    "A": "It believes in freedom",
    "B": "It doesn't like commitment",
    "C": "It forgot to declare its intentions",
    "D": "Types are just suggestions",
    "R": "It doesn't like commitment"
  },
  {
    "Q": "What happens when you run npm install?",
    "A": "Your project becomes professional",
    "B": "The internet starts sweating",
    "C": "Your disk space files for divorce",
    "D": "You download the entire universe",
    "R": "You download the entire universe"
  },
  {
    "Q": "Why do JavaScript developers use console.log()?",
    "A": "For scientific debugging",
    "B": "Because printf looked too serious",
    "C": "To ask the code what went wrong",
    "D": "Because the debugger is on vacation",
    "R": "To ask the code what went wrong"
  },
  {
    "Q": "What is undefined in JavaScript?",
    "A": "A variable without a value",
    "B": "A developer's future after a production bug",
    "C": "The result of trusting your code",
    "D": "The salary after learning 17 frameworks",
    "R": "A variable without a value"
  },
  {
    "Q": "Why does JavaScript have async and await?",
    "A": "To handle asynchronous operations",
    "B": "To make developers wait professionally",
    "C": "Because computers are impatient",
    "D": "To give bugs time to multiply",
    "R": "To handle asynchronous operations"
  },
  {
    "Q": "Why do JavaScript developers love ===?",
    "A": "It checks both value and type",
    "B": "It looks more powerful than ==",
    "C": "One equals sign wasn't enough drama",
    "D": "More equals signs mean more salary",
    "R": "It looks more powerful than =="
  },
  {
    "Q": "What is the biggest achievement of JavaScript?",
    "A": "Making websites interactive",
    "B": "Running on almost everything",
    "C": "Making semicolons a religious debate",
    "D": "Convincing developers that this is fine",
    "R": "Making semicolons a religious debate"
  }
]


let currentQuestionIndex = 0;
let score = 0;
let answered = false;

// Select the HTML elements
const questionNumber = document.querySelector(".ques-num");
const scoreDisplay = document.querySelector(".score");
const timerDisplay = document.querySelector(".timer");
const questionText = document.querySelector(".ques");

const optionButtons = {
    A: document.querySelector(".A button"),
    B: document.querySelector(".B button"),
    C: document.querySelector(".C button"),
    D: document.querySelector(".D button")
};

const nextButton = document.querySelector(".nav-buttons button");

// Display the current question
function showQuestion() {
    answered = false;

    const question = QUESTIONS[currentQuestionIndex];

    questionNumber.textContent =
        `Q${currentQuestionIndex + 1} / ${QUESTIONS.length}`;

    scoreDisplay.textContent = `Score: ${score}`;
    timerDisplay.textContent = "Time: --";
    questionText.textContent = question.Q;

    // Fill the four option buttons
    for (let key in optionButtons) {
        const button = optionButtons[key];

        button.textContent = question[key];
        button.disabled = false;
        button.style.backgroundColor = "";
    }

    nextButton.textContent = "Save & Next";
}

// Check the selected answer
for (let key in optionButtons) {
    optionButtons[key].addEventListener("click", function () {
        if (answered) return;

        answered = true;

        const question = QUESTIONS[currentQuestionIndex];

        if (this.textContent === question.R) {
            score++;
            scoreDisplay.textContent = `Score: ${score}`;
        }

        // Prevent selecting multiple answers
        for (let option in optionButtons) {
            optionButtons[option].disabled = true;

            if (optionButtons[option].textContent === question.R) {
                optionButtons[option].style.backgroundColor = "green";
            }
        }
    });
}

// Move to the next question
nextButton.addEventListener("click", function () {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        questionText.textContent =
            `Quiz finished! Your score: ${score}/${QUESTIONS.length}`;

        questionNumber.textContent = "Completed";
        timerDisplay.textContent = "Time: --";

        for (let key in optionButtons) {
            optionButtons[key].textContent = "";
            optionButtons[key].disabled = true;
        }

        nextButton.textContent = "Restart Quiz";
        nextButton.onclick = function () {
            currentQuestionIndex = 0;
            score = 0;
            showQuestion();
            nextButton.onclick = null;
        };
    }
});

// Show the first question when the page loads
showQuestion();
