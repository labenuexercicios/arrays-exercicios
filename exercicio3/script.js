// # Exercício 3

// Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

// - Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
// - Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
// - Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;


 const comidas = ["Cenoura", "Batata", "Couve", "Biscoito"]
 console.log("Comidas:  ", comidas)

 comidas.push(15)
 const copiaComidas = comidas.slice()
 console.log("Cópia de Comidas: ", copiaComidas)

 const numbers = [10, 20, 30, 40]
console.log("Números: ", numbers)
numbers.pop()
const copiaNumbers = numbers.slice()
console.log("Cópia Numbers:  ",copiaNumbers)

 const filmes = ["Titanic","Velozes e Furiosos", "Minions", "Hulk"]
 console.log("Filmes:  ", filmes)
 filmes.shift()
 const copiaFilmes = filmes.slice()
 console.log("Cópia de Filmes:  ", copiaFilmes)





