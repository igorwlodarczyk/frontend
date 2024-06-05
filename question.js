const questions = JSON.parse(document.currentScript.getAttribute('data-questions'));

let currentQuestionIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    const questionElement = document.getElementById('question');
    const answerInput = document.getElementById('answer');
    const feedbackElement = document.getElementById('feedback');
    const checkAnswerButton = document.getElementById('check-answer');
    const flashcardSection = document.querySelector('.flashcard_section');

    function loadQuestion() {
        questionElement.textContent = questions[currentQuestionIndex].question;
        answerInput.value = '';
        feedbackElement.textContent = '';
        flashcardSection.style.backgroundColor = '#f0f0f0'; 
    }

    function checkAnswer() {
        const userAnswer = answerInput.value.trim();
        const correctAnswer = questions[currentQuestionIndex].answer;

        if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            feedbackElement.textContent = 'Correct answer!';
            flashcardSection.style.backgroundColor = 'rgba(0, 255, 0, 0.5)'; 
        } else {
            feedbackElement.textContent = 'Incorrect answer!';
            flashcardSection.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
        }

        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                loadQuestion();
            } else {
                feedbackElement.textContent = 'Gratulacje! Ukończyłeś wszystkie pytania.';
                checkAnswerButton.disabled = true;
            }
        }, 2000);
    }

    checkAnswerButton.addEventListener('click', checkAnswer);

    loadQuestion();
});