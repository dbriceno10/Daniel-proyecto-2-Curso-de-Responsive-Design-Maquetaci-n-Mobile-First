import  { SumArray, ReduceArray, LongCardNumber, Maskify } from "./SecondaryFuntions.js"
const card_string ="4137894711755904";
const card_string2 = "4095571174987314";
const card_string3 = "5117444488188614";
const card_string4 = "6165397064636554";
const card_string5 = "4083952015273";


const CardValidator = (digit) => {
    const arrayCard = digit.split("")
    const long = LongCardNumber(digit)
    if (!long) {
        alert(`Tarjeta Inválida`)
    } else {
        const ValidDigit = LunhAlgorithm(arrayCard)
        if ((ValidDigit % 10 === 0) && long) {
            alert(`Su tarjeta ${Maskify(arrayCard)} es válida.`)
        } else {
            alert(`Tarjeta Inválida`)
        }
    }
}
const LunhAlgorithm = (arrayCard) => {
    let arrayAux = []
    for(let i = 0; i < arrayCard.length; i++) {
        const mod = i % 2
        const mult = 2 * (arrayCard[i])
        const sum = SumArray(mult)

        if (mod === 0 && mult >= 10) {
            arrayAux [i] = sum.toString()
        } else if (mod === 0 && mult < 10) {
            arrayAux [i] = mult.toString()
        } else {
            arrayAux [i] = arrayCard [i]
        }
    }
    const ValidDigit = arrayAux.reduce(ReduceArray, 0)
    console.log(ValidDigit)
    return ValidDigit
}
// const valid1 = CardValidator(card_string)
// console.log("tarjeta 1" + card_string)

// const valid2 = CardValidator(card_string2)
// console.log("tarjeta 2" + card_string2)

// const valid3 = CardValidator(card_string3)
// console.log("tarjeta 3" + card_string3)

// const valid4 = CardValidator(card_string4)
// console.log("tarjeta 4" + card_string4)

// const valid5 = CardValidator(card_string5)
// console.log("tarjeta 5" + card_string5)