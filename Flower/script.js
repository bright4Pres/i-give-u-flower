onload = () => {
  document.body.classList.remove("container");
};

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('button');
  button.addEventListener('click', () => {
    const inputs = document.querySelectorAll('.black_card .input');
    let inputValue = '';
    inputs.forEach(input => {
      inputValue += input.value;
    });
    if (inputValue === '011125') {
      window.location.href = './message/index.html';
    } else {
      alert('wrong password, try again');
    }
  });
});