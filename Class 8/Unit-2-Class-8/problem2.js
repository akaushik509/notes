/* Given an array of numbers generate an array containing the double value of the numbers */

/* Sample Input [1, 2] Sample Output [2, 4] */

let arr=[1,2,7,5,8,6,9,4,7,5]
let newarr=arr.map(function(el){
  return (el*2);
})

console.log(newarr);