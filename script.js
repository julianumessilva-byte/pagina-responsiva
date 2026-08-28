document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.card-button');

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      alert(`Você clicou no botão da postagem ${index + 1}!`);
    });
  });
});
