function selamVer(isim: string) {
  return "Merhaba " + isim;
}

let mesaj = selamVer("Abdulkadir 2");

console.log(mesaj);

let sayi: number = 19;

sayi = 10;
sayi = 10.4;

let sehir: string = "Mersin";

sehir = "Ankara";
sehir = "İstanbul";

let dogruMu: boolean = true;

dogruMu = true;
dogruMu = false;

let sayilar: number[] = [1, 2, 3];

let sayilar2: Array<number> = [2, 3, 5];

let dizi: [number, string] = [2, "Ankara"];

enum Renk {
  Kirmizi = 1,
  Siyah,
  Mavi,
}
let renk: Renk = Renk.Kirmizi;

let deger: any = "Ankara";
deger = 2;
deger = {};

let deger2: void = undefined;

function selamVer2(): void {
  console.log("Merhabaa");
}

//undefined null 

let yas : number;
yas = 10

//Referansı yoksa NULL dır. Değeri yoksa undefined(tanımlanmamış)'tır.
class Musteri {
    
}