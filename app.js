const questions =[
  {
    question: "Which architectural feature is highlighted in the image and is commonly found in Hindu temple architecture?",
    image: "./img/que-1.jpg",
    answers: [
      { text: "Minaret", correct: false},  
      { text: "Dome", correct: false},
      { text: "Shikhara", correct: true},
      { text: "Pinnacle", correct: false},
    ],
  },
  {
    question: "Identify the temple shown in the image, known for its intricate carvings and status as a UNESCO World Heritage Site",
    image: "./img/que-2.jpg",
    answers: [
      { text: "Angkor Wat", correct: false},
      { text: "Borobudur", correct: false},
      { text: "Khajuraho", correct: true},
      { text: "Meenakshi Temple", correct: false},
    ]
  },
  {
    question: "The illustrated temple plan is characteristic of which architectural style?",
    image: "./img/que-3.jpg",
    answers: [
      { text: "Greek", correct: false}, 
      { text: "Gothic", correct: false},
      { text: "Romanesque", correct: false},
      { text: "Vastu Shastra", correct: true},
    ]
  },
  {
    question: "What is the architectural term for the pillars shown in the image, often found in ancient Greek and Hindu temples?",
    image: "./img/que-4.jpg",
    answers: [
      { text: "Doric columns", correct: false},
      { text: "Ionic columns", correct: true},
      { text: "Corinthian columns", correct: false},
      { text: "Hypostyle columns", correct: false},
    ]
  },
  {
    question: "The entrance of the depicted temple is known for its grand and ornate gateway. What is this entrance called in Indian temple architecture?",
    image: "./img/que-5.jpg",
    answers: [
      { text: "Torana", correct: false},
      { text: "Gopuram", correct: true},
      { text: "Mandapa", correct: false},
      { text: "Vimana", correct: false},
    ]
  }
]

let correctAnswerCount = 0;
  
const qusElement = document.querySelector(".question")
const ansBtn = document.querySelector(".ans-btn")
const nextBtn = document.getElementById("next-btn");
const questionImage = document.getElementById("question-image");

let currentQueIndex = 0;

function showQuestion(){
  let currentQue = questions[currentQueIndex]
  let queNo = currentQueIndex + 1
  
  if (currentQueIndex > questions.length - 1) {
    console.log("Questions over");
    qusElement.innerText = `You got ${correctAnswerCount} answers right out of ${questions.length} questions`;
    questionImage.src="./img/final-img.jpg"
  } else {
    qusElement.innerHTML = queNo +". "+ currentQue.question
    questionImage.src = currentQue.image;

    currentQue.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      button.classList.add("btn-outline-dark");
      ansBtn.appendChild(button);
        if(answer.correct){
          button.dataset.correct = answer.correct
        }
          button.addEventListener("click", selectAns)
        })
  }
}

function selectAns(e) {
  const selectBtn = e.target
  const isCorrect = selectBtn.dataset.correct === "true"

  selectBtn.classList.remove("btn-outline-dark");
  nextBtn.disabled = false;

  if(isCorrect) {
    selectBtn.classList.add("btn-success");
    correctAnswerCount++;
  } else {
    selectBtn.classList.add("btn-danger")
  }

  let buttons = ansBtn.children;

  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    
    if(button.dataset.correct === "true") {
      button.classList.add("btn-success");
    } else {
      button.disabled = true;
    }
  }
}

nextBtn.addEventListener("click", () => {
  currentQueIndex++;
  reset();
  showQuestion();
});

function reset() {
  ansBtn.innerHTML = "";
  nextBtn.disabled = true;
}
  

showQuestion()