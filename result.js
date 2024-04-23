document.addEventListener("DOMContentLoaded", function() {
    // Retrieve user details from localStorage
    const name = localStorage.getItem("name");
    const rollNo = localStorage.getItem("rollNo");
    const section = localStorage.getItem("section");
    const course = localStorage.getItem("course");

    // Retrieve score from localStorage
    const score = parseInt(localStorage.getItem("score"));

    // Display user details
    const userDetailsElement = document.querySelector(".result-info");
    userDetailsElement.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Roll No:</strong> ${rollNo}</p>
        <p><strong>Section:</strong> ${section}</p>
        <p><strong>Course:</strong> ${course}</p>`;

    // Display quiz score
    const scoreElement = document.querySelector(".result-score");
    scoreElement.textContent = `Your Score: ${score}`;

    // Display correct answers
    const correctAnswersElement = document.querySelector(".correctanswer");
    correctAnswersElement.textContent = `Correct Answers: ${score}`;

    // Calculate and display incorrect answers
    const totalQuestions = 5; // Change this to the total number of questions
    const incorrectAnswers = totalQuestions - score;
    const incorrectAnswersElement = document.querySelector(".incorrectAnswers");
    incorrectAnswersElement.textContent = `Incorrect Answers: ${incorrectAnswers}`;

    // Event listener for retake button
    const retakeButton = document.getElementById("retakeButton");
    retakeButton.addEventListener("click", function() {
        localStorage.clear(); // Clear localStorage
        window.location.href = "registration.html"; // Redirect to registration page
    });
});
