/* Given an array of numbers print the product of all numbers

Sample Input - [2,3,4] Sample Output - 24 */

let arr=[2,3,4,7,5,8,6,49,32,74];
let narr=1;
arr.forEach(function(el){
  narr=narr*el;
})
  console.log(narr);