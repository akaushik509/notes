

document.querySelector("form").addEventListener("submit", myfun);
let arr=JSON.parse(localStorage.getItem("queData"))|| [];

displayTable(arr);


console.log(displayTable(arr));

function myfun(event){
    event.preventDefault();

    let obj={
         que:document.querySelector("#title").value,
         oj:document.querySelector("#link").value,
         diff:document.querySelector("#difficulty").value,
    };

    arr.push(obj);
   displayTable(arr);
    localStorage.setItem("queData", JSON.stringify(arr));
}

function displayTable(arr){

    document.querySelector("tbody").innerHTML="";

    

    arr.forEach(function(el){
    let tr=document.createElement("tr");

    let td1=document.createElement("td");
    td1.innerText=el.que;
    let td2=document.createElement("td");
    td2.innerText=el.oj;
    let td3=document.createElement("td");
    td3.innerText=el.diff;
    let td4=document.createElement("td");
    if(td3.innerText/*el.queDifficulty*/=="Easy"){
        td4.innerText="No";
    }else{
        td4.innerText="Yes";
    }
    tr.append(td1,td2,td3,td4);

    document.querySelector("tbody").append(tr);
})
}