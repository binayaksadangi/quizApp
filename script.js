const quizData = [
    {
        question: 'Best team in IPL?',
        a: 'MI',
        b: 'CSK',
        c: 'RCB',
        d: 'DC',
        correct: 'a'
    },{
        question: 'Most used Programming language in 2020?',
        a: 'Python',
        b: 'JavaScript',
        c: 'java',
        d: 'c++',
        correct: 'b'
    },{
        question: 'Who is the PM of India',
        a: 'Mukesh Ambani',
        b: 'Imran Tahir',
        c: 'Narendra Modi',
        d: 'Manas Ranjan Kabat',
        correct: 'c'
    },{
        question: 'The full form of popular language JS?',
        a: 'Jay Sambhoo',
        b: 'JavaScript',
        c: 'Joint Supplier',
        d: 'Java Supplier',
        correct: 'b'
    }
];

const question = document.getElementById("question");
const aText = document.getElementById("aText");
const bText = document.getElementById("bText");
const cText = document.getElementById("cText");
const dText = document.getElementById("dText");
const submitBtn = document.getElementById('submit');
let currentQuiz = 0;

loadQuiz();
console.log(quizData.length);
function loadQuiz(){
    const currentQuizData = quizData[currentQuiz];
    question.innerText = currentQuizData.question;
    aText.innerText = currentQuizData.a;
    bText.innerText = currentQuizData.b;
    cText.innerText = currentQuizData.c;
    dText.innerText = currentQuizData.d;

}
submitBtn.addEventListener('click', ()=>{
    currentQuiz++;
    if(currentQuiz < quizData.length){
        loadQuiz();
    }
    else{
        alert("you have finished the quiz!");
    }
    
})
