# Interactive Quiz Web Application

This is a simple interactive quiz web application built using HTML, CSS, and JavaScript. It allows users to answer a series of questions, tracks their score, and displays the results in a graphical format.

## Features

- Display questions with multiple-choice options.
- Track user score.
- Set a timer for each question.
- Allow users to skip questions.
- Display quiz results graphically at the end.

## Table of Contents

- [Getting Started](#getting-started)
- [Screenshots](#screenshots)
- [Usage](#usage)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get started, follow these steps:

1. Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/your-username/interactive-quiz.git  

2. Navigate to the project directory:

   cd interactive-quiz
   
4. Open the index.html file in a web browser. You can do this by double-clicking on the file or using your browser's "Open File" option.

   The quiz interface will load in your web browser, and you can begin answering questions.

## Screenshots

<img src="https://github.com/ano-ny-mous/Interactive-Quiz-Web-Application/assets/91519560/9e560d6e-f6c2-4e98-8e0b-9ebb545fccd8" alt="Screenshot 1" width="600" >

<img src="https://github.com/ano-ny-mous/Interactive-Quiz-Web-Application/assets/91519560/a6061752-377f-4690-a98a-49f9341360f0" alt="Screenshot 2" width="600" >

<img src="https://github.com/ano-ny-mous/Interactive-Quiz-Web-Application/assets/91519560/427bc169-ae26-4deb-9aff-e5fc084018f9" alt="Screenshot 3" width="600" >

<img src="https://github.com/ano-ny-mous/Interactive-Quiz-Web-Application/assets/91519560/c7059e49-cd63-4c37-bbef-c19f3b7b03f2" alt="Screenshot 4" width="600" >

## Usage

1. When the quiz starts, the first question will be displayed along with multiple-choice options.
2. Users can select an answer by clicking on one of the options.
3. A timer will start for each question. If the user doesn't answer within the specified time (default: 5 seconds), the question will be considered skipped.
4. The user's score is displayed at the top left corner of the quiz container.
5. After answering or skipping a question, the user can click the "Next" button to proceed to the next question.
6. If desired, users can skip questions using the "Skip" button.
7. The quiz ends when all questions have been answered or skipped.
8. At the end of the quiz, the user's score and results graph are displayed.

## Customization

You can customize the quiz by modifying the `questions` array in the `quiz.js` file. Each question is defined with the following properties:

- `question`: The question text.
- `options`: An array of multiple-choice answer options.
- `answer`: The correct answer.

Additionally, you can customize the quiz appearance by editing the CSS styles in the `styles.css` file.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit pull requests with your enhancements or bug fixes. We welcome contributions from the community.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
