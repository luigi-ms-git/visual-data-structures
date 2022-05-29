import LinkedList from './linked-list.js';

const linkedList = document.getElementById("linkedList"),
      listSize = document.getElementById("listSize"),
      listWarn = document.getElementById("listWarn"),
      listItem = document.getElementById("listItem");

const insertBtn = document.getElementById("insert"),
      removeBtn = document.getElementById("remove"),
      orderListBtn = document.getElementById("orderList");
      

const list = new LinkedList();

function addNode(node){
  const li = document.createElement("li"),
        dataSpan = document.createElement("span"),
        linkSpan = document.createElement("span"),
        lastOne = linkedList.lastElementChild;
  
  if(node.data !== "HEAD"){
    dataSpan.textContent = "Data: "+node.data;
    linkSpan.textContent = "Link: "+node.next;
    
    li.appendChild(dataSpan);
    li.appendChild(linkSpan);
  }else{
    dataSpan.textContent = node.data;
    li.appendChild(dataSpan);
  }
  
  li.className = "node";
  
  linkedList.lastChild.remove();
  linkedList.appendChild(li);
  linkedList.appendChild(lastOne);
}

function removeNode(){
  const lastOne = linkedList.lastElementChild;
  
  linkedList.lastChild.remove();
  linkedList.lastChild.remove();
  linkedList.appendChild(lastOne);
}

function clearUL() {
  let end = linkedList.childElementCount,
      i = 0;
  
  while (i <= end) {
    linkedList.firstChild.remove();
    i += 1;
  }
}

function updateUL(){
  clearUL();
  list.array.forEach(item => {
    if (item.next !== null) {
      addNode(item);
    }
  });
}

insertBtn.addEventListener("click", (e) => {
  if(list.isFull()){
    listWarn.style.visibility = "visible";
    listWarn.textContent = "Overflow!"
  }else{
    list.insert(listItem.value);
    addNode(list.peekLast());
    listSize.textContent = list.size();
    listWarn.style.visibility = "hidden";
    listWarn.textContent = "";
  }
});

removeBtn.addEventListener("click", (e) => {
  if(list.isEmpty()){
    listWarn.style.visibility = "visible";
    listWarn.textContent = "Underflow!";
  }else{
    list.remove();
    removeNode();
    listSize.textContent = list.size();
    listWarn.style.visibility = "hidden";
    listWarn.textContent = "";
  }
});

orderListBtn.addEventListener("click", e => {
  if(list.isEmpty()){
    listWarn.style.visibility = "visible";
    listWarn.textContent = "Empty List!";
  }else{
    list.order();
    updateUL();
    listWarn.style.visibility = "hidden";
    listWarn.textContent = "";
  }
});
