/* Given an array of numbers find the sum of odd elements Sample Input - [1, 2, 3, 4] Sample Output - 4 */

let arr=[4,8,3,7,6,9];
let sum=0;
let narr=arr.filter(function(el)
    {
      return (el%2==1);
      
    })
narr.forEach(function(el){
  sum+=el;
})
console.log(sum);