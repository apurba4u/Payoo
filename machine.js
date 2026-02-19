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
  const history = document.querySelector("#history")
  const sendmoney = document.querySelector("#sendmoney")
  const getbonus = document.querySelector("#getbonus")
  const payBill = document.querySelector("#pay-bill")
  
  // shobai k hide kore dao
  addMoney.classList.add('hidden')
  cashout.classList.add('hidden')
  history.classList.add('hidden')
  getbonus.classList.add('hidden')
  sendmoney.classList.add('hidden')
  payBill.classList.add('hidden')

  // id wala ta ke show koro tumi
  const selected = document.querySelector(`#${id}`);
  selected.classList.remove('hidden')
}

function bonusCoupon(txt) {
  txt = txt.toLowerCase();

  if (txt.startsWith("ovi") && txt.length === 5) {
    return Number(txt.slice(3));   // last 2 digit
  }

  return "Wrong Value";
}
// get time and date
function getCurrentTime() {
  const now = new Date();
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });
  return `Today ${time}`;
}
