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

export const hideWindow = (win) => {
    if (win.classList.contains("hidden")) {
        win.classList.remove("hidden")
    } else {
        win.classList.add("hidden")
    }
}

export const errorMessage = () => {
    swal({
        title: "Tarjéta Inválida",
        text: "Por favor revisa tus datos para continuar con la compra",
        icon: "error",
    })
}

export const succesMessage = (arrayCard, userName, win) => {
    swal({
        title: `Su tarjeta ${Maskify(arrayCard)} es válida.`,
        text: `Gracias ${userName}, Tu compra se ha realizado exitosamente, disfruta de los servicios que te ofrece Batatabit.`,
        icon: "success",
    }).then(() => {
        setTimeout(() => {
            hideWindow(win)
        }, 500)
    })
}