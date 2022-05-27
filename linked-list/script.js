import LinkedList from './linked-list.js';

const linkedList = document.getElementById("linkedList"),
      listSize = document.getElementById("listSize"),
      listWarn = document.getElementById("listWarn");

const insertBtn = document.getElementById("insert"),
      removeBtn = document.getElementById("remove");
      

const list = new LinkedList();

function addNode(data, link){
  const li = document.createElement("li"),
        dataSpan = document.createElement("span"),
        linkSpan = document.createElement("span"),
        lastOne = linkedList.lastElementChild;
  
  dataSpan.textContent = "Data: "+data;
  linkSpan.textContent = "Link: "+link;
  
  li.appendChild(dataSpan);
  li.appendChild(linkSpan);
  
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

insertBtn.addEventListener("click", (e) => {
  if(list.isFull()){
    listWarn.style.visibility = "visible";
    listWarn.textContent = "Overflow!"
  }else{
    list.insert();
    addNode(list.size(), list.size() + 1);
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
