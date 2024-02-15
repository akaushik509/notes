/* Given an array of numbers extract the numbers which are odd */
/* Sample Input - [1,2,3] Sample Output - [1,3] */

let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13]
let oddarr=arr.filter(function(el){
 return (el%2==1);
  
})

console.log(oddarr);

var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    var removed = arr2.splice(2,1);
    console.log(removed);