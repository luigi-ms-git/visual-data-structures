class Stack {
  constructor(){
    this.stack = [];
    this.size = this.stack.length;
  }
  
  push(){
    this.stack[this.size] = this.size + 1;
    this.size += 1;
  }
  
  pop(){
    const last = this.peek();
    let i = 0,
        aux = [];
    
    if(this.isEmpty()){
      return 0;
    }
    
    this.size -= 1;
    
    while(i <= this.size){
      aux.push(this.stack[i]);
      i += 1;
    }
    
    this.stack = aux;
    return last;
  }
  
  peek(){
    return this.stack[this.size - 1];
  }
  
  isEmpty(){
    return this.size === 0;
  }
  
  get size(){
    return this._size;
  }
  
  get stack(){
    return this._stack;
  }
  
  set size(newSize){
    this._size = newSize;
  }
  
  set stack(newStack){
    this._stack = newStack;
  }
}

class Queue {
  constructor() {
    this.queue = [];
    this.first = 0;
    this.size = this.queue.length;
  }
  
  enqueue() {
    this.queue[this.first] = this.size + 1;
    this.size += 1;
  }
  
  dequeue() {
    if(this.isEmpty()){
      return 0;
    }
    
    let dequeued = this.queue[this.first];
    let i = 0,
        aux = [];
  
    this.size -= 1;
    
    while(i <= (this.size - 1)){
      aux.push(this.queue[i]);
      i += 1;
    }
    
    this.queue = aux;
    return dequeued;
  }
  
  peek() {
    return this.queue[this.first];
  }
  
  isEmpty() {
    return this.size - this.first === 0;
  }
  
  length(){
    console.log(this.size - this.first);
    return this.size - this.first;
  }
  
  get size() {
    return this._size;
  }
  
  get queue() {
    return this._queue;
  }
  
  get first(){
    return this._first;
  }
  
  set size(newSize) {
    this._size = newSize;
  }
  
  set queue(newQueue) {
    this._queue = newQueue;
  }
  
  set first(newFirst){
    this._first = newFirst;
  }
}

export { Stack, Queue };
