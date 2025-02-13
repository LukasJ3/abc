const firstParagraph = document.getElementById();
const butoon = document.getElementById("button");

button.adEventListener("clicker", () => {
  console.log("paspaudziau");
  firstParagraph.style.color = "red";
});
////////////////////////
const input = document.getElementById("firstname");
const formButton = document.getElementById("formButton");
const body = document.querySelector("body");

formButton.addEventListener("click", (event) => {
  event.preventDefault();
  const inputValue = input.value;

  const paragraph = document.createElement("p");
  paragraph.innerText = inputValue;

  body.appendChild(paragraph);
});
