//Agora, vamos manipular os arrays, adicionando ou removendo informações. 
//Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, 
//e faça o que se pede abaixo nas cópias dos arrays originais;
const listaMxConviteOriginal = [20, 25, 30, 35, 45];
const listaTotalOriginal = ["banana", "maçã", "laranja", "uva", "caju"];
const listaFinalOriginal = [23, "maçã", 27, "uva", true];

const listaMxConviteCopia = listaMxConviteOriginal.slice();
console.log(listaMxConviteCopia)
const listaTotalCopia = listaTotalOriginal.slice();
console.log(listaTotalCopia)
const listaFinalCopia = listaFinalOriginal.slice();
console.log(listaFinalCopia)
//- Adicione um item `number` ao primeiro array. 
//Utilize `console.log()` para exibir o original e a cópia;
listaMxConviteCopia.push(6)
console.log(listaMxConviteOriginal, listaMxConviteCopia)
//- Remova o último item do segundo array. 
//Utilize `console.log()` para exibir o original e a cópia;
listaTotalCopia.pop()
console.log(listaTotalOriginal, listaTotalCopia)
//- Remova o segundo item do terceiro array. 
//Utilize `console.log()` para exibir o original e a cópia;
listaFinalCopia.splice(1,1)
console.log(listaFinalOriginal, listaFinalCopia)
