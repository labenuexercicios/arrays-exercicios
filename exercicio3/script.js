const arrayNumber = [13, 8, 1997, 3, 2017, 7];
const arrayAtores = ['Bradd Pitt', 'Leonardo Dicaprio', 'Ryan Gosling', 'Nicolas Cage'];
const arrayRandom = [13, 'é impar?', true];

const arrayNumberCopia = arrayNumber.slice();
const arrayAtoresCopia = arrayAtores.slice();
const arrayRandomCopia = arrayRandom.slice();

arrayNumberCopia.push(25);
console.log('Original: ', arrayNumber, '\n', 'Cópia: ', arrayNumberCopia);

arrayAtoresCopia.pop();
console.log('Original: ', arrayAtores, '\n', 'Cópia: ', arrayAtoresCopia);

arrayRandomCopia.splice(1, 1);
console.log('Original: ', arrayRandom, '\n', 'Cópia: ', arrayRandomCopia);
