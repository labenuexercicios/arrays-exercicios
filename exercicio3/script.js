//- Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
//- Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
//- Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;

const nomeDoArrayOriginalCopia = [1,4,67]
const nomeDoArrayOriginalCopia1 = ["óculos",false,531]
const nomeDoArrayOriginalCopia2 = ["telefone","caixa de som",false]
const original = nomeDoArrayOriginalCopia
const original1 = nomeDoArrayOriginalCopia1
const original2 = nomeDoArrayOriginalCopia2

console.log("Original",original)
const copia = original.push("teste")
console.log("Cópia com inclusão de teste",original)

console.log("Original 1",original1)
original1.pop()
console.log("Cópia sem o ultimo item",original1)

console.log("Original 2",original2)
original2.splice(1, 1)
console.log("Cópia sem o segundo item",original2)

