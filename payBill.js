document.querySelector("#pay-bill-btn").addEventListener('click', () => {
  // 1 - get pay bill system
  const payBillSystem = getValueFromInput('pay-bill-system')
  if (payBillSystem === 'Select a Bill') {
    alert('Please select a bill first')
    return
  }
  // 2 - get biller account number
  const accno = getValueFromInput('pay-bill-number')
  if (accno.length != 11) {
    alert('Invalid Biller Account Number')
    return
  }
  // 3 - set new Balance
  const amount = getValueFromInput('pay-bill-amount')
  const currentBalance = getBalance()
  const newBalance = currentBalance - Number(amount)

  // 4 - verify pin and set new Balance
  const pin = getValueFromInput('pay-bill-pin')
  if (pin == '4433') {
    alert(`${amount} successful to pay on ${payBillSystem} from ${accno}`)
    setBalance(newBalance)

    // 1- hitory container ke dhore niye ashbo
    const history = document.querySelector("#history-container")
    // 2 - new div create korbo
    const newHistory = document.createElement('div')
    // 3 - new div e innerHTML add korbo
    newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-100 mb-3">
    ${amount} successful to pay on ${payBillSystem} from ${accno} at ${new Date()}
    </div>
    `
    // 4 - history-container e new div append korbo
    history.append(newHistory)
  } else {
    alert('Invalid Pin')
    return
  }
})