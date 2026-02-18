// console.log('File Connected');
document.querySelector('#login-btn').addEventListener('click', () => {
  // console.log('Log in Button connected');
  // 1 - get the mobile number from input
  const numberInput = document.querySelector('#input-number')
  const contactNumber = numberInput.value
  console.log(contactNumber);
  // 2 - get the pin from input
  const pinInput = document.querySelector('#input-pin')
  const pin = pinInput.value
  console.log(pin);
  // 3 - match mobile number and pin
  if (contactNumber == '01688112415' && pin == '4433') {
    // match:: true >> alert>homepage
    alert('Login Successfully')
    // window.location.replace('./home.html') -> eita browser er history te add korbe nah
    window.location.assign('./home.html') // eita browser er history te add korbe
  } else {
    // match:: false >> return
    alert('Login Failed')
    return
  }
})