const body = document.querySelector('body')
const button = document.querySelector('.button')

button.addEventListener('click', e => {
  body.classList.toggle('off-site-opened')
})
