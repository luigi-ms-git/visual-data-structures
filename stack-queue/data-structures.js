  class Stack {
  constructor(){
    this.stack = [];
    this.size = 0;
    this.top = 0;
  }
  
  push(){
    this.stack[this.size] = this.size + 1;
    this.top = this.stack[this.size];
    this.size += 1;
  }
  
  pop(){
    const last = this.top;
    
    let i = 0,
        aux = [];
    
    this.size -= 1;
    
    while(i <= this.size){
      aux.push(this.stack[i]);
      i += 1;
    }
    
    this.stack = aux;
    this.top = this.stack[this.size - 1];
    
    return last;
  }
  
  peek(){
    return this.top;
  }
  
  isEmpty(){
    return this.size === 0;
  }
  
  isFull(){
    return this.size === 5;
  }
  
  get size(){
    return this._size;
  }
  
  get stack(){
    return this._stack;
  }
  
  get top(){
    return this._top;
  }
  
  set size(newSize){
    this._size = newSize;
  }
  
  set stack(newStack){
    this._stack = newStack;
  }
  
  set top(newTop){
    this._top = newTop;
  }
}

class Queue {
  constructor() {
    this.queue = [];
    this.size = 0;
    this.front = 0;
    this.rear = 0;
  }
  
  enqueue() {
    this.queue[this.size] = this.size + 1;
    this.rear = this.queue[this.size];
    this.front = this.queue[0];
    this.size += 1;
  }
  
  dequeue() {
    const dequeued = this.front;
    
    let i = 1,
        aux = [];
  
    this.size -= 1;
    
    while(i <= (this.size)){
      aux.push(this.queue[i]);
      i += 1;
    }
    
    this.queue = aux;
    this.front = this.queue[0];
    
    return dequeued;
  }
  
  peek() {
    return this.rear;
  }
  
  isEmpty() {
    return this.size === 0;
  }
  
  isFull(){
    return this.size === 5;
  }
  
  get size() {
    return this._size;
  }
  
  get queue() {
    return this._queue;
  }
  
  get front(){
    return this._front;
  }
  
  get rear(){
    return this._rear;
  }
  
  set size(newSize) {
    this._size = newSize;
  }
  
  set queue(newQueue) {
    this._queue = newQueue;
  }
  
  set front(newFront){
    this._front = newFront;
  }
  
  set rear(newRear){
    this._rear = newRear;
  }
}

export { Stack, Queue };
