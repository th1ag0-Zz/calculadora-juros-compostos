let contentBox = document.querySelector('.content-box')
let headerBox= document.querySelector('.results')
let totalValueBox = document.querySelector('.total-container')
let totalValueText = document.querySelector('.total-container .total-value')

function calc() {

  let investValue = Number(document.getElementById('invest').value)
  let percentValue = Number(document.getElementById('percent').value)

  if (investValue === '' || percentValue === '') {
    alert('Preencha os campos')
    return
  }

  headerBox.style.display = 'block'
  totalValueBox.style.display = 'flex'
  
  contentBox.innerHTML = ''

  let calcValue =  investValue
  let calcValueText = calcValue.toFixed(2)
  let goalValue = calcValue * (percentValue / 100)
  let goalValueText = goalValue.toFixed(2)

  for (let i = 1; i <= 31; i++) {

    let newLine = document.createElement('div')
    newLine.classList.add('line')

    // valores separados
    let day = document.createElement('p')
    day.innerText = i
    newLine.appendChild(day)

    let value = document.createElement('p')
    value.innerText = `$ ${calcValueText}`
    newLine.appendChild(value)

    let goal = document.createElement('p')
    goal.innerText = `$ ${goalValueText}`
    newLine.appendChild(goal)
    //

    contentBox.appendChild(newLine)

    calcValue = calcValue + goalValue
    calcValueText = calcValue.toFixed(2)

    goalValue = calcValue * (percentValue / 100)
    goalValueText = (calcValue * (percentValue / 100)).toFixed(2)
  }

  totalValueText.innerText = `$ ${calcValueText}`

}