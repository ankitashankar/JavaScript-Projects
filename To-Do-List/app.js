let addbtn=document.querySelector("#Add");
let input=document.querySelector("#todo-input");
let list=document.querySelector("#todo-list");

let tasks=JSON.parse(localStorage.getItem("tasks")) ||[];

const checkbox = (li,taskObj) => {
    let check = document.createElement("input");
    check.type = "checkbox";
    check.checked=taskObj.completed;

      check.addEventListener("change",()=>{
        taskObj.completed=check.checked;

        localStorage.setItem("tasks",JSON.stringify(tasks));        

})
    li.appendChild(check);
}
const deleteBtn=(li,index)=>{
     let btn = document.createElement("button");
     btn.innerText="Delete";


    btn.style.marginLeft = "20px";
   

     btn.addEventListener("click",()=>{
    tasks.splice(index,1);

    localStorage.setItem("tasks",JSON.stringify(tasks));        

    li.remove();
})
      li.appendChild(btn);


};

const createTask=(taskObj,index)=>{
    let li=document.createElement("li");
     checkbox(li, taskObj);

    let text = document.createTextNode("     " + taskObj.task);
    li.appendChild(text);
    list.appendChild(li);
    deleteBtn(li,index);

}

addbtn.addEventListener("click",(event)=>{
    event.preventDefault();

    let task=input.value;

    let taskObj=
        {
            task: task,
            completed: false
        };

    tasks.push(taskObj);
    createTask(taskObj,tasks.length-1);

    
    localStorage.setItem("tasks",JSON.stringify(tasks));
});


tasks.forEach((task,index)=>{
    createTask(task,index);
})