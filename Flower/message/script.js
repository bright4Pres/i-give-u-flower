document.addEventListener('DOMContentLoaded', () => {
  const imageElement = document.querySelector('.image');
  const audio = new Audio('static/takeachance.mp3');
  const modal = document.getElementById('modal');
  const closeModalButton = document.getElementById('close-modal');
  const ghostButton = document.querySelector('.button.is-ghost');
  const primaryButton = document.querySelector('.button.is-primary');

  imageElement.addEventListener('click', () => {
    audio.play();

    setTimeout(() => {
      modal.classList.add('show');
    }, 0);
  });

  closeModalButton.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  ghostButton.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  primaryButton.addEventListener('click', () => {
    modal.classList.remove('show');
  });
});
