const questions =[
  {
    question: "What is the difference between Valampuri and Idampuriganesha?",
    image: "./img/que-1.jpg",
    answers: [
      { text: "Head", correct: false},  
      { text: "Tusk", correct: false},
      { text: "Trunk", correct: true},
      { text: "Hands", correct: false},
    ],
  },
  {
    question: "Components of pillar?",
    image: "./img/que-2.jpg",
    answers: [
      { text: " Sathuram, Kattu, Vattam", correct: false},
      { text: "Sathuram, Kattu, Podigai", correct: true},
      { text: "Sathuram,Padam,Parasthram", correct: false},
      { text: "Padam, Prastharam, kandam", correct: false},
    ]
  },
  {
    question: "Cave temples are mainly located on the?",
    image: "./img/que-3.jpg",
    answers: [
      { text: "Top of the hillock", correct: false}, 
      { text: "Foot of the hillock", correct: false},
      { text: "Mid of the hillock", correct: false},
      { text: "All of this", correct: true},
    ]
  },
  {
    question: "Cave temple, is comes under which category of style?",
    image: "./img/que-4.jpg",
    answers: [
      { text: "Cut in", correct: true},
      { text: "Cut out", correct: false},
      { text: "Structural", correct: false},
      { text: "Bas relief", correct: false},
    ]
  },
  {
    question: "Name of the sculpture standing both side of the Garbhagraha?",
    image: "./img/que-5.jpg",
    answers: [
      { text: "Siva", correct: false},
      { text: "Sankara", correct: false},
      { text: "Dakshinamurthi", correct: false},
      { text: "Dhuvarapala", correct: true},
    ]
  },
  {
    question: "Which one is called as Somaskandha panel?",
    image: "./img/que-6.jpg",
    answers: [
      { text: " Siva, Parvathi, Ganensha", correct: false},
      { text: "Parvathi, Siva, Vishnu", correct: false},
      { text: "Siva,Parvathi,Skandha", correct: true},
      { text: "Skandha,Vishnu,Siva", correct: false},
    ]
  },
  {
    question: "Nataraja Sculpture panel is present in which cave temple in Tamil Nadu?",
    image: "./img/que-7.jpg",
    answers: [
      { text: "Thiruparankundram", correct: true},
      { text: "Narthamalai", correct: false},
      { text: "Sittannavasal", correct: false},
      { text: "Thirumayam", correct: false},
    ]
  },
  {
    question: "Hayagriva bas relief sculpture present in which cave temple in Tamil Nadu?",
    image: "./img/que-8.jpg",
    answers: [
      { text: "Tantonrimalai", correct: false},
      { text: "Tiruttangal", correct: false},
      { text: "Tiruppanjili", correct: false},
      { text: "Malayadipatti", correct: true},
    ]
  },
  {
    question: "Lingothbhava bas relief sculpture present in which cave temple in Tamil Nadu?",
    image: "./img/que-9.jpg",
    answers: [
      { text: "Mangudi", correct: false},
      { text: "Mangulam", correct: false},
      { text: "Thirumayam", correct: true},
      { text: "Sivagiri", correct: false},
    ]
  },
  {
    question: "The inscription which refers to the Pungundranadu (Considered as birth place of Kaniyan pungundarnar) is resent in which cave?",
    image: "./img/que-10.jpg",
    answers: [
      { text: "Maghibalanpatti", correct: true},
      { text: "Kundrakudi", correct: false},
      { text: "Tirucchirappalli", correct: false},
      { text: "Sivagiri", correct: false},
    ]
  },
  {
    question: "Musical notes inscriptions were present in which cave temple in Tamil Nadu? Image source Wikipedia",
    image: "./img/que-11.jpg",
    answers: [
      { text: "Narthamalai", correct: false},
      { text: "Kudumiyanmalai", correct: true},
      { text: "Pilliyarpatti", correct: false},
      { text: "Palayiliswaram", correct: false},
    ]
  },
  {
    question: "Parivadiniinscriptions were present in which cave temple in Tamil Nadu?",
    image: "./img/que-12.jpg",
    answers: [
      { text: "Narthamalai", correct: false},
      { text: "Kurattyarai", correct: false},
      { text: "Pilliyarpatti", correct: false},
      { text: "Kudumiyanmalai", correct: true},
    ]
  },
  {
    question: "Standing form of Ganesha were present in which cave temple in Tamil Nadu?",
    image: "./img/que-1.jpg",
    answers: [
      { text: "Tiruchchirapalli", correct: true},
      { text: "Kottaiyur", correct: false},
      { text: "Tevarmalai", correct: false},
      { text: "Pechchiparai", correct: false},
    ]
  },
  {
    question: "Which Cave painting is compared with Ajantha painting in Tamil Nadu?",
    image: "./img/que-14.jpg",
    answers: [
      { text: "Sittannavasal", correct: true},
      { text: "Kunnatthur", correct: false},
      { text: "Kunnakudi", correct: false},
      { text: "Thiruvellari", correct: false},
    ]
  },
  {
    question: "Which Cut-Out temple called as Ellora of Tamil Nadu?",
    image: "./img/que-15.jpg",
    answers: [
      { text: "Narthamalai", correct: false},
      { text: "Kazhukumalai", correct: true},
      { text: "Pilliyarpatti", correct: false},
      { text: "Tiruchendur", correct: false},
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