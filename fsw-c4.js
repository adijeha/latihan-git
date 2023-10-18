//comparison > proses untuk membandingan satu data dengan data lainnya- tipe data true/false (boelean)

null == undefined
//true

const hasilTahmbah = 1 + 2;

const hasilComp = (1==2)
const hasilComp1 = (1+1==2)

console.log('hasilnya adalah:', hasilComp)
console.log('hasilnya adalah:', hasilComp1)


//gerbang logika= hanya bisa dipake boelean
//gerbang and && 
// true jika semua nilai yang dicompare semua truec

const gerbangAnd = true && true

console.log('gerbang and', gerbangAnd)


//gerbang || or-  comparison pembandinkan 2 bilangan dengan logika or
// true, jika salah satu nilai yang dicompare ada true
//false, jika tidak ada yang true

const gerbangOr = true || false

console.log('gerbang or', gerbangOr)

//gerbang logika not/negasi (!)
// jika true maka false, begitu juga sebaliknya

const gerbangNot= !true

console.log('gerbang not', gerbangNot)

//contoh
const perbandinganAnd = (1==2) && (1<2)
const perbandinganOr = (1==2) || (1<3)
const perbandinganNot = !(2+2==4 && 1<2)

console.log('hasilnya adalah:', 'Untuk And', perbandinganAnd, 'Untuk Or', perbandinganOr, 'untuk Not', perbandinganNot)
//

let x = 'sapi';
let y = 'kerbau';

function jenisHewan(x, y) {
    if (x === 'sapi') {
        return true;
    } else {
        return false;
    }
}

const jenisHewan1 = jenisHewan('kerbau');
const jenisHewan2 = jenisHewan('sapi','kerbau')

console.log('Hewan 1', jenisHewan1);
console.log('Hewan 2', jenisHewan2);

//proses komparasi bisa lebih dari 2 dengan satu-satu eksekusi dari kiri ke kanan
//logical condition
//looping

//Percabangan
//penuslisan sintax

const argumentCLI = process.argv;

const userName = process.argv[2];
const userPass = process.argv[3];

const passwordUser = '123123';
const userNameUser = 'adi';

const berhasilLogin = userName === userNameUser && userPass === passwordUser;

// berhasil
if (berhasilLogin) {
    console.log('INI DASHBOARD');
}

// gagal
if (!berhasilLogin) {
    console.log('GAGAL LOGIN');
}




