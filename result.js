// Retrieve user details from localStorage
const name = localStorage.getItem("name");
const rollNo = localStorage.getItem("rollNo");
const section = localStorage.getItem("section");
const course = localStorage.getItem("course");

// Retrieve score from localStorage
const score = parseInt(localStorage.getItem("score"));

// Display user details
const userDetailsElement = document.getElementById("userDetails");
userDetailsElement.innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Roll No:</strong> ${rollNo}</p>
    <p><strong>Section:</strong> ${section}</p>
    <p><strong>Course:</strong> ${course}</p>
`;

// Display quiz score
const scoreElement = document.getElementById("score");
scoreElement.textContent = `Your Score: ${score}`;

// Display correct answers
const correctAnswersElement = document.getElementById("correctAnswers");
correctAnswersElement.textContent = `Correct Answers: ${score}`;

// Calculate and display incorrect answers
const totalQuestions = 3; // Change this to the total number of questions
const incorrectAnswers = totalQuestions - score;
const incorrectAnswersElement = document.getElementById("incorrectAnswers");
incorrectAnswersElement.textContent = `Incorrect Answers: ${incorrectAnswers}`;
