function calculate() {
  let members = document.getElementById("members").value;
  let totalCars = Math.ceil(members / 5); // round up for leftover members
  document.getElementById("result").innerText = "Cars required: " + totalCars;
}
