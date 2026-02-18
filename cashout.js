document.querySelector("#cashout-btn").addEventListener("click", () => {
  // 1 - get the agent number and validate
  const cashoutNumber = getValueFromInput("cashout-number");
  if (cashoutNumber.length != 11) {
    alert("Invalid Cashout Number");
    return;
  }
  // 2 - get the amount and Validate
  const cashoutAmount = getValueFromInput("cashout-amount");
  // 3 - get the Current Balance
  const currentBalance = getBalance()
  console.log(currentBalance);

  // 4 - calculate Balance
  const newBalance = currentBalance - Number(cashoutAmount);
  console.log(newBalance);
  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }
  // 5 - get the pin
  const pin = getValueFromInput("cashout-pin");
  if (pin == "4433") {
    alert("Cashout Succeddfully");
    // document.querySelector('#balance').textContent = newBalance;
    setBalance(newBalance)
    // 1 - history-container ke dhore niye ashbo
    const history = document.querySelector("#history-container")
    // 2 - new div create korbo
    const newHistory = document.createElement('div')
    // 3 - new div e innerHTML add korbo
    newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-100 mb-3">
    Cashout  ${cashoutAmount} TK suceess to ${cashoutNumber} at ${new Date()}
    </div>
    `
    // 4 - history-container e new div append korbo
    history.append(newHistory)
  } else {
    alert("Invalid Amount");
    return;
  }
});



// document.querySelector('#cashout-btn').addEventListener('click', () => {
//   // console.log('Working');
//   // 1 - get the agent number and validate
//   const cashoutNumberInput = document.querySelector("#cashout-number")
//   const cashoutNumber = cashoutNumberInput.value
//   if (cashoutNumber.length != 11) {
//     alert('Invalid Agent Number')
//     return
//   }
//   console.log(cashoutNumber);
//   // 2 - get the amount , validate, convert to Number
//   const cashoutAmountInput = document.querySelector("#cashout-amount")
//   const cashoutAmount = cashoutAmountInput.value
//   console.log(cashoutAmount);
//   // 3 - get the Current Balance , validate, convert to Number
//   const balanceElement = document.querySelector("#balance")
//   const balance = balanceElement.textContent
//   // 4 - calculate new Balance
//   const newBalance = Number(balance) - Number(cashoutAmount)
//   if (newBalance < 0) {
//     alert('Invalid Amount')
//     return
//   }
//   console.log(newBalance);
//   // 5 - Get the pin and verify
//   const cashoutPinInput = document.querySelector("#cashout-pin")
//   const pin = cashoutPinInput.value
//   if (pin == '4433') {
//     // 5 :: true >> show an alert set new balance
//     alert('Cashout Successfully')
//     balanceElement.textContent = newBalance
//   } else {
//     // 5 :: false >> show an error alert > return
//     alert('Invalid Pin')
//     return
//   }
// })