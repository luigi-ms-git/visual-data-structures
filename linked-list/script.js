import LinkedList from './linked-list.js';

const linkedList = document.getElementById("linkedList"),
      listSize = document.getElementById("listSize"),
      listWarn = document.getElementById("listWarn");

const insertBtn = document.getElementById("insert"),
      removeBtn = document.getElementById("remove");
      

const list = new LinkedList();

insertBtn.addEventListener("click", (e) => {
  if(list.isFull()){
    listWarn.textContent = "Overflow!"
  }else{
    list.insert();
    listSize.textContent = list.size();
    listWarn.textContent = "";
  }
});

removeBtn.addEventListener("click", (e) => {
  if(list.isEmpty()){
    listWarn.textContent = "Underflow!";
  }else{
    list.remove();
    listSize.textContent = list.size();
    listWarn.textContent = "";
  }
});
