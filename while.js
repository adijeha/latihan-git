let aturWhile = true
let patokan= 1;
const limitIterasi= 5;

while (aturWhile) {
    console.log('di iterasi ke', patokan)

    patokan = patokan + 1
    aturWhile = patokan <= limitIterasi

    console.log('iterasi selanjutnya', patokan)
    console.log('lanjut iterasi?', aturWhile)
}


//if - menjalan kode jika boelan - true

//while - menjalan selama parameter true

// Langkah awal
console.log('Mengambil alat-alat pel');
console.log();


let patokan = 1;
const jumlahLantai = 10;

// Looping lantai genap
while (patokan <= jumlahLantai) {
  if (patokan % 2 === 1) {
    console.log('Lantai ' + patokan + ' Tidak perlu di Pel');
  } else {
    console.log('Mencuci kain pel di lantai:', patokan);
    console.log('Memeras kain pel di lantai:', patokan);
    console.log('Mengepel semua bagian lantai:', patokan);

    if (patokan < jumlahLantai - 1) {
      console.log('Pindah ke lantai', patokan + 2);
    }
  }
  console.log();
  patokan++;
}

console.log('Ngepel selesai');

