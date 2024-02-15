// let num=[3,5,7,8];
// let sum=0;
// for(let i=0;i<num.length;i++)
//   {
//     sum+=num[i];
//   }
// console.log(sum);



/*Reduce whenever want to write single value then use reduce */


/*This is case 1 without initial value*/

let num=[3,5,7,8];
let res=num.reduce(function(accumulator,el,i,arr){
  return accumulator+el;  
})
/* output = 23 */

// case1: with no initial value of accumulaor  (takes 1st value of array 0th index)
// case 2: with initial value

// 1st iteration
// accumulator=num[0]=3,el=5,acc+el=3+5=8,acc=8
// 2nd iteration
// updated value of acc=8,el=7,acc+el=8+7=15,acc=15
// 3rd iteration
// acc=15,el=8,acc+el=15+8=23, acc=23


/* There are 4 parameters of reduce 
1. accumulator(works as sum)
2. element
3. index
4. array
*/