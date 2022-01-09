const questionText = document.getElementById('text');
const answerText = document.getElementById('text');

// an array of compliments to be displayed
const questions = [
    {
        question: "What is a Savings Account?", 
        answer: "A deposit account in a bank or credit union that pays interest on your balance."
    }
];

// randomly picks a compliment from array to display 
const numGenerator = () => {
    return randomNum = Math.floor(Math.random() * questions.length);
}

const showAnswer = () => {
    let num = numGenerator();
    let display = questions[num]
    questionText.innerHTML = display.question;
    answerText.innerHTML = display.answer;
}

btn.addEventListener('click', () => {
    showAnswer;
});
