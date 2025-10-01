function konversiSuhu(nilai, jenis) {
    let hasil;

    switch (jenis) {
        case "C/F": // Celsius ke Fahrenheit
            hasil = (nilai * 9 / 5) + 32;
            break;

        case "C/R": // Celsius ke Reamur
            hasil = nilai * 4 / 5;
            break;

        case "F/C": // Fahrenheit ke Celsius
            hasil = (nilai - 32) * 5 / 9;
            break;

        case "F/R": // Fahrenheit ke Reamur
            hasil = (nilai - 32) * 4 / 9;
            break;

        case "R/C": // Reamur ke Celsius
            hasil = nilai * 5 / 4;
            break;

        case "R/F": // Reamur ke Fahrenheit
            hasil = (nilai * 9 / 4) + 32;
            break;

        default:
            hasil = "Jenis konversi tidak valid";
    }

    return hasil;
}

function mulaiKonversi() {
    let nilai = parseFloat(document.getElementById("suhu").value);
    let jenis = document.getElementById("konver").value;

    if (isNaN(nilai)) {
        document.getElementById("hasilKonver").innerHTML = "❌ Masukkan angka yang valid.";
        return;
    }

    let hasil = konversiSuhu(nilai, jenis);

    document.getElementById("hasilKonver").innerHTML = 
        `<b>${nilai}</b> dikonversi (${jenis}) = <b>${hasil.toFixed(2)}</b>`;
}
