document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Retrieve form values
    const name = document.getElementById("name").value;
    const rollNo = document.getElementById("rollNo").value;
    const section = document.getElementById("section").value;
    const course = document.getElementById("course").value;
    
    // Store values in localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("rollNo", rollNo);
    localStorage.setItem("section", section);
    localStorage.setItem("course", course);
    
    // Redirect to quiz page
    window.location.href = "quiz.html";
});
