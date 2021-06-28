import { Maskify } from "./SecondaryFuntions.js"
export const errorMessage = () => {
    // swal ( "Tarjeta Inválida" ,  "Por favor revisa tus datos para continuar con la compra",  "error" )
    swal({
        title: "Tarjéta Inválida",
        text: "Por favor revisa tus datos para continuar con la compra",
        icon: "error",
    })
}

export const succesMessage = (arrayCard, userName) => {
    // swal ( `Su tarjeta ${Maskify(arrayCard)} es válida.`,`Gracias ${userName}, Tu compra se ha realizado`,  "success" )
    swal({
        title: `Su tarjeta ${Maskify(arrayCard)} es válida.`,
        text: `Gracias ${userName}, Tu compra se ha realizado`,
        icon: "info",
    })
}