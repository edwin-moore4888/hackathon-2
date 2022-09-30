import { loadData } from "./api";
import { postData } from "./api";

console.log("booooo")



const modal = document.querySelector('.modal');
console.log(modal)
// Get the button that opens the modal
const button = document.querySelector('#btn1');
console.log(button);
// console.log(document.querySelector("button"));
// Get the <span> element that closes the modal
const span = document.getElementById("submit");
button.addEventListener('click', () => {
    console.log("click from Register");
    modal.style.display = 'flex'
})
// When the user clicks on <span> (x), close the modal
span.addEventListener('click', () => {
    modal.style.display = "none";
})



loadData()
