var registered_user = [] // snake case
var registeredUser = [] // camel case rekomendasi pemakaian
var REGISTEREDUSER = [] // uppercase
var registereduser = [] // lowercase
// jenis variable VAR, LET, CONST
// VAR - obselete, jangkauan menjadi global, redeclare dan hoisting (mengassign yang belum dideclare)
// LET - tidak bisa redeclare dan hoisting, jangkauan tidak global
let testing = 'test'

function testfun () {
    let testing = 'test test'

    return testing = 'test'
}

console.log{test}

// CON - seperti LET tidak bisa reassignment, dipakai untuk nilai yang tidak akan berubah

// contoh
const bioskop1 = 'Bioskop 1'
const bioskop2 = 'Bioskop 2'
const bioskop3 = 'Bioskop 3'

console.log(bioskop1, bioskop2)

//nilai tipe, TIPE DATA = TIPE PRIMITIF, NON PRIMITIF'
//PRIMITIF
'string' // tipe data yang menyimpan karakter '', "",  ``
123 //number
true //boolean
undefined
null;

//NON PRIMITIF
[] //array
{} //object

const test = [123]

//bisa
test.push{456}

//tidak bisa
test = [123, 456]

console.log{test}

//string
const nama = 'Adi'



//replace = mengganti karakter yang diinginkan yang sama
//replaceALL =
//Length
//trim = hanya menghapus white space awal dan akhir
//fungsi helper 
//helper yang sering dipakai
//.length
//.include{}
//.split{} 
//.slice{}
//.replace
//.replaceALL
//.substring

//NUMBER
//NaN proses konversi number eror
console.log(1+2)

console.log(Number('123')) // mengubah string menjadi number

//konversi number menjadi string

const nomor = 123
console.log(nomor.toString() + 111)

//INFINITY = value

//BOOLEAN tipe DATA True or False
//OPERATOR ARITMATIKA 
// + - * ? %

//OPERATOR KOMPARASI
// == sama dengan
// != tidak sama dengan
// >= lebih besar atau sama dengan
// <= lebih kecil atau sama dengan
// > lebih besar
// < lebih kecil
// || or
// && and



const nomorA = 123
const NomorB = 456

const hasil = nomorA == NomorB
console.log(hasil)
//false

const hasil = nomorA != NomorB
console.log(hasil)
//true




// !== tidak sama dengan tapi strict
// === sama dengan tapi strict

const nomorA = 123
const NomorB = 456

const boolean = null === undefined
console.log(boolean)
//true

const boolean = '123' === 123
console.log(boolean)

// GERBANG LOGIKA
// OR ||
// and &&

true && true
true && false 
false && true 
false && false

true || true
true || false 
false || true 
false || false

//OBJECT
const adi = {
    nama: 'Adi',
    tinggi: 160,
}

const dwi = {
    nama: 'Dwi',
    tinggi: 165,
}

//array of object

let koleksiUser = [Adi, Dwi]


//ARRAY - koleksi banyak nilai- 1 variabel menyimpan banyak nilaity
let nilaiGenap = [2, 4, 6, 8, 10]
let nilaiGanjil = [1, 3, 5, 7, 9]

//CEK TIPE DATA JS

console.log(typeof adi)
console.log(construtor adi)

//MATH.RANDOM

//FUNGSI WAKTU
const now = new Date();


//FUNCTION
//VARIABLE - PERCABANGAN - PERULANGAN - FUNGSI
// ADVANCE - OOP - CLASS & OBJECT

//FUNCTION IN JS - formula yang ada didlam bahasa pemrograman

// input - output (opsional) proses (mandatory)

function incrementByOne(x){
    return x+1
}

incrementByOne(10)

//parameter adalah data inout
//procedure - kode yang akan dieksekusi
//return - output dari suatu formula

// v=pxlxt

function hitungVolume(panjang, lebar, tinggi){
    const volume =  panjang * lebar * Tinggi

    return volume
}


const panjang = 10
const lebar = 20
const tinggi = 30
const hasil = hitungVolume(panjang, lebar, tinggi)

console.log(hasil)

//input: Adi
//output : FSW 

function formatNama(nama){
    const hasil = `FSW - ${nama}`

return hasil
}

const formatAdi = formatNama ('Adi JH')
console.log(formatAdi)

//input : Nama 
// output = Kelas 

function formatNama(nama){
    const hasil = `${nama} - Kelas 9`

return hasil
}

const formatKelas1 = formatNama ('Adi JH')
const formatKelas2 = formatNama ('Budi W')
const formatKelas3 = formatNama ('Diah A')

console.log(formatkelas1)
console.log(formatkelas2)
console.log(formatkelas1)


//metode deklarasi


//arrow funcion - deklarasi fungsi
const arrow = () => {
    return 'ini test arrow'
}

const arrowDua = () => 'ini test arrow 2'

console.log(arrow())
console.log(arrowDua())







