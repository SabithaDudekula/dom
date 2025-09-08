function Total() {
    let thousand = document.getElementById('thousand').value;
    let fiveHundred = document.getElementById('fiveHundred').value;
    let hundred = document.getElementById('hundred').value;
    let totalAmount = (thousand * 1000) + (fiveHundred * 500) + (hundred * 100);

    if (thousand == "") { thousand = 0; }
    if (fiveHundred == "") { fiveHundred = 0; }
    if (hundred == "") { hundred = 0; }


    document.getElementById('totalText').textContent = "Total Amount: Rs " + totalAmount;
}

document.getElementById('btnTotal').onclick = Total;
