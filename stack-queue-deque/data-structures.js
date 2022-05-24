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
    this.size = 0;
    this.front = 0;
    this.rear = 0;
  }
  
  enqueue() {
    this.queue[this.size] = this.size + 1;
    this.size += 1;
    this.rear = this.queue[this.size - 1];
    this.front = this.queue[0];
  }
  
  dequeue() {
    if(this.isEmpty()){
      console.error("Empty queue");
      return 0;
    }

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

class Deque {
  constructor() {
    this.deque = [];
    this.first = 0;
    this.size = this.deque.length;
  }
  
  addFront() {
    if(this.isEmpty()){
      this.addBack();
    }else{
      let i = this.size;
      while(i > 0){
        this.deque[i] = this.deque[i - 1];
        i -= 1;
      }
      this.size += 1;
      this.deque[0] = this.size;
    }
  }
  
  addBack(){
    this.deque[this.size] = this.size + 1;
    this.size += 1;
  }
  
  removeFront() {
    if(this.isEmpty()){
      return 0;
    }
    
    const removed = this.deque[this.first];
    let i = 0,
        aux = [];
        
    while(i < this.size - 1){
      aux.push(this.deque[i]);
      i += 1;
    }
    
    this.deque = aux;
    return removed;
  }
  
  removeBack(){
    if(this.isEmpty()){
      return 0;
    }
    
    const removed = this.deque[this.size - 1];
    let i = 0,
        aux = [];
    
    this.size -= 1;
    
    while(i < this.size){
      aux.push(this.deque[i]);
      i += 1;
    }
    
    this.deque = aux;
    return removed;
  }
  
  peekFront() {
    return this.deque[this.first];
  }
  
  peekBack(){
    return this.deque[this.size - 1];
  }
  
  isEmpty() {
    return this.size - this.first === 0;
  }
  
  length() {
    return this.size - this.first;
  }
  
  get size() {
    return this._size;
  }
  
  get deque() {
    return this._deque;
  }
  
  get first() {
    return this._first;
  }
  
  set size(newSize) {
    this._size = newSize;
  }
  
  set deque(newDeque) {
    this._deque = newDeque;
  }
  
  set first(newFirst) {
    this._first = newFirst;
  }
}

export { Stack, Queue, Deque };
