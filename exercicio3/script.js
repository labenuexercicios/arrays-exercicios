const numArr = [5, 10, 15];
const stringArr = ['Banana', 'Jaca', 'Pera'];
const mixedArr = [15, 'Jaca', true];

const newNumArr = [...numArr];
const newStringArr = [...stringArr];
const newMixedArr = [...mixedArr];

const modificarArrays = () => {
  newNumArr.unshift(25);
  newStringArr.shift();
  newMixedArr.splice(1, 1);

  console.log(
    `Array original: ${numArr.join(' - ')} / Nova array: ${newNumArr.join(
      ' - '
    )}`
  );

  console.log(
    `Array original: ${stringArr.join(' - ')} / Nova array: ${newStringArr.join(
      ' - '
    )}`
  );

  console.log(
    `Array original: ${mixedArr.join(' - ')} / Nova array: ${newMixedArr.join(
      ' - '
    )}`
  );
};
modificarArrays();
