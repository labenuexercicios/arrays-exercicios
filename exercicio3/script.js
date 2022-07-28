const arrayNumeros = [2, 23, 78, 33, 22]
const arrayStrings = ["Array", "é legal", "só formular", "e fazer com calma"]
const arrayAleatorio = [6, "Sucesso", true]

const arrayNumerosCopia = (arrayNumeros.slice())
const arrayStringsCopia = (arrayStrings.slice())
const arrayAleatorioCopia = (arrayAleatorio.slice())

arrayNumerosCopia.push(8)
console.log ("original", arrayNumeros, arrayNumerosCopia, "cópia")

arrayStringsCopia.pop()
console.log ("com o ultimo caractere", arrayStrings, arrayStringsCopia, "sem o ultimo número")

arrayAleatorioCopia.splice(2, 1)
console.log ("com o segundo caractere", arrayAleatorio, arrayAleatorioCopia, "sem o segundo caractere")