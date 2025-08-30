let heading =document.getElementById("ques01");
heading.innerText=heading.innerText+" from Apna College students.";

let boxes=document.querySelectorAll(".box");
boxes[0].innerText ="I am the first box";
boxes[1].innerText ="I am the second box";
boxes[2].innerText ="I am the third box";

const graph=document.getElementById("graphs");
graph.addEventListener("click",() =>{
    graph.classList.toggle("font");
});


const body=document.body;
const tooglebtn =document.getElementById("togglebtn");

tooglebtn.addEventListener("click",() =>{
body.classList.toggle("dark");
body.classList.toggle("light");

if(body.classList.contains("dark")){
    tooglebtn.textContent ="Light Mode";
   
}else{
     tooglebtn.textContent ="dark Mode";
}
});