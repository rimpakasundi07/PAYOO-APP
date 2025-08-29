// Loginbtn button funtionality
document.getElementById("Loginbtn").addEventListener("click", function (e) {
  e.preventDefault();
  const mobileNumber = 9654215965;
  const pinNumber = 1234;
  //mobile
  const mobileNumberValue = document.getElementById("mobile-number").value;
  const mobileNumberValueConverted = parseInt(mobileNumberValue);
  //pin
  const pinNumberValue = document.getElementById("pin-number").value;
  const pinNumberValueConverted = parseInt(pinNumberValue);
  // console.log(mobileNumberValueConverted, pinNumberValueConverted);

  if (
    mobileNumberValueConverted === mobileNumber &&
    pinNumberValueConverted === pinNumber
  ) {
    window.location.href = "./home.html";
  } else {
    alert("invalid credentials");
  }
});
