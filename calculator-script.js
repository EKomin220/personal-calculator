const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator-keys')
const display = document.querySelector('.calculator-display')

keys.addEventListener('click', e => {

  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
  

  if (!action) {
    if (displayedNum === '0') {display.textContent = keyContent}
    else {display.textContent = displayedNum + keyContent}
  }

  if (action === 'decimal') { display.textContent = displayedNum + '.' }

  if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
     key.classList.add('is-depressed')
     calculator.dataset.previousKeyType = 'operator'
  }

  Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))

  const previousKeyType = calculator.dataset.previousKeyType;

 if (!action) {
  if (displayedNum === '0' || previousKeyType === 'operator') {display.textContent = keyContent} 
  else {display.textContent = displayedNum + keyContent}
}
  
  }
})


