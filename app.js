const quizData = [
      {
        question: "What is the capital of France?",
        a: "Paris",
        b: "London",
        c: "Berlin",
        correct: "a"
      },
      {
        question: "What does HTML stand for?",
         a: "Hyper Text Markup Language",
         b: "Home Tool Markup Language",
         c: "Hyperlinks and Text Markup Language",
          correct: "a"
      },
      {
        question: "Which language runs in a web browser?",
        a: "Python",
        b: "Javascript",
        c: "C++",
        correct: "b"
      },
      
      {
        question: "Which tag is used to insert an image in HTML",
        a: "<img>",
        b: "<image>",
        c: "<scr>",
        correct: "a"
      },
      {
        question: "Which method is used to output text to the browser console?",
        a: "console.log()",
        b: "print()",
        c: "document.log()",
        correct: "a"
      },

      {
        question: "What does typeof operator return for an array?",
        a: "array",
        b: "object",
        c: "list",
        correct: "b"
      },

      {
        question: "What is the correct HTML element for the largest heading",
        a: "<heading>",
        b: "<h6>",
        c: "<h1>",
        correct: "c"
      },
      
      
      {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Coded Style Sheets", d: "Computer Style Sheets",
        correct: "b"
      },
      {

       question: "Which property is used to change text color?",
        a: "font-color",
        b: "text-color",
        c: "color",
        correct: "c"
      },
      {

       question: "Which CSS property controls the size of text?",
        a: "text-size",
        b: "font-size",
        c: "size",
        correct: "b"
      },
      {

       question: "How do you make a background image cover the entire screen?",
        a: "background-size: full;",
        b: "background-size: 100%;",
        c: "background-size: cover",
        correct: "C"
      },

      {

       question: "Which keyword declares a variable in JavaScript?",
        a: "int",
        b: "let",
        c: "varname",
        correct: "b"
      },

      {

       question: "Which symbol is used for comments in JavaScript?",
        a: "<!-- -->",
        b: "##",
        c: "//",
        correct: "c"
      },

      {

       question: "How do you write a function in JavaScript?",
        a: "function myFunction()",
        b: "def myFunction()",
        c: "func myFunction()",
        correct: "a"
      },
      
      {

       question: "Which HTML5 element is used to define navigation links?",
        a: "<nav>",
        b: "<link>",
        c: "<navigate>",
        correct: "a"
      },

      {

       question: "Which property makes an element disappear but still take up space?",
        a: "visibility: hidden;",
        b: "display: none;",
        c: "opacity: 0;",
        correct: "a"
      },

       {

       question: "How do you make a div a flex container?",
        a: "display: grid;",
        b: "display: inline;",
        c: "display: flex;",
        correct: "c"
      },
      
      
    ];

    const questionEl = document.getElementById("question");
    const a_text = document.getElementById("a_text");
    const b_text = document.getElementById("b_text");
    const c_text = document.getElementById("c_text");
    const submitBtn = document.getElementById("submit");
    let currentQuiz = 0;
    let score = 0;

    function loadQuiz() {
      deselectAnswers();
      const currentQuizData = quizData[currentQuiz];
      questionEl.innerText = currentQuizData.question;
      a_text.innerText = currentQuizData.a;
      b_text.innerText = currentQuizData.b;
      c_text.innerText = currentQuizData.c;
    }

    function getSelected() {
      const answers = document.getElementsByName("answer");
      let selectedAnswer = undefined;
      answers.forEach((input) => {
        if (input.checked) {
          selectedAnswer = input.value;
        }
      });
      return selectedAnswer;
    }

    function deselectAnswers() {
      const answers = document.getElementsByName("answer");
      answers.forEach((input) => (input.checked = false));
    }

    submitBtn.addEventListener("click", () => {
      const answer = getSelected();
      if (answer) {
        if (answer === quizData[currentQuiz].correct) {
          score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
          loadQuiz();
        } else {
          document.querySelector(".quiz-container").innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly!</h2>
            <button onclick="location.reload()">Reload Quiz</button>
          `;
        }
      } else {
        alert("Please select an answer!");
      }
    });

    loadQuiz();
 