const questions = [
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "What is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: "Blue Whale",
  },
  {
    question: "What gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: "Carbon Dioxide",
  },
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-button"); // New element for restart button
const timeElement = document.getElementById("time"); // New element for displaying time

let correctCount = 0;
let incorrectCount = 0;
let skippedCount = 0;

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  optionsElement.innerHTML = "";
  currentQuestion.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.textContent = option;
    li.addEventListener("click", () => checkAnswer(index));
    optionsElement.appendChild(li);
  });

  // Display and start the timer for the current question (e.g., 5 seconds)
  timeElement.textContent = "Time left: 5s"; // Display initial time
  startTimer(5, () => {
    // Timeout - user didn't answer in time
    feedbackElement.textContent = "Time's up!";
    nextButton.style.display = "block";
  });

  skipButton.style.display = "block"; // Show the skip button
  nextButton.style.display = "none"; // Hide the next button
}

function checkAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  if (currentQuestion.options[selectedIndex] === currentQuestion.answer) {
    score++;
    correctCount++;
    //feedbackElement.textContent = "Correct!";
    feedbackElement.innerHTML = "<span style='color: green;'>✓</span>"; // Green tick mark
  } else {
    incorrectCount++;
    //feedbackElement.textContent = "Incorrect!";
    feedbackElement.innerHTML = "<span style='color: red;'>✗</span>"; // Red cross mark
  }

  scoreElement.textContent = `Score: ${score}`;
  skipButton.style.display = "none"; // Hide the skip button
  nextButton.style.display = "block"; // Show the next button

  // Disable further clicks on options
  const options = optionsElement.children;
  for (let i = 0; i < options.length; i++) {
    options[i].style.pointerEvents = "none";
  }
}

function startTimer(seconds, timeoutCallback) {
  let time = seconds;
  timer = setInterval(() => {
    if (time <= 0) {
      clearInterval(timer);
      if (timeoutCallback) {
        timeoutCallback();
      }
      // Automatically move to the next question
      nextButton.click();
    } else {
      timeElement.textContent = `Time left: ${time}s`; // Update the displayed time
      time--;
    }
  }, 1000);
}

nextButton.addEventListener("click", () => {
  clearTimeout(timer); // Clear the timer

  currentQuestionIndex++;
  feedbackElement.textContent = "";
  nextButton.style.display = "none";

  if (currentQuestionIndex < questions.length) {
    loadQuestion();

    // Enable options for the new question
    const options = optionsElement.children;
    for (let i = 0; i < options.length; i++) {
      options[i].style.pointerEvents = "auto";
    }
  } else {
    // Quiz completed
    questionElement.textContent = "Quiz Completed!";
    optionsElement.innerHTML = "";
    nextButton.style.display = "none";
    restartButton.style.display = "block"; // Show the restart button
    skipButton.style.display = "none"; // Hide the skip button

    document.getElementById("results-graph").style.display = "block"; // Show the results graph
    updateResultsGraph(); // Update the results graph
  }
});

restartButton.addEventListener("click", () => {
  // Reset variables
  currentQuestionIndex = 0;
  score = 0;
  correctCount = 0;
  incorrectCount = 0;
  skippedCount = 0;

  // Reset display
  questionElement.textContent = "";
  optionsElement.innerHTML = "";
  feedbackElement.textContent = "";
  scoreElement.textContent = "Score: 0";
  nextButton.style.display = "none";
  nextButton.style.display = "block";
  restartButton.style.display = "none"; // Hide the restart button

  // Hide the results graph
  document.getElementById("results-graph").style.display = "none";

  // Load the first question
  loadQuestion();
});

const skipButton = document.getElementById("skip-button");

skipButton.addEventListener("click", () => {
  // Clear the timer
  clearTimeout(timer);

  // Move to the next question
  currentQuestionIndex++;
  skippedCount++; // Increment the skipped count
  feedbackElement.textContent = "";
  nextButton.style.display = "none";
  skipButton.style.display = "none"; // Hide the skip button

  if (currentQuestionIndex < questions.length) {
    loadQuestion();

    // Enable options for the new question
    const options = optionsElement.children;
    for (let i = 0; i < options.length; i++) {
      options[i].style.pointerEvents = "auto";
    }
  } else {
    questionElement.textContent = "Quiz Completed!";
    optionsElement.innerHTML = "";
    nextButton.style.display = "none";
    restartButton.style.display = "block"; // Show the restart button
    skipButton.style.display = "none"; // Hide the skip button

    document.getElementById("results-graph").style.display = "block"; // Show the results graph
    updateResultsGraph(); // Update the results graph
  }
});

function updateResultsGraph() {
  const totalWidth = document.getElementById("results-graph").offsetWidth;

  document.getElementById("total-fill").style.width = totalWidth + "px"; // The total bar is always full
  document.getElementById("correct-fill").style.width =
    (correctCount / questions.length) * totalWidth + "px";
  document.getElementById("incorrect-fill").style.width =
    (incorrectCount / questions.length) * totalWidth + "px";
  document.getElementById("skipped-fill").style.width =
    ((questions.length - correctCount - incorrectCount) / questions.length) *
      totalWidth +
    "px";

  document.getElementById(
    "total-label"
  ).textContent = `Total Questions: ${questions.length}`;
  document.getElementById(
    "correct-label"
  ).textContent = `Correct: ${correctCount}`;
  document.getElementById(
    "incorrect-label"
  ).textContent = `Incorrect: ${incorrectCount}`;
  document.getElementById("skipped-label").textContent = `Skipped: ${
    questions.length - correctCount - incorrectCount
  }`;
}

// Load the first question when the page loads
loadQuestion();
