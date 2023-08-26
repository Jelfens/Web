function selamVer(isim) {
    return "Merhaba " + isim;
}
var mesaj = selamVer("Abdulkadir 2");
console.log(mesaj);
var sayi = 19;
sayi = 10;
sayi = 10.4;
var sehir = "Mersin";
sehir = "Ankara";
sehir = "İstanbul";
var dogruMu = true;
dogruMu = true;
dogruMu = false;
var sayilar = [1, 2, 3];
var sayilar2 = [2, 3, 5];
var dizi = [2, "Ankara"];
var Renk;
(function (Renk) {
    Renk[Renk["Kirmizi"] = 1] = "Kirmizi";
    Renk[Renk["Siyah"] = 2] = "Siyah";
    Renk[Renk["Mavi"] = 3] = "Mavi";
})(Renk || (Renk = {}));
var renk = Renk.Kirmizi;
var deger = "Ankara";
deger = 2;
deger = {};
var deger2 = undefined;
function selamVer2() {
    console.log("Merhabaa");
}
//undefined null 
var yas;
yas = 10;
//Referansı yoksa NULL dır. Değeri yoksa undefined(tanımlanmamış)'tır.
var Musteri = /** @class */ (function () {
    function Musteri() {
    }
    return Musteri;
}());
