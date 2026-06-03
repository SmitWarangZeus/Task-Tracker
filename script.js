// localStorage.removeItem('tasks');
let tasks=JSON.parse(localStorage.getItem('tasks'))||[];
let newId=0;

function addTask(){
    let taskName=document.getElementById('task-name');
    let taskDesc=document.getElementById('task-desc');
    let taskDue=document.getElementById('task-due');
    if (taskName.value.trim()===''){
        alert('Name cannot be empty');
        return;
    }
    if (taskDue.value===''){
        alert('Set a due date');
        return;
    }
    if (new Date(taskDue.value)<new Date()){
        alert('Past dates not allowed');
        return;
    }
    let task={name:taskName.value,desc:taskDesc.value,status:'Incomplete',dueDate:taskDue.value,taskId:newId};
    newId++;
    tasks.push(task);
    taskName.value='';
    taskDesc.value='';
    task.dueDate.value='';
    localStorage.setItem('tasks',JSON.stringify(tasks));
    displayTasks();
}

function displayTasks(){
    let tbody=document.getElementById('table-body');
    tbody.innerHTML='';
    tasks.sort((a,b)=>new Date(a.dueDate)-new Date(b.dueDate));
    tasks.forEach((task,index)=>{
        let row=document.createElement('tr');
        let btnclass=task.status==='Complete'?'btn-com':'btn-incom'

        let nameCell=document.createElement('td');
        nameCell.textContent=task.name;
        row.appendChild(nameCell);

        let descCell=document.createElement('td');
        descCell.textContent=task.desc;
        row.appendChild(descCell);

        let dateCell=document.createElement('td');
        dateCell.textContent=task.dueDate;
        row.appendChild(dateCell);

        let toggleCell=document.createElement('td');
        let toggleBtn=document.createElement('button');
        toggleBtn.textContent=task.status;
        toggleBtn.onclick=()=>toggle(task.taskId);
        toggleBtn.classList.add(btnclass);
        toggleCell.appendChild(toggleBtn);
        row.appendChild(toggleCell);

        let deleteCell=document.createElement('td');
        let deleteBtn=document.createElement('button');
        deleteBtn.textContent='Delete';
        deleteBtn.onclick=()=>deleteTask(task.taskId);
        deleteBtn.classList.add('del-btn');
        deleteCell.appendChild(deleteBtn);
        row.appendChild(deleteCell);

        tbody.appendChild(row);
    })


    // tbody.innerHTML=''
    // tasks.sort((a,b)=>new Date(a.dueDate)-new Date(b.dueDate));
    // tasks.forEach((task,index)=>{
    //     let btnclass=task.status==='Complete'?'btn-com':'btn-incom'
    //     tbody.innerHTML+=`
    //     <tr>
    //         <td>${task.name}</td>
    //         <td>${task.desc}</td>
    //         <td>${task.dueDate}</td>
    //         <td><button class=${btnclass} onClick='toggle(${task.taskId})'>${task.status}</button></td>
    //         <td><button class='del-btn' onClick='deleteTask(${task.taskId})'>Delete</button></td>
    //     </tr>`
    // });
}

function deleteTask(id){
    tasks.forEach((task,index)=>{
        if (task.taskId===id){
            tasks.splice(index,1);
        }
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));
    displayTasks();
}

function toggle(id){
    tasks.forEach((task)=>{
        if (task.taskId===id){
            task.status=task.status==='Complete'?'Incomplete':'Complete';
        }
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));
    displayTasks();
}

displayTasks()