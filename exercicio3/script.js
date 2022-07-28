const aUm = ['cachorro'];
const aDois = ['porta', 67];
const aTres = [67, 90, 23, 4];

//
const aUmNumber = aUm.slice();
aUmNumber.push(50);
console.log("Original:\n",aUm,"\n\'Cópia:\'\n",aUmNumber);

const aDoisRet = aDois.slice();

aDoisRet.pop();
console.log("Original:\n",aDois, "\n\'Cópia\':\n",aDoisRet);

const aTresInd = aTres.slice()
aTresInd.splice(1,1)
console.log("Original:\n",aTres,"\n\'Cópia\':\n",aTresInd)





