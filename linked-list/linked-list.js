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
    this.list = [this.head, this.last];
    this.counter = 2;
    this.last.next = null;
    this.head.next = 1;
  }
  
  insert(){
    let newNode = new Node(this.counter - 1);
    
    if(this.isEmpty()){
      newNode.next = this.list.length;
      
      this.list[this.head.next] = newNode;
      this.list[newNode.next] = this.last;
    }else{
      const lastButOneIndex = this.list.length - 1;
      newNode.next = this.list.length;
      
      this.list[lastButOneIndex] = newNode;
      this.list[newNode.next] = this.last;
    }
    this.counter += 1;
  }
  
  remove(){
    const lastButOneIndex = this.list.length - 2;
    let i = 0, aux = [];
    
    while(i < this.list.length){
      if(i !== lastButOneIndex){
        aux.push(this.list[i]);
      }
      i += 1;
    }
    
    this.counter -= 1;
    this.list = aux;
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
  
  get list(){
    return this._list;
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
  
  set list(newList){
    this._list = newList;
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
