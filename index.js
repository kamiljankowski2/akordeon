const buttons = [...document.querySelectorAll('.faq-item-question > button')]

buttons.forEach(button => {
  button.addEventListener('click', e => {
    button.parentElement.parentElement.classList.toggle('active');
  })
})