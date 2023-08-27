abstract class KrediBase {
    constructor(){

    }
  kaydet(): void {
    console.log("Kaydedildi.");
  }
  abstract hesapla(): void;
}

class TuketiciKredisi extends KrediBase{
    constructor(){
        super();
    }
    hesapla(): void {
        console.log("Tüketici kredisine göre hesaplandı.")
    }
}

class MortgageKredisi extends KrediBase{
    constructor(){
        super();
    }
    hesapla(): void {
        console.log("Mortgage kredisine göre hesaplandı.")
    }
}

let tuketiciKredisi = new TuketiciKredisi()
tuketiciKredisi.hesapla();
tuketiciKredisi.kaydet();

let mortgageKredisi = new MortgageKredisi()
mortgageKredisi.hesapla();
mortgageKredisi.kaydet();

let kredi : KrediBase
kredi = new TuketiciKredisi()

kredi = new MortgageKredisi()