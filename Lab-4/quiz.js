//Quiz
 
const quizQuestions = [
    { 
        question: "What is the capital of Switzerland?",
        options: ["Bern", "Zurich", "Geneva", "Basel"],
        answer: "bern",
        hint: "Many think it is Zurich, but it's not."
    },
    { 
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Jupiter", "Mars", "Venus"],
        answer: "mars",
        hint: "It is the 4th planet from the Sun."
    },
    { 
        question: "Who is known as the Father of the Computer?",
        options: ["Alan Turing", "Charles Babbage", "Tim Berners-Lee", "Bill Gates"],
        answer: "charles babbage",
        hint: "Invented the Analytical Engine."
    },
    { 
        question: "What is 25% of 200?",
        options: ["25", "35", "40", "50"],
        answer: "40",
        hint: "Divide by 4."
    },
    { 
        question: "Which language is used for web development?",
        options: ["Python", "JavaScript", "C++", "PHP"],
        answer: "javascript",
        hint: "It is executed in the browser."
    }
];


function runQuiz() {

    let score = 0;
    let timePerQuestion = 12;  
    let playerName = prompt("Enter your name:");

    if (!playerName) playerName = "Player";

    for (let i = 0; i < quizQuestions.length; i++) {
        let q = quizQuestions[i];

        
        let message = `Q${i + 1}: ${q.question}\n` +
                      `A) ${q.options[0]}\nB) ${q.options[1]}\nC) ${q.options[2]}\nD) ${q.options[3]}\n\n` +
                      `You have ${timePerQuestion} seconds to answer.`;

        let userAnswer = prompt(message);
        let correct = q.answer;

    
        if (userAnswer === null || userAnswer.trim() === "") {
            alert(" Time's up! The correct answer is: " + correct);
            continue;
        }

        let finalAns = userAnswer.toLowerCase().trim();

        
        const map = { "a": 0, "b": 1, "c": 2, "d": 3 };
        if (map[finalAns] !== undefined) {
            finalAns = q.options[map[finalAns]].toLowerCase();
        }

        if (finalAns === correct) {
            score++;
            alert("Correct! ");
        } else {
            alert("Wrong \nCorrect Answer: " + correct + "\nHint: " + q.hint);
        }
    }

    
    let msg = "";
    if (score === quizQuestions.length) msg = " Excellent!";
    else if (score >= 3) msg = " Good job!";
    else msg = " Keep practicing!";

    alert(`Quiz Completed!\n${playerName}, Your Score: ${score}/${quizQuestions.length}\n${msg}`);

    
    let oldHighScore = localStorage.getItem("quizHighScore") || 0;
    if (score > oldHighScore) {
        localStorage.setItem("quizHighScore", score);
        alert(` New High Score: ${score}`);
    } else {
        alert(`Your High Score: ${oldHighScore}`);
    }

    
    let again = confirm("Do you want to play again?");
    if (again) runQuiz();
}


runQuiz();

        
