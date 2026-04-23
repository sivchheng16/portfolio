
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Module07ProjectQuiz() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">Project - Interactive Quiz</Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Track 03: JavaScript Basics</Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Project Overview</Typography>
          <Typography>
            Combine everything you&apos;ve learned to build an Interactive Quiz Application!
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Project Requirements</Typography>
          <Typography variant="h3">Must Have (Required)</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Requirement</TableHead>
                <TableHead>Skills Demonstrated</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Multiple questions (5+)</TableCell>
                <TableCell>Arrays, objects</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Multiple choice answers</TableCell>
                <TableCell>DOM manipulation</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Track score</TableCell>
                <TableCell>Variables, logic</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Show current question number</TableCell>
                <TableCell>Loops, counters</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Correct/incorrect feedback</TableCell>
                <TableCell>Conditionals</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Final results screen</TableCell>
                <TableCell>DOM, template literals</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Restart functionality</TableCell>
                <TableCell>Functions, reset</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Styled with your CSS</TableCell>
                <TableCell>HTML/CSS skills</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">Nice to Have (Bonus)</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Feature</TableHead>
                <TableHead>Skills Shown</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Timer per question</TableCell>
                <TableCell>setInterval, async</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Progress bar</TableCell>
                <TableCell>DOM, CSS</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Animations</TableCell>
                <TableCell>CSS transitions</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>High score tracking</TableCell>
                <TableCell>localStorage</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Category selection</TableCell>
                <TableCell>Advanced logic</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sound effects</TableCell>
                <TableCell>Audio API</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Project Structure</Typography>
          <CodeBlock language="text">{`quiz-app/
├── index.html
├── css/
│ └── style.css
└── js/
 └── app.js`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Step 1: HTML Structure</Typography>
          <CodeBlock language="html">{`<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Cambodia Knowledge Quiz</title>
 <link rel="stylesheet" href="css/style.css">
</head>
<body>
 <div class="quiz-container">
 <!-- Start Screen -->
 <div id="start-screen" class="screen">
 <h1> Cambodia Quiz</h1>
 <p>Test your knowledge about Cambodia!</p>
 <button id="start-btn" class="btn btn-primary">Start Quiz</button>
 </div>
 <!-- Quiz Screen -->
 <div id="quiz-screen" class="screen hidden">
 <div class="quiz-header">
 <span id="question-number">Question 1/10</span>
 <span id="score">Score: 0</span>
 </div>
 <div class="quiz-body">
 <h2 id="question">Question text here?</h2>
 <div id="answers" class="answers">
 <!-- Answers will be inserted here -->
 </div>
 </div>
 <div class="quiz-footer">
 <button id="next-btn" class="btn" disabled>Next Question</button>
 </div>
 </div>
 <!-- Result Screen -->
 <div id="result-screen" class="screen hidden">
 <h1>Quiz Complete!</h1>
 <div id="final-score"></div>
 <p id="result-message"></p>
 <button id="restart-btn" class="btn btn-primary">Play Again</button>
 </div>
 </div>
 <script src="js/app.js"></script>
</body>
</html>`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Step 2: CSS Styling</Typography>
          <CodeBlock language="css">{`/* css/style.css */
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}
body {
 font-family: 'Segoe UI', Tahoma, sans-serif;
 background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
 min-height: 100vh;
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 20px;
}
.quiz-container {
 background: white;
 border-radius: 16px;
 box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
 max-width: 600px;
 width: 100%;
 overflow: hidden;
}
.screen {
 padding: 40px;
 text-align: center;
}
.hidden {
 display: none !important;
}
/* Start Screen */
#start-screen h1 {
 font-size: 2.5rem;
 margin-bottom: 15px;
 color: #1e3c72;
}
#start-screen p {
 color: #666;
 margin-bottom: 30px;
}
/* Buttons */
.btn {
 padding: 15px 40px;
 font-size: 1rem;
 border: none;
 border-radius: 8px;
 cursor: pointer;
 transition: transform 0.2s, box-shadow 0.2s;
}
.btn:hover:not(:disabled) {
 transform: translateY(-2px);
 box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
.btn:disabled {
 opacity: 0.5;
 cursor: not-allowed;
}
.btn-primary {
 background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
 color: white;
}
/* Quiz Screen */
.quiz-header {
 display: flex;
 justify-content: space-between;
 margin-bottom: 30px;
 color: #666;
 font-size: 0.9rem;
}
#question {
 font-size: 1.5rem;
 color: #333;
 margin-bottom: 30px;
 line-height: 1.4;
}
.answers {
 display: flex;
 flex-direction: column;
 gap: 12px;
}
.answer-btn {
 padding: 15px 20px;
 text-align: left;
 background: #f8f9fa;
 border: 2px solid #e9ecef;
 border-radius: 8px;
 cursor: pointer;
 transition: all 0.2s;
 font-size: 1rem;
}
.answer-btn:hover {
 border-color: #1e3c72;
 background: #f0f4ff;
}
.answer-btn.correct {
 background: #d4edda;
 border-color: #28a745;
 color: #155724;
}
.answer-btn.wrong {
 background: #f8d7da;
 border-color: #dc3545;
 color: #721c24;
}
.answer-btn:disabled {
 cursor: not-allowed;
}
.quiz-footer {
 margin-top: 30px;
}
/* Result Screen */
#final-score {
 font-size: 4rem;
 font-weight: bold;
 color: #1e3c72;
 margin: 20px 0;
}
#result-message {
 font-size: 1.2rem;
 color: #666;
 margin-bottom: 30px;
}
/* Responsive */
@media (max-width: 480px) {
 .screen {
 padding: 25px;
 }
 #start-screen h1 {
 font-size: 2rem;
 }
 #question {
 font-size: 1.2rem;
 }
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Step 3: JavaScript Logic</Typography>
          <CodeBlock language="javascript">{`// js/app.js
// Quiz Questions
const questions = [
 {
 question: "What is the capital of Cambodia?",
 answers: ["Siem Reap", "Phnom Penh", "Battambang", "Sihanoukville"],
 correct: 1
 },
 {
 question: "Which ancient temple complex is Cambodia famous for?",
 answers: ["Borobudur", "Angkor Wat", "Bagan", "Ayutthaya"],
 correct: 1
 },
 {
 question: "What is the official language of Cambodia?",
 answers: ["Thai", "Vietnamese", "Khmer", "Lao"],
 correct: 2
 },
 {
 question: "Which river is the most important in Cambodia?",
 answers: ["Mekong River", "Amazon River", "Nile River", "Yangtze River"],
 correct: 0
 },
 {
 question: "What currency does Cambodia use?",
 answers: ["Thai Baht", "Vietnamese Dong", "Cambodian Riel", "US Dollar only"],
 correct: 2
 },
 {
 question: "In which year did Cambodia gain independence from France?",
 answers: ["1945", "1953", "1960", "1975"],
 correct: 1
 },
 {
 question: "What is the national animal of Cambodia?",
 answers: ["Elephant", "Tiger", "Kouprey", "Dragon"],
 correct: 2
 },
 {
 question: "Which lake in Cambodia is known as the largest freshwater lake in Southeast Asia?",
 answers: ["Tonle Sap", "Lake Victoria", "Lake Toba", "Inle Lake"],
 correct: 0
 }
];
// State variables
let currentQuestion = 0;
let score = 0;
let answered = false;
// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const questionNumberEl = document.getElementById("question-number");
const scoreEl = document.getElementById("score");
const finalScoreEl = document.getElementById("final-score");
const resultMessageEl = document.getElementById("result-message");
// Event Listeners
startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", restartQuiz);
// Functions
function startQuiz() {
 startScreen.classList.add("hidden");
 quizScreen.classList.remove("hidden");
 showQuestion();
}
function showQuestion() {
 answered = false;
 nextBtn.disabled = true;
 const question = questions[currentQuestion];
 // Update question number and score
 questionNumberEl.textContent = \`Question \${currentQuestion + 1}/\${questions.length}\`;
 scoreEl.textContent = \`Score: \${score}\`;
 // Show question
 questionEl.textContent = question.question;
 // Clear previous answers
 answersEl.innerHTML = "";
 // Create answer buttons
 question.answers.forEach((answer, index) => {
 const button = document.createElement("button");
 button.textContent = answer;
 button.classList.add("answer-btn");
 button.addEventListener("click", () => selectAnswer(index));
 answersEl.appendChild(button);
 });
}
function selectAnswer(selectedIndex) {
 if (answered) return;
 answered = true;
 const question = questions[currentQuestion];
 const buttons = answersEl.querySelectorAll(".answer-btn");
 // Disable all buttons
 buttons.forEach(btn => btn.disabled = true);
 // Show correct/wrong
 if (selectedIndex === question.correct) {
 buttons[selectedIndex].classList.add("correct");
 score++;
 scoreEl.textContent = \`Score: \${score}\`;
 } else {
 buttons[selectedIndex].classList.add("wrong");
 buttons[question.correct].classList.add("correct");
 }
 // Enable next button
 nextBtn.disabled = false;
 // Change button text for last question
 if (currentQuestion === questions.length - 1) {
 nextBtn.textContent = "See Results";
 }
}
function nextQuestion() {
 currentQuestion++;
 if (currentQuestion < questions.length) {
 showQuestion();
 } else {
 showResults();
 }
}
function showResults() {
 quizScreen.classList.add("hidden");
 resultScreen.classList.remove("hidden");
 const percentage = Math.round((score / questions.length) * 100);
 finalScoreEl.textContent = \`\${score}/\${questions.length}\`;
 let message = "";
 if (percentage === 100) {
 message = " Perfect! You're a Cambodia expert!";
 } else if (percentage >= 80) {
 message = " Excellent! You know Cambodia well!";
 } else if (percentage >= 60) {
 message = " Good job! Keep learning!";
 } else if (percentage >= 40) {
 message = " Not bad! There's more to learn.";
 } else {
 message = " Keep exploring Cambodia!";
 }
 resultMessageEl.textContent = message;
}
function restartQuiz() {
 currentQuestion = 0;
 score = 0;
 nextBtn.textContent = "Next Question";
 resultScreen.classList.add("hidden");
 startScreen.classList.remove("hidden");
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Step 4: Add More Questions</Typography>
          <Typography>
            Expand your questions array with more topics:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>History</li>
            <li>Geography</li>
            <li>Culture</li>
            <li>Food</li>
            <li>Famous people</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Evaluation Criteria</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Criteria</TableHead>
                <TableHead>Points</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Functionality (40)</TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Questions display correctly</TableCell>
                <TableCell>10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Answer selection works</TableCell>
                <TableCell>10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Score tracking accurate</TableCell>
                <TableCell>10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Results show at end</TableCell>
                <TableCell>10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Code Quality (30)</TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Clean, organized code</TableCell>
                <TableCell>10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Meaningful variable names</TableCell>
                <TableCell>10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Functions used properly</TableCell>
                <TableCell>10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Design (20)</TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Visual appeal</TableCell>
                <TableCell>10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Responsive design</TableCell>
                <TableCell>10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Extras (10)</TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Additional features</TableCell>
                <TableCell>10</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Level Complete</Typography>
          <Typography>
            Upon completing this project:
          </Typography>
          <Typography>
            JavaScript Basics Badge earned
JavaScript Developer Certificate awarded
Ready for Track 04: JavaScript Advanced or Track 05: Git &amp; GitHub
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography>
            You built your first JavaScript app!
          </Typography>
          <Typography>
            This quiz will grow with you — add new features as you learn!
          </Typography>
        </div>
      </section>
    </div>
  );
}
