import { Stack, Queue } from './data-structures.js';

const stackUl = document.getElementById("stack"),
      stackSpan = document.getElementById("stackSize"),
      queueUl = document.getElementById("queue"),
      queueSpan = document.getElementById("queueSize");

const pushBtn = document.getElementById("push"),
      popBtn = document.getElementById("pop"),
      enqBtn = document.getElementById("enqueue"),
      deqBtn = document.getElementById("dequeue");


let stack = new Stack(),
    queue = new Queue();

function newULChild(last, ds){
  const li = document.createElement("li");
  li.textContent = last;
  
  if(ds === "stack"){
    stackUl.appendChild(li);
  }else if(ds === "queue"){
    queueUl.appendChild(li);
  }
}

function removeULChild(ds){
  if(ds === "stack"){
    stackUl.lastChild.remove();
  }else if(ds === "queue"){
    queueUl.lastChild.remove();
  }
}

pushBtn.addEventListener("click", (e) => {
  stack.push();
  newULChild(stack.peek(), "stack");
  stackSpan.textContent = stack.size;
});

popBtn.addEventListener("click", (e) => {
  const popped = stack.pop();
  console.warn("Saiu: "+(popped));
  removeULChild("stack");
  stackSpan.textContent = stack.size;
});

enqBtn.addEventListener("click", (e) => {
  queue.enqueue();
  newULChild(queue.peek(), "queue");
  queueSpan.textContent = queue.length();
});

deqBtn.addEventListener("click", (e) => {
  const dequeued = queue.dequeue();
  console.warn("Saiu: " + dequeued);
  removeULChild("queue");
  queueSpan.textContent = queue.length();
});
