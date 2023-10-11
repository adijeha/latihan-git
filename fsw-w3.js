const rumusKubus = (sikuSiku) =>{
    return  sikuSiku * sikuSiku * sikuSiku
}

const sikuSiku = Number(process.argv[2])
console.log(rumusKubus(sikuSiku))
