const nomeDoArrayOriginal = ["mendes", true, 5];
console.log(nomeDoArrayOriginal);
const nomeDoArrayOriginalCopia = nomeDoArrayOriginal.slice();
nomeDoArrayOriginalCopia.pop();
console.log(nomeDoArrayOriginalCopia);
console.log(nomeDoArrayOriginalCopia.splice(1))
