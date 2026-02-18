document.querySelector('#add-money-btn').addEventListener('click', () => {
  // 1 - bank Account get
  const bankAccount = getValueFromInput('add-money-bank')
  if (bankAccount === 'Select a Bank') {
    alert('Please select a bank')
    return
  }

  // 2 - get bank account number
  const accno = getValueFromInput('add-money-number')
  if (accno.length != 11) {
    alert('invalid acc no')
    return
  }
  // 3 - set new balance
  const amount = getValueFromInput('add-money-amount')
  const currentBalance = getBalance()
  const newBalance = currentBalance + Number(amount)
  console.log(newBalance);

  // 4 - verify pin and set balance
  const pin = getValueFromInput('add-money-pin')
  if (pin == '4433') {
    alert(`${amount} add suceessfully oin ${bankAccount}, acc-no ${accno} at ${new Date()}`)
    setBalance(newBalance)
    // 1 - history-container ke dhore niye ashbo
    const history = document.querySelector("#history-container")
    // 2 - new div create korbo
    const newHistory = document.createElement('div')
    // 3 - new div e innerHTML add korbo
    newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-100 mb-3">
    ${amount} add suceessfully oin ${bankAccount}, acc-no ${accno} at ${new Date()}
    </div>
    `
    // 4 - history-container e new div append korbo
    history.append(newHistory)
  } else {
    alert('Invalid Pin')
    return
  }
})