export const SumArray = (digit) => {//función que toma un número y suma todas sus cifras
    let arr = [];
    let n = digit.toString();
    arr = n.split("");
    return arr.reduce((acum,val) => acum = acum + parseInt(val),0);
}

export const ReduceArray = (acum,val) => {
    return acum + parseInt(val)
}

export const LongCardNumber = (number) => {
    const long = number.length
    if ((long < 13) || (long > 19)) {
        return false
    } else {
        return true
    }
}

export const Maskify = (array) => {
    const arr1 = array.slice("")//hacemos una copia de array en arr1, de esta manera array no será modificado
    const arr2 = []
    for (let i = 0; i < array.length -4; i++) {
        arr2[i] = "#"
        arr1[i] = arr2[i]
    }
    const maski = arr1.reduce((acum, val) => acum + val)
    return maski
}
