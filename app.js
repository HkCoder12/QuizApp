const quizData = [{
        question: "What does the abbreviation 'http' stand for?",
        a: "Hypertext Transfer Protocol",
        b: "High Task Termination Procedure",
        c: "Harvard Teletext Proof",
        d: "Hindustan Times Technical Professionals",
        correct: "a",
    },
    {
        question: "A JPG is:",
        a: "A Jumper Programmed Graphic",
        b: "A format for an image file",
        c: "A type of hard disk",
        d: "A unit of measure for memory",
        correct: "b",
    },
    {
        question: "RAM stands for:",
        a: "Random Access Memory",
        b: "Really Annoying Machine",
        c: "Read A Manual",
        d: "Real Absolute Memory",
        correct: "a",
    },
    {
        question: "The first graphical browser for the WWW was named:",
        a: "Netscape",
        b: "Veronica",
        c: "Mosaic",
        d: "Explorer",
        correct: "c",
    }
];
let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const data = quizData[index]
        const ans = getAnswer()
        if (ans === data.correct) {
            correct++;
        } else {
            incorrect++;
        }
        index++;
        loadQuestion()
    }
)

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

const quizEnd = () => {
    console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
        <h1>Your Score: ${correct} / ${total}<h1/>
        </div>
    `
}
loadQuestion(index);