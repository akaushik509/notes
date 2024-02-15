
/*forEach/map/filter/reduce - can be applied only for arrays */
let sweets=["khova","laddo","barfi"];
/* Syntax : arrayName.forEach(function(element,index,array){

}) */

sweets.forEach(function(element,index,array)
{
  console.log(element,index);
  console.log(array);
})

/*  here element is array element */

sweets.forEach(function(element,index)
{
  console.log(element,index);
  
})

let box=[];
sweets.forEach(function(element,index)
{
  box.push(element);    
})
console.log(box);