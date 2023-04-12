document.getElementById("submit1").addEventListener("click", () => {
  const xhttp = new XMLHttpRequest();
  console.log("0");
  xhttp.onload = function () {
    console.log("1");
    console.log(this.responseText);
    document.getElementById("displayBox").innerHTML = " " + this.responseText;
  };
  xhttp.open("GET", "demo.php");
  console.log("2");
  xhttp.send();
});
