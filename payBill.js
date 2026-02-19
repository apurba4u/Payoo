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
    <div class="transaction-card p-5 bg-base-100 mb-3 flex items-center">
      <img src="./assets/opt-5.png" class="w-10 h-10 mr-2">
      <div>
        <h2 class="font-semibold text-[#080808b3]">${payBillSystem}</h2>
        <h4 class="text-[#080808b3] font-[12px]">${getCurrentTime()}</h4>
      </div>
      <i class="fa-solid fa-ellipsis rotate-90 ml-40 mr-5"></i>
    </div>
    `
    // 4 - history-container e new div append korbo
    history.append(newHistory)
  } else {
    alert('Invalid Pin')
    return
  }
})