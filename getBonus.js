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
    <div class="transaction-card p-5 bg-base-100 mb-3 flex items-center">
      <img src="./assets/opt-4.png" class="w-10 h-10 mr-2">
      <div>
        <h2 class="font-semibold text-[#080808b3]">Get ${couponValue}% increment</h2>
        <h4 class="text-[#080808b3] font-[12px]">${getCurrentTime()}</h4>
      </div>
      <i class="fa-solid fa-ellipsis rotate-90 ml-40 mr-5"></i>
    </div>
    `
    // 4 - history-container e new div append korbo
    history.append(newHistory)
})