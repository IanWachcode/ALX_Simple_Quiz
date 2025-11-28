function checkAnswer() {
    // Function body
    
    // Step 2: Store the correct answer
    const correctAnswer = "4";

    // Step 3: Retrieve the user’s selected radio option
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // If user clicks submit without choosing an option
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer!";
        return;
    }

    const userAnswer = selectedOption.value;

    // Step 4: Compare answers and display feedback
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
        document.getElementById("feedback").style.color = "green";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        document.getElementById("feedback").style.color = "red";
    }
}
// Step 5: Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
