//A
function primeiroArray(array1){
    array1.unshift(4)
   console.log(array1)
   console.log(array1Copia)
 }
 
 const array1 = [3,6,9,12,33,55,77]
 const array1Copia = array1.slice();
 
 primeiroArray(array1);
 
 //-----------------------------
 //B
 function segundoArray(array2){
     array2.pop()
     console.log(array2)
     console.log(array2Copia)
 }
 
 const array2 = ["laptop", "celular", "televisao"]
 const array2Copia = array2.slice()
 
 segundoArray(array2);
 
 //---------------------------------
 //C
 function terçeiroArray(array3){
     array3.splice(1,1)
     console.log(array3)
     console.log(array3Copia)
 }
 
  const array3 = [12, "amarelo", true, 56, "azul", false]
  const array3Copia = array3.slice();
 
 terçeiroArray(array3);
 