'strict';

//a//
let ArrayOriginal = [29, 56, 78, 67, 89];
ArrayOriginal.push(139);
console.log(ArrayOriginal);
// b//
let ArrayOriginalCopia = [29, 56, 78, 67, 89];
ArrayOriginal.pop(139);
console.log(ArrayOriginal);
// c//

let ArrayOriginalCopia2 = [29, 56, 78, 67, 89];
ArrayOriginalCopia2.splice(1, 1);
console.log(ArrayOriginalCopia2);
