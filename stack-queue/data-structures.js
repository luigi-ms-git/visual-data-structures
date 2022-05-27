  class Stack {
  constructor(){
    this.array = [];
    this.size = 0;
    this.top = 0;
  }
  
  push(newData){
    this.array[this.size] = newData;
    this.top = this.array[this.size];
    this.size += 1;
  }
  
  pop(){
    const last = this.top;
    
    let i = 0,
        aux = [];
    
    this.size -= 1;
    
    while(i <= this.size){
      aux.push(this.array[i]);
      i += 1;
    }
    
    this.array = aux;
    this.top = this.array[this.size - 1];
    
    return last;
  }
  
  order(){
    this.quickSort(this.array, 0, this.array.length-1);
  }
  
  quickSort(arr, start, end){
    if(start < end){
      let partIndex = this.partition(arr, start, end);
      this.quickSort(arr, start, (partIndex - 1));
      this.quickSort(arr, (partIndex + 1), end);
    }
  }
  
  partition(arr, start, end){
    let pivot = arr[end],
      i = (start - 1),
      j = start;
  
    while (j <= (end - 1)) {
      if (arr[j] < pivot) {
        i += 1;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      j += 1;
    }
  
    [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
    return (i + 1); 
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
  
  get array(){
    return this._array;
  }
  
  get top(){
    return this._top;
  }
  
  set size(newSize){
    this._size = newSize;
  }
  
  set array(newArray){
    this._array = newArray;
  }
  
  set top(newTop){
    this._top = newTop;
  }
}

class Queue {
  constructor() {
    this.array = [];
    this.size = 0;
    this.front = 0;
    this.rear = 0;
  }
  
  enqueue(value) {
    this.array[this.size] = value;
    this.rear = this.array[this.size];
    this.front = this.array[0];
    this.size += 1;
  }
  
  dequeue() {
    const dequeued = this.front;
    
    let i = 1,
        aux = [];
  
    this.size -= 1;
    
    while(i <= (this.size)){
      aux.push(this.array[i]);
      i += 1;
    }
    
    this.arrag = aux;
    this.front = this.array[0];
    
    return dequeued;
  }
  
  order() {
    this.quickSort(this.array, 0, this.array.length - 1);
  }
  
  quickSort(arr, start, end) {
    if (start < end) {
      let partIndex = this.partition(arr, start, end);
      this.quickSort(arr, start, (partIndex - 1));
      this.quickSort(arr, (partIndex + 1), end);
    }
  }
  
  partition(arr, start, end) {
    let pivot = arr[end],
      i = (start - 1),
      j = start;
  
    while (j <= (end - 1)) {
      if (arr[j] < pivot) {
        i += 1;
          [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      j += 1;
    }
  
      [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
    return (i + 1);
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
  
  get array() {
    return this._array;
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
  
  set array(newArray) {
    this._array = newArray;
  }
  
  set front(newFront){
    this._front = newFront;
  }
  
  set rear(newRear){
    this._rear = newRear;
  }
}

export { Stack, Queue };
