function Tableprint() {
    
    let a = parseInt(document.getElementById("TB1").value);
    
    document.getElementById("Para").innerHTML = "";


    for (let i = 1; i <= 10; i++) 
        document.getElementById("Para").innerHTML += `${a} x ${i} = ${a * i}<br>`;
}