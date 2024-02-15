/* Given an array of numbers print the square of those numbers */
/*By using map*/

let arr=[7,6,8,9,4,2,8,77,5,6,10,5,4];

let squarr=arr.map(function(el){
  return el*el;
})
console.log(squarr);
