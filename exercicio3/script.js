const array1=["Francisco","Adriana","lorena"]
const array01=array1.slice()
const array2=[27,30,6]
const array02=array2.slice()
const array3=["centro","dalia","arvoredo"]
const array03=array3.slice()
array01.unshift(12)
console.log(array1,array01)
array02.pop()
console.log(array2,array02)
array03.splice(1,1)
console.log(array3,array03)
