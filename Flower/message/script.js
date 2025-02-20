document.addEventListener('DOMContentLoaded', () => {
  const imageElement = document.querySelector('.image');
  const audio = new Audio('static/takeachance.mp3');

  imageElement.addEventListener('click', () => {
    audio.play();
  });
});
