
const arrayDeNumeros = [45, 20, 35, 65, 80];
const arrayDeStrings = ["jessica", "maria", "fernanda"];
const arrayDeTodoTipo = [50, 80, "johnny", "paul", true, false];

// Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três**
// novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos
// arrays originais;

const arrayDeNumerosCopia = [70, 25, 10, 15, 90];
const arrayDeStringsCopia = ["Girafa", "Cavalo", "Formiga"];
const arrayDeTodoTipoCopia = [75, 90, "Marcelo", "Natália", false, true];


// - Adicione um item `number` ao início do primeiro array. Utilize `console.log()` para exibir o original e
// a cópia;

arrayDeNumeros.push(100);
arrayDeNumerosCopia.push(120);

console.log(arrayDeNumeros, arrayDeNumerosCopia);

// - Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;

arrayDeStrings.pop();
arrayDeStringsCopia.pop();

console.log(arrayDeStrings) 
console.log(arrayDeStringsCopia);

// - Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;

arrayDeTodoTipo.splice(1,1);
arrayDeTodoTipoCopia.splice(1,1);

console.log(arrayDeTodoTipo);
console.log(arrayDeTodoTipoCopia);