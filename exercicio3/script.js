const arrayNum = [4, 8, 15, 16, 23, 42],
  arrayString = ["luca", "fufuchan", "Mysta"],
  arrayBabygirl = [1, true, "daemon", "babygirl"];

const arrayNumCopia = arrayNum.slice(),
  arrayStringCopia = arrayString.slice(),
  arrayBabygirlCopia = arrayBabygirl.slice();

arrayNumCopia.push(6);
arrayStringCopia.pop();
arrayBabygirlCopia.splice(1, 1);

console.log(arrayNum, arrayNumCopia);
console.log(arrayString, arrayStringCopia);
console.log(arrayBabygirl, arrayBabygirlCopia);
