async function getAdvice(){
  const res = await fetch('https://api.adviceslip.com/advice')
  const adviceSlip = await res.json()
  return adviceSlip
}

document.getElementById('generator-btn').addEventListener('click', () => {
   getAdvice().then(adviceSlip => {
    document.getElementById('advice-number').textContent = adviceSlip.slip.id
    document.getElementById('advice').textContent = adviceSlip.slip.advice
   })
})