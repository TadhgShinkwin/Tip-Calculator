function calculateTip() {
  var billAmt = document.getElementById("billamt").value;
  var qual = document.getElementById("quality").value;
  var numPeop = document.getElementById("amtpeople").value;

  if (billAmt === "" || qual == 0) {
    alert("Please enter values");
    return;
  }
  if (numPeop === "" || numPeop <= 1) {
    numPeop = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block"; //only display 'each' if more than 1 person
  }

  var total = (billAmt * qual) / numPeop;
  total = Math.round(total * 100) / 100; //round to two decimal places
  total = total.toFixed(2); //always have two decimal places

  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}

//hide tip and each on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("calc").onclick = function() {
  calculateTip();
};

document.getElementById("reset").onclick = function() {
  document.getElementById("amtpeople").value = "";
  document.getElementById("totalTip").style.display = "none";
  document.getElementById("tipForm").reset();
};
