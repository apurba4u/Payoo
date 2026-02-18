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

// machine id > hide all > show that id
function showOnly(id) {
  const addMoney = document.querySelector("#add-money")
  const cashout = document.querySelector("#cashout")
  
  // shobai k hide kore dao
  addMoney.classList.add('hidden')
  cashout.classList.add('hidden')

  // id wala ta ke show koro tumi
  const selected = document.querySelector(`#${id}`);
  selected.classList.remove('hidden')
}