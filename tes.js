// Langkah awal
console.log('Mengambil alat-alat pel dan sapu');
console.log();

let patokan = 1;
const jumlahLantai = 10;

// lantai ganjil disapu, genap dipel
do {
    if (patokan % 2 === 1) {
        console.log('Lantai ' + patokan + ' disapu');
        if (patokan < jumlahLantai) {
            console.log('Pindah ke lantai ' + (patokan + 1));
        }
    } else {
        console.log('Lantai ' + patokan + ' dipel');
 
        if (patokan < jumlahLantai) {
            console.log('Pindah ke lantai ' + (patokan + 1));
        }
    }
    console.log();
    patokan++;
}
while (patokan <= jumlahLantai);

console.log('Ngepel dan Nyapu selesai');
