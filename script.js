document.getElementById("btn-login").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("clicked");

  const phnNumber = document.getElementById("phn-number").value;
  console.log(phnNumber);
});
