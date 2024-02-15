

let arr=[2,4,6,8];
/* want my output= [4,8,12,16] */

/* By using forEach */
let box=[];
arr.forEach(function(el){
  box.push(el*2);
  
})

console.log(box);