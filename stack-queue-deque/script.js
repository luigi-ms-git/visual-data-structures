import { Stack } from './data-structures.js';

const stackUl = document.getElementById("stack"),
      stackSpan = document.getElementById("stackSize");
const pushBtn = document.getElementById("push"),
      popBtn = document.getElementById("pop");


let stack = new Stack();

function newElement(last){
  const li = document.createElement("li");
  li.textContent = last;
  
  stackUl.appendChild(li);
}

function removeLast(){
  stackUl.lastChild.remove();
}

pushBtn.addEventListener("click", (e) => {
  stack.push();
  newElement(stack.peek());
  stackSpan.textContent = stack.size;
});

popBtn.addEventListener("click", (e) => {
  const popped = stack.pop();
  console.warn("Saiu: "+(popped));
  removeLast();
  stackSpan.textContent = stack.size;
});
