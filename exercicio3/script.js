



const arrayNumeros = [1,18,3,209,56.5,11]
const arrayStrings = ["Labenu", "Miranda"]
const arrayTudo = [3,8,"Ludmila", true, "Gica",17.5]



const novoArrayNumeros = arrayNumeros.slice()
const novoArrayString = arrayStrings.slice()
const novoArrayTudo = arrayTudo.slice()


function letraA (numero) {
  
    numero.unshift = (7)
    console.log (arrayNumeros)
    console.log (numero)
    

}

letraA (novoArrayNumeros)


function letraB (string) {
  
    string.pop()
    console.log (arrayStrings)
    console.log (string)
    

}

letraB (novoArrayString)

function letraC (tudo) {

    tudo.splice(1,1)
    console.log(tudo);
    console.log(arrayTudo);

}

letraC (novoArrayTudo)