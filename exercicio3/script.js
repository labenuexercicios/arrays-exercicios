const arrayNumeros = [1, 5, 3, 6, 8]
const arrayStrings = ['Bruno', 'Giovane', 'Marcelo', 'Elza']
const arrayMesclado = ['Bruno', 12, 50, 'Maschietto', true]

const arrayNumerosCopia = arrayNumeros.slice();
const arrayStringsCopia = arrayStrings.slice();
const arrayMescladoCopia = arrayMesclado.slice();

//- Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
arrayNumeros.push(10);
console.log(arrayNumeros, arrayNumerosCopia);

// - Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
arrayStrings.pop();
console.log(arrayStrings, arrayStringsCopia);

// - Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
arrayMesclado.splice(1, 1);
console.log(arrayMesclado, arrayMescladoCopia);
