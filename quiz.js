// Sample questions for the quiz
const questions = [
    {
        question: "Which is a type of cloud computing service?",
        options: ["SaaS", "IaaS", "MaaS", "PaaS"],
        correctAnswer: "SaaS"
    },
    {
        question: "What is the purpose of a firewall?",
        options: ["To prevent unauthorized access", "To speed up internet connection", "To encrypt data transmission", "To store website data"],
        correctAnswer: "To prevent unauthorized access"
    },
    {
        question: "What protocol is used for sending emails?",
        options: ["FTP", "SMTP", "HTTP", "TCP"],
        correctAnswer: "SMTP"
    },
    {
        question: "What is used for storing data permanently in a computer?",
        options: ["RAM", "ROM", "Cache", "CPU"],
        correctAnswer: "ROM"
    },
    {
        question: "Which is NOT a type of computer virus?",
        options: ["Trojan", "Worm", "RAM", "Adware"],
        correctAnswer: "RAM"
    }
    // Add more questions as needed
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("nextBtn");

// Function to display current question
function displayQuestion() {
    const current = questions[currentQuestion];
    questionElement.textContent = current.question;

    optionsElement.innerHTML = "";

    // Display options with radio buttons
    current.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("form-check");
        optionElement.innerHTML = `
            <input class="form-check-input" type="radio" name="option" id="option${index}" value="${option}">
            <label class="form-check-label" for="option${index}">${option}</label>
        `;
        optionsElement.appendChild(optionElement);
    });
}

// Function to handle next button click
nextButton.addEventListener("click", () => {
    // Check if an option is selected
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert("Please select an option.");
        return;
    }

    // Check if the selected option is correct
    const selectedAnswer = selectedOption.value;
    const current = questions[currentQuestion];
    if (selectedAnswer === current.correctAnswer) {
        score++;
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        // Quiz finished, redirect to result page
        localStorage.setItem("score", score);
        window.location.href = "result.html";
    }
});

// Display the first question when the page loads
displayQuestion();
