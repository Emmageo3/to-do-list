//recuperer les elements
const inputVal = document.getElementsByClassName('inputVal')[0];
const addTaskBtn = document.getElementsByClassName('btn')[0];

//ecouter l'evenement click
addTaskBtn.addEventListener('click', function (){
 
//verifier si le champ de saisie des taches n'est pas vide
if(inputVal.value.trim()!=0){
      let localItems = JSON.parse( localStorage.getItem('localItem'))
   if(localItems === null){
        taskList = []

   }else{
       taskList = localItems;
   }
   //on insere les taches saisies en localstorage
   taskList.push(inputVal.value)
   localStorage.setItem('localItem', JSON.stringify(taskList)); 
}

   showItem()
})

function showItem(){
   let localItems = JSON.parse( localStorage.getItem('localItem'))
   if(localItems === null){
        taskList = []

   }else{
       taskList = localItems;
   }


let html = '';
let itemShow = document.querySelector('.todoLists');
taskList.forEach((data, index )=> {
   

   html += `
   <div class="todoList">
   <p class="pText">${data}</p>
   <button class="deleteTask" onClick="deleteItem(${index})">x</button>
   </div>
   `
})
itemShow.innerHTML = html;
}
showItem()

function deleteItem(index){
   let localItems = JSON.parse( localStorage.getItem('localItem'))
   taskList.splice(index, 1)
   localStorage.setItem('localItem', JSON.stringify(taskList));
   showItem()
}

function clearTask(){
   
localStorage.clear()
showItem()
}