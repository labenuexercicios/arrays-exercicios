const arrayNumeros = [2, 4, 8, 10]


const arrayGames = ["Uncharted", "FallGuys", "Sekiro"];


const arrayMisto = ["AmongUs", "DevilMayCry", 15, 20, true, false];


const arrayNumerosCopia = arrayNumeros.slice()
arrayNumerosCopia.push(25);
console.log(arrayNumerosCopia, arrayNumeros) 


const arrayGamesCopia = arrayGames.slice()
arrayGamesCopia.pop()
console.log(arrayGamesCopia, arrayGames)

const arrayMistoCopia = arrayMisto.slice()
arrayMistoCopia.splice(1,1);
console.log(arrayMistoCopia, arrayMisto)

