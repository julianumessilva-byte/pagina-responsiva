document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.card-button');

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      alert(`Você clicou para ler a postagem ${index + 1}!`);
    });
  });
});
