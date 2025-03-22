document.getElementById("btn-login").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("clicked");
  // get phone & Pin nmbr
  const phnNumber = document.getElementById("phn-number").value;
  const pinNumber = document.getElementById("pin-nmbr").value;
  console.log(phnNumber, pinNumber);
  if (phnNumber === "5" && pinNumber === "5") {
    // console.log("You are logged in");
    window.location.href = "/home.html";
  } else {
    alert("Wropng Pin or Phone Number");
  }
});
