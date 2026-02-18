console.log("Machine Added");

function getValueFromInput(id) {
  const input = document.querySelector(`#${id}`);
  const value = input.value;
  console.log(id, value);
  return value;
}

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
  const balanceElement = document.querySelector("#balance");
  const balance = balanceElement.textContent;
  console.log(balance);

  // 4 - calculate Balance
  const newBalance = Number(balance) - Number(cashoutAmount);
  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }
  // 5 - get the pin
  const pin = getValueFromInput("cashout-pin");
  if (pin == "4433") {
    alert("Cashout Succeddfully");
    balanceElement.textContent = newBalance;
  } else {
    alert("Invalid Amount");
    return;
  }
});
