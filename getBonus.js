document.querySelector("#get-bonus-btn").addEventListener('click', () => {
  // 1 - get Bonus value
  const getCoupon = getValueFromInput('get-bonus-number');

  const couponValue = bonusCoupon(getCoupon);

  if (couponValue === "Wrong Value") {
    alert('Put Valid Input');
    return;
  }

  // 1 + (bonus / 100) → multiplier
  const multiplier = 1 + couponValue / 100;

  const currentBalance = getBalance();

  // Optional: 2 decimal পর্যন্ত round করতে চাইলে
  const newBalance = Math.round(currentBalance * multiplier);
  setBalance(newBalance);
  const history = document.querySelector("#history-container")
    // 2 - new div create korbo
    const newHistory = document.createElement('div')
    // 3 - new div e innerHTML add korbo
    newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-100 mb-3">
    ${getCoupon} successfully apply ,
    new Balance is ${newBalance}
    </div>
    `
    // 4 - history-container e new div append korbo
    history.append(newHistory)
})