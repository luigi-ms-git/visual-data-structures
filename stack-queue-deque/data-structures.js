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


export { Stack };
