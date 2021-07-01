import  { SumArray, ReduceArray, LongCardNumber, hideWindow, succesMessage, errorMessage } from "./SecondaryFuntions.js"

const p1 = document.getElementById("p1")
const p2 = document.getElementById("p2")
const p3 = document.getElementById("p3")
const win = document.getElementById("valid_form")

p1.addEventListener("click", () => {
    hideWindow(win)
})
p2.addEventListener("click", () => {
    hideWindow(win)
})
p3.addEventListener("click", () => {
    hideWindow(win)
})
const btn = document.getElementById("validate")
btn.addEventListener("click", (e) => {
    e.preventDefault()
    const n = document.getElementById("number_card")
    const n2 = n.value.toString()
    const u = document.getElementById("name_user")
    const u2 = u.value.toString()
    CardValidator(n2, u2)
})

const CardValidator = (digit, userName) => {
    const arrayCard = digit.split("")
    const long = LongCardNumber(digit)
    if (!long) {
        errorMessage()
    } else {
        const ValidDigit = LunhAlgorithm(arrayCard)
        if ((ValidDigit % 10 === 0) && long) {
            succesMessage(arrayCard, userName, win)
        } else {
            errorMessage()
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

// const card_string ="4137894711755904";
// const card_string2 = "4095571174987314";
// const card_string3 = "5117444488188614";
// const card_string4 = "6165397064636554";
// const card_string5 = "4083952015273";