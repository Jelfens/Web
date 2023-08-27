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
