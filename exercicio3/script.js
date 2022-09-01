//Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;
const primeiroArray = [80, 5, 8, 12]
const segundoArray = ["peixe", "cachorro", "alpaca", "esquilo"]
const terceiroArray = [80, "gato", true, "lontra"]
const primeiroArrayCopia = primeiroArray.slice()
const segundoArrayCopia = segundoArray.slice()
const terceiroArrayCopia = terceiroArray.slice()

//- Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
primeiroArray.push(10)
console.log(`${primeiroArray}\n${primeiroArrayCopia}`)
console.log("==============================================")
//- Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
segundoArray.pop()
console.log(`${segundoArray}\n${segundoArrayCopia}`)
console.log("==============================================")
//- Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
terceiroArray.splice(2,1)
console.log(`${terceiroArray}\n${terceiroArrayCopia}`)