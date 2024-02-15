
let arr=[2,4,6,8];
/* want my output= [4,8,12,16] */

/* By using map */

let res=arr.map(function(el){
  return (el*2);
})

console.log(res);