const myh1 = document.querySelector("h1");  
myh1.style.color = "red";
console.log(myh1);

const byID = document.getElementById("h2_tag");
byID.setAttribute("class", "manoh2");
byID.classname = "nauja klase";
const getAttrVal = byID.getAttribute("class")
byID.style.backgroundColor = "green";
console.log(byID);

const byClass = document.getElementsByClassName("divas");

console.log(byClass);

const byclass2 = document.querySelectorAll(".divas");
console.log(byclass2);

const byTag = document.getElementsByTagName("p");  
console.log(byTag);
byTag.foreach((el) => (el.style.color = "pink"));