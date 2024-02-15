function doBrush(){
  console.log("Do brush first");
}

function eatBreakFast(item,time,doBrush){
  doBrush();
  console.log("I will eat",item," as my breakfast",time,"AM");
}

eatBreakFast("maggi",9,doBrush);

/* Order of execution 10->5->6->1->2->7 */