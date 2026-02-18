console.log("Machine Added");




// CashOut Section
// machine id -> input value
function getValueFromInput(id) {
  const input = document.querySelector(`#${id}`);
  const value = input.value;
  console.log(id, value);
  return value;
}

// machine -> balance
function getBalance() {
  const balanceElement = document.querySelector("#balance")
  const balance = balanceElement.textContent
  console.log(`Current Balance : ${Number(balance)}`);
  return Number(balance)
}

// machine value -> set VAlue
function setBalance(value) {
  const balanceElement = document.querySelector("#balance")
  balanceElement.textContent = value
}
