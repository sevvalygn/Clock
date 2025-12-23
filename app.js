let isim = prompt("İsminizi giriniz:");

if (isim && isim.trim() !== "") {
    document.getElementById("myName").innerText = isim;
} else {
    document.getElementById("myName").innerText = "Misafir";
}

function selamlamaYap(saat) {
    if (saat >= 6 && saat < 12) {
        return "Günaydın ☀️";
    } else if (saat >= 12 && saat < 18) {
        return "İyi Günler 🌤️";
    } else {
        return "İyi Akşamlar 🌙";
    }
}

function showTime() {
    let now = new Date();

    let saat = now.getHours();
    let dakika = now.getMinutes();
    let saniye = now.getSeconds();

    let gunler = [
        "Pazar",
        "Pazartesi",
        "Salı",
        "Çarşamba",
        "Perşembe",
        "Cuma",
        "Cumartesi"
    ];

    let gun = gunler[now.getDay()];

    saat = saat < 10 ? "0" + saat : saat;
    dakika = dakika < 10 ? "0" + dakika : dakika;
    saniye = saniye < 10 ? "0" + saniye : saniye;

    // Saat + gün
    document.getElementById("myClock").innerText =
        `${saat}:${dakika}:${saniye} ${gun}`;

    // Selamlama
    document.getElementById("karsilama").innerText =
        selamlamaYap(parseInt(saat));
}

setInterval(showTime, 1000);
showTime();
