arrNmb = [3, 6, 8, 9, 12];
arrStr = ['Bolacha', 'Igreja', 'Livros', 'Amigos'];
arrAlt = [3, 'Olá', true]

console.log(arrNmb.length, arrStr.length, arrAlt.length)
console.log(arrNmb[0], arrStr[1], arrAlt[2])

let arr = arrNmb.includes(true)
console.log('O primeiro array tem o número 3? - ', arrNmb.includes(3), '|', 'O terceiro tem bolacha? - ', arrAlt.includes('Bolacha'))