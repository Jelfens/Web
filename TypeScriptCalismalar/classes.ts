class Ev {
   odaSayisi: number;
  pencereSayisi: number;
  kat: number;
  constructor(odaSayisi: number, pencereSayisi: number, kat: number) {
    this.odaSayisi = odaSayisi;
    this.pencereSayisi = pencereSayisi;
    this.kat = kat;
  }
  yemekYe() {
    console.log(this.kat + " katlı evde " + "Yemek Yiyildi.");
  }
}

let ev = new Ev(3, 4, 5);
ev.yemekYe();
console.log(ev.kat);

class Kisi {
    private isim:string

    get gs_isim():string{
        return "Sayın " + this.isim
    }
    set gs_isim(isim:string){
        this.isim=isim
    }
    kaydet() {
    console.log("Kişi Kaydedildi.");
  }
}

class Musteri extends Kisi{
    satisYap(){
        console.log("Satış Yapıldı.")
    }
}

class Personel extends Kisi{
    maasOde(){
        console.log("Maaş Ödendi.")
    }
}

let musteri = new Musteri()
musteri.gs_isim="Abdulkadir"
console.log(musteri.gs_isim)
musteri.kaydet();
musteri.satisYap();

let personel = new Personel();
personel.kaydet();
personel.maasOde()


