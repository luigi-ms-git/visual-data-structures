import { Stack, Queue, Deque } from './data-structures.js';

const stackUl = document.getElementById("stack"),
      stackSpan = document.getElementById("stackSize"),
      queueUl = document.getElementById("queue"),
      queueSpan = document.getElementById("queueSize"),
      dequeUl = document.getElementById("deque"),
      dequeSpan = document.getElementById("dequeSize");

const pushBtn = document.getElementById("push"),
      popBtn = document.getElementById("pop"),
      enqBtn = document.getElementById("enqueue"),
      deqBtn = document.getElementById("dequeue"),
      addFrontBtn = document.getElementById("addFront"),
      removeFrontBtn = document.getElementById("removeFront"),
      addEndBtn = document.getElementById("addEnd"),
      removeEndBtn = document.getElementById("removeEnd");


let stack = new Stack(),
    queue = new Queue(),
    deque = new Deque();

function newULChild(last, ds){
  const li = document.createElement("li");
  li.textContent = last;
  
  if(ds === "stack"){
    stackUl.appendChild(li);
  }else if(ds === "queue"){
    queueUl.appendChild(li);
  }else if(ds === "deque"){
    dequeUl.appendChild(li);
  }
}

function removeULChild(ds){
  if(ds === "stack"){
    stackUl.lastChild.remove();
  }else if(ds === "queue"){
    queueUl.firstChild.remove();
  }else if(ds === "deque"){
    dequeUl.lastChild.remove();
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
  queueSpan.textContent = queue.size;
});

deqBtn.addEventListener("click", (e) => {
  const dequeued = queue.dequeue();
  console.warn("Saiu: " + dequeued);
  removeULChild("queue");
  queueSpan.textContent = queue.size;
});

addFrontBtn.addEventListener("click", (e) => {
  deque.addFront();
  newULChild(deque.peekFront(), "deque");
  dequeSpan.textContent = deque.length();
});

addEndBtn.addEventListener("click", (e) => {
  deque.addBack();
  newULChild(deque.peekBack(), "deque");
  dequeSpan.textContent = deque.length();
});

removeFrontBtn.addEventListener("click", (e) => {
  const front = deque.removeFront();
  console.warn("Saiu: "+front);
  removeULChild("deque");
  dequeSpan.textContent = deque.length();
});

removeEndBtn.addEventListener("click", (e) => {
  const back = deque.removeBack();
  console.warn("Saiu: " +back);
  removeULChild("deque");
  dequeSpan.textContent = deque.length();
});
