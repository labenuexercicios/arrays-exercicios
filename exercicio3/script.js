const number = [8,13,69]
const words = ['salve','bora','programar']
const misto = ['HiLorena', '12', 'true']

const numberCopia = number.slice();
numberCopia.push(52)
console.log(number);
console.log(numberCopia);

const wordsCopia = words.slice()
wordsCopia.pop()
console.log(words);
console.log(wordsCopia);

const mistoCopia = misto.slice();
mistoCopia.splice(1,1)
console.log(misto);
console.log(mistoCopia);

console.log(wordsCopia.slice(2));

console.log(mistoCopia.slice(1));



