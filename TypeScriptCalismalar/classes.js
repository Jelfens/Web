var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ev = /** @class */ (function () {
    function Ev(odaSayisi, pencereSayisi, kat) {
        this.odaSayisi = odaSayisi;
        this.pencereSayisi = pencereSayisi;
        this.kat = kat;
    }
    Ev.prototype.yemekYe = function () {
        console.log(this.kat + " katlı evde " + "Yemek Yiyildi.");
    };
    return Ev;
}());
var ev = new Ev(3, 4, 5);
ev.yemekYe();
console.log(ev.kat);
var Kisi = /** @class */ (function () {
    function Kisi() {
    }
    Object.defineProperty(Kisi.prototype, "gs_isim", {
        get: function () {
            return "Sayın " + this.isim;
        },
        set: function (isim) {
            this.isim = isim;
        },
        enumerable: false,
        configurable: true
    });
    Kisi.prototype.kaydet = function () {
        console.log("Kişi Kaydedildi.");
    };
    return Kisi;
}());
var Musteri = /** @class */ (function (_super) {
    __extends(Musteri, _super);
    function Musteri() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Musteri.prototype.satisYap = function () {
        console.log("Satış Yapıldı.");
    };
    return Musteri;
}(Kisi));
var Personel = /** @class */ (function (_super) {
    __extends(Personel, _super);
    function Personel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Personel.prototype.maasOde = function () {
        console.log("Maaş Ödendi.");
    };
    return Personel;
}(Kisi));
var musteri = new Musteri();
musteri.gs_isim = "Abdulkadir";
console.log(musteri.gs_isim);
musteri.kaydet();
musteri.satisYap();
var personel = new Personel();
personel.kaydet();
personel.maasOde();
