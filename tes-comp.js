

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

console.log('Hewan 1', jenisHewan1);

//

const perbandinganAnd = (1==2) && (1<2)
const perbandinganOr = (1==2) || (1<3)
const perbandinganNot = !(2+2==4 && 1<2)

console.log('hasilnya adalah:', 'Untuk And', perbandinganAnd, 'Untuk Or', perbandinganOr, 'untuk Not', perbandinganNot)

