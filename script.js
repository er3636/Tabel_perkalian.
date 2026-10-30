function buatTabel () {
    const hasil = document.getElementById("hasil");
    let input = document.getElementById("angka").value;
    let angka = Number (document.getElementById("angka").value);

    if (input === "") {
        hasil.innerHTML = "Silahkan masukkan angka terlebih dahulu!";
        return;
    }

    let teks = "";
    let batas = Number(document.getElementById("batas").value) || 10; // Default to 10 if not provided

    for (let i = 1; i <= batas; i++) {
        
        teks += angka + " x " + i + " = " + (angka * i) + "<br>";
    }
     document.getElementById("hasil").innerHTML = teks;
}

function faktorial(n) {
    let hasil = 1;
    for (let i = 1; i <= n; i++) {
        hasil *= i;
    }
    return hasil;

}

console.log(faktorial(5)); // Output: 120