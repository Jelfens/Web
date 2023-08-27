function topla(x, y) {
  return x + y;
}
//topla2 sadece sayı değerleri alıp sayı değerleri dönebilir.
function topla2(x: number, y: number): number {
  return x + y;
}

let topla3 = function (x: number, y: number): number {
  return x + y;
};

console.log(topla(2, 3));
console.log(topla("Ankara", 2));
console.log(topla2(2, 4));
console.log(topla3(4, 8));

//ikinci girdiye default değer vermek
function topla4(x: number, y: number = 4): number {
  return x + y;
}

console.log(topla4(3));

//default değer hep en sonda olmalıdır.
function topla5(x: number, y?: number): number {
  if (y) {
    return x + y;
  }
  return x;
}

console.log(topla5(3, 40));

function davetEt(...digerleri: string[]) {
  return digerleri.join(" ");
}

console.log(davetEt("Abdulkadir", "Züleyha", "Kenan", "Ayşe"))
