class Node {
  constructor(data){
    this.data = data;
    this.next = [];
  }
  
  get data(){
    return this._data;
  }
  
  get next(){
    return this._next;
  }
  
  set data(newData){
    this._data = newData;
  }
  
  set next(newNext){
    this._next = newNext;
  }
}

class LinkedList {
  constructor(){
    this.head = new Node("HEAD");
    this.last = new Node("NULL");
    this.array = [this.head, this.last];
    this.counter = 2;
    this.last.next = null;
    this.head.next = 1;
  }
  
  insert(newItem){
    let newNode = new Node(newItem);
    
    if(this.isEmpty()){
      newNode.next = this.counter;
      
      this.array[this.head.next] = newNode;
      this.array[newNode.next] = this.last;
    }else{
      const lastButOneIndex = this.counter - 1;
      newNode.next = this.counter;
      
      this.array[lastButOneIndex] = newNode;
      this.array[newNode.next] = this.last;
    }
    this.counter += 1;
  }
  
  remove(){
    const lastButOneIndex = this.array.length - 2;
    let i = 0, aux = [];
    
    while(i < this.array.length){
      if(i !== lastButOneIndex){
        aux.push(this.array[i]);
      }
      i += 1;
    }
    
    this.counter -= 1;
    this.array = aux;
  }
  
  order() {
    let sub = this.array.splice(1, this.array.length - 2);
    let last = this.array.pop();
    
    this.quickSort(sub, 0, sub.length - 1);
    
    this.array.push(sub);
    this.array.push(last);
    this.array = this.array.flat();
  }
  
  quickSort(arr, start, end) {
    if (start < end) {
      let partIndex = this.partition(arr, start, end);
      this.quickSort(arr, start, (partIndex - 1));
      this.quickSort(arr, (partIndex + 1), end);
    }
  }
  
  partition(arr, start, end) {
    let pivot = arr[end].data,
      i = (start - 1),
      j = start;
  
    while (j <= (end - 1)) {
      if (arr[j].data < pivot) {
        i += 1;
            [arr[i].data, arr[j].data] = [arr[j].data, arr[i].data];
      }
      j += 1;
    }
  
        [arr[i + 1].data, arr[end].data] = [arr[end].data, arr[i + 1].data];
    return (i + 1);
  }
  
  peekLast(){
    return this.array[this.size()];
  }
  
  size(){
    return this.counter - 2;
  }
  
  isEmpty(){
    return this.size() === 0;
  }
  
  isFull(){
    return this.size() === 5;
  }
  
  get array(){
    return this._array;
  }
  
  get head(){
    return this._head;
  }
  
  get last(){
    return this._last;
  }
  
  get counter(){
    return this._counter;
  }
  
  set array(newArray){
    this._array = newArray;
  }
  
  set head(newHead){
    this._head = newHead;
  }
  
  set last(newLast){
    this._last = newLast;
  }
  
  set counter(newCounter){
    this._counter = newCounter;
  }
}

export default LinkedList;
