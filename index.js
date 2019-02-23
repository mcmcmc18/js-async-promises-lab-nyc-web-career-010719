const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
// let hidden = false;

function appendQuestion(questions){
  const qContainer = document.querySelector('.question-container')
  qContainer.innerHTML = questions.questionText
}

function askQuestionThen(time) {
  question = questions[0]
  appendQuestion(question)
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve(question)
    }, time )
  })
}

function removeQuestion(){
  const qContainer = document.querySelector('.question-container')
  qContainer.innerHTML = ""
}

function askQuestionThenRemoveQuestion(time){
  return askQuestionThen(time).then(removeQuestion)
}

function trueAndFalseButtons(){
  let buttonContainer = document.querySelector('.true-false-list')
  let buttons = buttonContainer.querySelectorAll('.btn')
  return buttons
}

// function toggleTrueAndFalseButtons(){
//   let buttonContainer = document.querySelector('.true-false-list')
//   let buttons = buttonContainer.querySelectorAll('.btn')
//     buttons.forEach(function(e){
//     if (hidden == false){
//       debugger
//       e.classList = "hide"
//       hidden = true
//     } else if (hidden == true) {
//       e.classList = ""
//       hidden = false
//       }
//   })
// }

function toggleTrueAndFalseButtons(){
  trueAndFalseButtons().forEach(function(e){
        e.classList.toggle("hide")
  })
}

function displayQuestionOnClick(){
  let buttons = document.querySelector(".waves-effect")
  buttons.addEventListener("click", function () {
  toggleTrueAndFalseButtons()
  askQuestionThenRemoveQuestion(1000)
  })
}


// function toggleTrueAndFalseButtons(){
//   let buttonContainer = document.querySelector('.true-false-list')
//   let buttons = buttonContainer.querySelectorAll('.btn')
//     buttons.forEach(function(e){
//     if (hidden == false){
//       // e.classList = `${e.classList}` + ` hide`
//       e.classList.value = `${e.classList.value}` + ` hide`
//       hidden = true
//     } else if (hidden == true){
//       e.classList.value = `${e.classList.value}` - ` hide`
//       debugger
//       hidden = false
//       }
//     })
//   // })
// }
