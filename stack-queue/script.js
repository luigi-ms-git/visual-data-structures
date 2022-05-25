import { Stack, Queue } from './data-structures.js';

const stackUl = document.getElementById("stack"),
      stackSize = document.getElementById("stackSize"),
      queueUl = document.getElementById("queue"),
      queueSize = document.getElementById("queueSize"),
      stackWarn = document.getElementById("stackWarn"),
      queueWarn = document.getElementById("queueWarn");

const pushStackBtn = document.getElementById("pushStack"),
      popStackBtn = document.getElementById("popStack"),
      enqueueBtn = document.getElementById("enqueue"),
      dequeueBtn = document.getElementById("dequeue");

let stack = new Stack(),
    queue = new Queue();

function newULChild(value, ds){
  const li = document.createElement("li");
  li.textContent = value;
  
  if(ds === "stack"){
    stackUl.appendChild(li);
    stackUl.lastElementChild.className = "top";
    
    for(let c of stackUl.childNodes.keys()){
      if(c < stackUl.childNodes.length - 1){
        stackUl.childNodes.item(c).className = "";
      }
    }
  }else if(ds === "queue"){
    queueUl.appendChild(li);
    queueUl.lastElementChild.className = "rear";
    
    for (let c of queueUl.childNodes.keys()) {
      if (c < queueUl.childNodes.length - 1) {
        queueUl.childNodes.item(c).className = "";
      }
    }
    queueUl.firstElementChild.className = "front";
  }
}

function removeULChild(ds){
  if(ds === "stack"){
    stackUl.lastChild.remove();
    if(!stack.isEmpty()){
      stackUl.lastElementChild.className = "top";
    }
  }else if(ds === "queue"){
    queueUl.firstChild.remove();
    if(!queue.isEmpty()){
      queueUl.firstElementChild.className = "front";
    }
  }
}

pushStackBtn.addEventListener("click", (e) => {
  if(stack.isFull()){
    console.warn("Overflow");
    stackWarn.style.visibility = "visible";
    stackWarn.textContent = "Overflow!"
  }else{
    stack.push();
    newULChild(stack.peek(), "stack");
    stackSize.textContent = stack.size;
    stackWarn.textContent = "";
    stackWarn.style.visibility = "hidden";
  }
});

popStackBtn.addEventListener("click", (e) => {
  if(stack.isEmpty()){
    console.warn("Underflow");
    stackWarn.style.visibility = "visible";
    stackWarn.textContent = "Underflow!"
  }else{
    const popped = stack.pop();
    removeULChild("stack");
    console.warn("Saiu da pilha: "+popped);
    stackSize.textContent = stack.size;
    stackWarn.textContent = "";
    stackWarn.style.visibility = "hidden";
  }
});

enqueueBtn.addEventListener("click", (e) => {
  if(queue.isFull()){
    console.warn("Overflow");
    queueWarn.style.visibility = "visible";
    queueWarn.textContent = "Overflow!";
  }else{
    queue.enqueue();
    newULChild(queue.peek(), "queue");
    queueSize.textContent = queue.size;
    queueWarn.style.visibility = "hidden";
  }
});

dequeueBtn.addEventListener("click", (e) => {
  if(queue.isEmpty()){
    console.warn("Underflow");
    queueWarn.style.visibility = "visible";
    queueWarn.textContent = "Underflow";
  }else{
    const dequeued = queue.dequeue();
    removeULChild("queue");
    console.warn("Saiu da fila: " + dequeued);
    queueSize.textContent = queue.size;
    queueWarn.style.visibility = "hidden";
  }
});
