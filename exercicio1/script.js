/* # Exercício 1

No primeiro exercício vamos praticar a criação de arrays. Crie 3 arrays diferentes:

- O primeiro deve possuir apenas **números**, e estes números não devem seguir nenhuma ordem específica;
- O segundo array deve possuir apenas **strings**;
- O terceiro array deve possuir **números**, **strings** e **booleanos**.
Imprima cada um dos arrays acima, utilizando `console.log()` */

const nuns = [7,2,3,8,5,1,0];
const strings = ["Samuka", "Ruanzito", "Marquin", "Ítalo da balada", "Paulo Elfinho"];
const misto = ["Galão da Massa", 9, true];

console.log(`Array Números ${nuns}`);
console.log(`Array Strings ${strings}`);
console.log(`Array Misto ${misto}`);

/* # Exercício 2

Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:

- Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
- Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
- Verifique se um item está incluído no primeiro array e depois no terceiro array e imprima o resultado destas verificações no console.log(). A primeira impressão deve retornar um booleano true e a segunda deve retornar um booleano false. 
 */

console.log(nuns.length);
console.log(strings.length);
console.log(misto.length);

console.log(nuns[0]);
console.log(strings[1]);
console.log(misto[2]);

console.log(nuns.includes(8));
console.log(strings.includes("Paulo Homão da porra"));
console.log(misto.includes(false));

/* # Exercício 3

Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

- Adicione um item `number` ao início do primeiro array. Utilize `console.log()` para exibir o original e a cópia;
- Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
- Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
 */

const nunsCopia = nuns.slice();
const stringsCopia = strings.slice();
const mistoCopia = misto.slice();

nunsCopia.unshift(2000);
console.log(nuns);
console.log(nunsCopia);

stringsCopia.pop();
console.log(strings);
console.log(stringsCopia);

mistoCopia.splice(1,1);
console.log(misto);
console.log(mistoCopia);