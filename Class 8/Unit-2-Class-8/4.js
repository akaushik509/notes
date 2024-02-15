/* call back function */
function eatBreakFast(){
  console.log("I will eat");
}

eatBreakFast();

/* Output = I will eat */

function eatBreakFast(item){
  console.log("I will eat",item," as my breakfast");
}

eatBreakFast("maggi");

/* maggie is a string and arrgument output= I wil;l eat maggie as my breakfast */


function eatBreakFast(item,time){
  console.log("I will eat",item," as my breakfast",time,"AM");
}

eatBreakFast("maggi",9);

/*passing string and number from the function */
