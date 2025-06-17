function checkAnswer() {
    const correctAnswer = "4"; // ✅ Step 1: Define correct answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked'); // ✅ Step 2: Get selected radio button

    const feedback = document.getElementById("feedback");

    if (selectedOption) {
        const userAnswer = selectedOption.value; // ✅ Step 3: Get value of selected radio
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done."; // ✅ Correct answer
        } else {
            feedback.textContent = "That's incorrect. Try again!"; // ✅ Wrong answer
        }
    } else {
        feedback.textContent = "Please select an answer."; // ✅ Nothing selected
    }
}

// ✅ Step 4: Attach click event listener
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
