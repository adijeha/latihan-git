const jumlahLantai = 11;

// Langkah awal
console.log('Mengambil alat-alat pel');
console.log();

// Looping lantai ganjil
for (let i = 1; i <= jumlahLantai; i = i + 1) {
  if (i % 2 === 0) {
    console.log('Lantai ' + i + ' Tidak Perlu di Pel');
  } else {
    console.log('Mencuci kain pel di lantai:', i);
    console.log('Memeras kain pel di lantai:', i);
    console.log('Mengepel semua bagian lantai:', i);
    if (i < jumlahLantai - 1) {
      console.log('Pindah ke lantai', i + 2);
    }
  }
  console.log();
}

console.log('Ngepel selesai');
