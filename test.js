//arrow funcion - deklarasi fungsi
const arrow = () => {
    return 'ini test arrow'
}

const arrowDua = () => 'ini test arrow 2'

console.log(arrow())
console.log(arrowDua())

//

const rumusKubus = (sikuSiku) => {
    if (isNaN(sikuSiku)) {
        return "Input is not a valid number.";
    }
    return sikuSiku * sikuSiku * sikuSiku;
}

const sikuSiku = Number(6);

console.log(rumusKubus(sikuSiku));

//
let x = 'sapi';
let y = 'kerbau';

function jenisHewan(x, y) {
    if (x = 'sapi') {
        return true;
    } else {
        return false;
    }
}
}

const jenisHewan1 = jenisHewan('kerbau');

console.log('Hewan 1', jenisHewan1,);

//hasil: hewan 1 false