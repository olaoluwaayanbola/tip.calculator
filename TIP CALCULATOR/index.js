const userBill = document.getElementById('userBill');
const NumberOfGuest = document.getElementById("NumberOfGuest");
const btn = document.getElementById("btn")

var value;
function tipc(x) {
     value = x.options[x.selectedIndex].value;
}
function t() { 
    var Bill = userBill.value
    var NoOfV = NumberOfGuest.value
    var Operation = (Bill/NoOfV)*(value/100)
    let Operations = Operation.toFixed(2)
    document.getElementById("ans").style.display = "block"
    document.getElementById("anss").innerHTML = "Tip is" +" "+"$"+ Operations + " " + "each"
    userBill.value = " "
    NumberOfGuest.value=" "
    value = " "
    if (Operations == "NaN") {
        document.getElementById("anss").innerHTML = "please select all fields"
    }
} 
btn.addEventListener("click",t)


