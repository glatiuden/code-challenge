function requestOTP() {
  alert("OTP sent to your mobile number");
}

function sendTokens() {
  alert("Your transaction has been submitted!");
}

function copyAddress() {
  const copyText = document.getElementById("input-my-address");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value).then(function (x) {
    alert("Address copied to clipboard: " + copyText.value);
  });
}
