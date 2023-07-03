

let numeros = [1,56,3,4];
let string = ['isaias','berg','vitor'];
let juntoMisturado = ['Breno',42,true]

console.log(numeros,string,juntoMisturado);


function quantidade(pam1,pam2,pam3){

return `Quantidade 1: ${pam1.length} Quantidade 2: ${pam2.length} Quantidade 3: ${pam3.length};`
        

}

console.log(quantidade(numeros,string,juntoMisturado));





function imprima(pam1,pam2,pam3){

    return console.log('item 1:', pam1[0], 'item 2:', pam2[1], 'item 3:',pam3[2])
            
    
    }
    
  (imprima(numeros,string,juntoMisturado));