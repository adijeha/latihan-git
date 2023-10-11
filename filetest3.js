//input: nama
//output: nama + kelas

function formatNama(nama, kota){
    const hasil = `Nama Siswa: ${nama} - Kelas 9 - ${kota}`

return hasil
}


const formatKelas1 = formatNama ('Adi JH', 'Malang')
const formatKelas2 = formatNama ('Budi W', 'Jakarta')
const formatKelas3 = formatNama ('Dwi A', 'Aceh')


console.log(formatKelas1)
console.log(formatKelas2)
console.log(formatKelas3)