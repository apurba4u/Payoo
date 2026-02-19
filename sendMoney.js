document.querySelector("#send-money-btn").addEventListener('click', () => {
  // 1 - get the account number
  const sendMoneyNumber = getValueFromInput('send-money-number')
  if (sendMoneyNumber.length != 11) {
    alert('Invalid account number')
    return
  }
  // 2 - get the amount and validate
  const sendMoneyAmount = getValueFromInput('send-money-amount')
  // 3 - get the current balance
  const currentBalance = getBalance()

  // 4 - calculate the Balance
  const newBalance = currentBalance - Number(sendMoneyAmount)
  if (newBalance < 0) {
    alert('Invalid Amount')
    return
  }
  // 5 - get the pin
  const pin = getValueFromInput('send-money-pin')
  if (pin == '4433') {
    alert(`Send Money Successfully on 
      ${sendMoneyAmount} TK suceess to ${sendMoneyNumber} at ${new Date()}`)
    setBalance(newBalance)
    // 1 - history-container ke dhore niye ashbo
    const history = document.querySelector("#history-container")
    // 2 - new div create korbo
    const newHistory = document.createElement('div')
    // 3 - new div e innerHTML add korbo
    newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-100 mb-3">
     Send money ${sendMoneyAmount} TK suceess to ${sendMoneyNumber} at ${new Date()}
    </div>
    `
    // 4 - history-container e new div append korbo
    history.append(newHistory)
  } else {
    alert('InValid Pin')
    return
  }
})