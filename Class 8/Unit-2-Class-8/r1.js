

// case2- with initial value of accumulator

let num=[3,5,7,8];
let sumOfNum=function(accumulator,el,index,array){
  return accumulator+el;
}

let res=num.reduce(sumOfNum,/*initial value of accumulator*/ 5 );
console.log(res);


// acc=5, el=3, acc=5+3=8
// acc=8, el=5, acc=8+5=13
// acc=13,el=7,acc=13+7=20
// acc=20,el=8,acc=20+8=28