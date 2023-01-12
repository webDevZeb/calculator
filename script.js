let display = document.querySelector('.display-area')

let buttons = Array.from(document.querySelectorAll('button'))

buttons.map((button) => {
  button.addEventListener('click', (e) => {
    switch (e.target.innerText) {
      case 'AC':
        display.innerText = ''
        break
      case 'DEL':
        display.innerText = display.innerText.slice(0, -1)
        break
      case '=':
        try {
          display.innerText = eval(display.innerText)
        } catch {
          display.innerText = 'Error!'
        }
        break

      default:
        display.innerText += e.target.innerText
    }
    // console.log('clicked')
    // console.log(e)
    // console.log(e.target)
    // console.log(e.target.innerText)
  })
})
