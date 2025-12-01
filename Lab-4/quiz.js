// 1. Quiz Questions Array
const quizQuestions = [
    { question: "What is the capital of Switzerland?", answer: "Bern" },
    { question: "Which planet is known as the Red Planet?", answer: "Mars" },
    { question: "Who is known as the Father of the Computer?", answer: "Charles Babbage" },
    { question: "What is 25% of 200?", answer: "40" },
    { question: "Which language is used for web development?", answer: "Javascript" }
];

// 2. Function to Run the Quiz
function runQuiz() {

    // 3. Score Initialization
    let score = 0;

    // 4. Loop Through Questions
    for (let i = 0; i < quizQuestions.length; i++) {

        // 5. Prompt for User Input
        const userAnswer = prompt(quizQuestions[i].question);

        // 6. Normalize the Input
        if (userAnswer && userAnswer.toLowerCase().trim() === quizQuestions[i].answer.toLowerCase().trim()) {

            // 7. Check the Answer
            score++;  // Increase score

            // 8. Provide Immediate Feedback
            alert("Correct! 🎉");
        } else {
            alert(`Wrong! The correct answer is: ${quizQuestions[i].answer}`);
        }
    }

    // 9. Display the Final Score
    alert(`Quiz Over! Your final score is ${score} out of ${quizQuestions.length}`);
}

// 10. Run the Quiz
runQuiz();