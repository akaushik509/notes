// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit", myFunction)

 /*function myFunction(event){
    //this will help to hold the value or dont refresh the page automatically while clicking on submit 
    event.preventDefault();

    //***************************************** 
    // Now I have to catch the value from box

    let avatar = document.querySelector("#image").value;
    let name=document.querySelector("#name").value;
    let batch = document.querySelector("#batch").value;
    let dsa = document.querySelector("#dsa").value;
    let skill = document.querySelector("#cs").value;
    let coding = document.querySelector("#coding").value;       */   
    //check output in console to text whether it is working or not
    //console.log(avatarname,batch,dsa,skill,coding);       
//}    

    //Now shortcut to do above thing because fif there are somany such types of value then we ccant do again and again so many times
    // Syntax:- let x=document.querySelector("form").tagId.value
    // Step1- Catch the form and and then value from form
    
   /* function myFunction(event){
        event.preventDefault();
        var avatar = document.querySelector("form").image.value;
        var name = document.querySelector("form").name.value;
        var batch = document.querySelector("form").batch.value;
        var dsa = document.querySelector("form").dsa.value;
        var skill = document.querySelector("form").cs.value;
        var coding = document.querySelector("form").coding.value;
    }  */

    //We can also let var x = document.querySelector("form") to make short our code

    let formTag=document.querySelector("form");
    function myFunction(event){
        event.preventDefault();
    
        var avatar = formTag.image.value;
        var name = formTag.name.value;
        var batch = formTag.batch.value;
        var dsa = formTag.dsa.value;
        var skill = formTag.cs.value;
        var coding = formTag.coding.value;
        //check output in console to text whether it is working or not
        //console.log(avatarname,batch,dsa,skill,coding); 

    
    //******************************************** */
    
        //creating row and column table

        let tr=document.createElement("tr");

        let td1= document.createElement("td");
            //create an image
            let pic=document.createElement("img");
            pic.setAttribute("src",avatar);
            //append image in td1
            td1.append(pic);
        let td2= document.createElement("td");
            //put text
            td2.innerText=name;
        let td3= document.createElement("td");
            td3.innerText=batch;
        let td4= document.createElement("td");
            td4.innerText=dsa;
        let td5= document.createElement("td");
            td5.innerText=skill;
        let td6= document.createElement("td");
            td6.innerText=coding;
        let td7= document.createElement("td");
            let obtainedMarks=Number(dsa)+Number(coding)+Number(skill);
            let percentage=(obtainedMarks/30)*100;
            td7.innerText=percentage.toFixed(2);
            //toFixed() is uded to show number of digits after decimal
        let td8= document.createElement("td");
            if(percentage<50){
                td8.innerText="Async";
                td8.style.color="red";
            }else{
                td8.innerText="Regular";
            }
        let td9= document.createElement("td");
            td9.innerText="Delete";
            td9.style.backgroundColor="red";
            td9.style.cursore="pointer";
            td9.addEventListener("click",deleteRow);

        //append td1 to t9 in tr
        tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9);

        //catch tbody and append tr in tbody
        document.querySelector("tbody").append(tr);

    }

    function deleteRow(event){
        event.target.parentNode.remove();
    }
    

