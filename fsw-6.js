//pertemuan ke 6 - GIT

const rumusVolumeBalok = (p, l, t) => {
    return p * l * t
}

console.log(rumusVolumeBalok(3, 2, 2))

//

const rumusKubus = (sikuSiku) =>{
    return  sikuSiku * sikuSiku * sikuSiku
}

const sikuSiku = Number(process.argv[2])
console.log(rumusKubus(sikuSiku))


//menyimpan perubahan temporary sebelum di commit -> adanya di lokal

//git conflict

//

// Declare and initialize variables
let x = 2;
let y = 3;
let z = 10;

// Define a function called `iniTambahan`
function iniTambahan(x, y, z) {
    if (x * z <= 6) {
        return false;
    } else {
        return true;
    }
}

// Call the `iniTambahan` function with arguments
const result = iniTambahan(x, y, z);

// Log the result to the console
console.log(result);



