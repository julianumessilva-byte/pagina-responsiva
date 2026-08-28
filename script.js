document.addEventListener('DOMContentLoaded', () => {
  // Alerta nos botões dos artigos
  const buttons = document.querySelectorAll('.posts-section .card-button');
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      alert(`Você clicou para ler a postagem ${index + 1}!`);
    });
  });

  // Lógica do Mini-Jogo (Quiz)
  const quizData = [
    {
      question: "Qual propriedade CSS é utilizada para alterar a cor de fundo?",
      options: ["color", "background-color", "flex-direction", "border-color"],
      correct: 1
    },
    {
      question: "Qual valor da propriedade 'display' ativa o Layout Flexbox?",
      options: ["block", "grid", "inline", "flex"],
      correct: 3
    },
    {
      question: "Como alinhamos itens verticalmente no centro dentro de um container flex?",
      options: ["align-items: center", "justify-content: center", "text-align: center", "float: center"],
      correct: 0
    }
  ];

  let currentQuestion = 0;
  let score = 0;

  const questionEl = document.getElementById('quiz-question');
  const optionsEl = document.getElementById('quiz-options');
  const feedbackEl = document.getElementById('quiz-feedback');
  const nextBtn = document.getElementById('next-btn');

  function loadQuiz() {
    feedbackEl.textContent = '';
    nextBtn.style.display = 'none';
    optionsEl.innerHTML = '';

    const currentQuiz = quizData[currentQuestion];
    questionEl.textContent = currentQuiz.question;

    currentQuiz.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.classList.add('option-btn');
      button.textContent = option;
      button.addEventListener('click', () => selectOption(index));
      optionsEl.appendChild(button);
    });
  }

  function selectOption(selectedIndex) {
    const currentQuiz = quizData[currentQuestion];
    const optionButtons = optionsEl.querySelectorAll('.option-btn');

    optionButtons.forEach(btn => btn.disabled = true);

    if (selectedIndex === currentQuiz.correct) {
      feedbackEl.textContent = 'Correcto! 🎉';
      feedbackEl.style.color = '#2e7d32';
      score++;
    } else {
      feedbackEl.textContent = `Incorreto. A resposta certa era: "${currentQuiz.options[currentQuiz.correct]}"`;
      feedbackEl.style.color = '#c62828';
    }

    if (currentQuestion + 1 < quizData.length) {
      nextBtn.style.display = 'inline-block';
    } else {
      feedbackEl.textContent += ` | Quiz finalizado! Pontuação: ${score}/${quizData.length}`;
    }
  }

  nextBtn.addEventListener('click', () => {
    currentQuestion++;
    loadQuiz();
  });

  loadQuiz();
});
