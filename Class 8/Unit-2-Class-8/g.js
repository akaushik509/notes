
/*desired output= [6,8]*/
let num=[3,6,8,1,9];

let res=num.map(function(el){
  return (el%2==0);
})
console.log(res);

/*Output= [false,true,true,false,false]*/