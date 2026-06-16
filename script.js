const STORAGE_KEY='tasks';
const COMPLETE='Complete';
const INCOMPLETE='Incomplete';

let tasks=JSON.parse(localStorage.getItem('tasks'))||[];

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
    let task={name:taskName.value,desc:taskDesc.value,status:INCOMPLETE,dueDate:taskDue.value,taskId:Date.now()};
    tasks.push(task);
    taskName.value='';
    taskDesc.value='';
    taskDue.value='';
    localStorage.setItem('tasks',JSON.stringify(tasks));
    displayTasks();
}

function displayTasks(){
    let tbody=document.getElementById('table-body');
    tbody.innerHTML='';
    tasks.sort((a,b)=>new Date(a.dueDate)-new Date(b.dueDate));
    tasks.forEach((task,index)=>{
        let row=document.createElement('tr');
        let btnclass=task.status===COMPLETE?'btn-success':'btn-warning'

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
        toggleBtn.classList.add('btn');
        toggleCell.appendChild(toggleBtn);
        row.appendChild(toggleCell);

        let deleteCell=document.createElement('td');
        let deleteBtn=document.createElement('button');
        deleteBtn.textContent='Delete';
        deleteBtn.onclick=()=>deleteTask(task.taskId);
        deleteBtn.classList.add('btn');
        deleteBtn.classList.add('btn-danger');
        deleteCell.appendChild(deleteBtn);
        row.appendChild(deleteCell);

        tbody.appendChild(row);
    })
}

function deleteTask(id){
    tasks=tasks.filter(task => task.taskId!=id);
    localStorage.setItem('tasks',JSON.stringify(tasks));
    displayTasks();
}

function toggle(id){
    tasks.forEach((task)=>{
        if (task.taskId===id){
            task.status=task.status===COMPLETE?INCOMPLETE:COMPLETE;
        }
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));
    displayTasks();
}

displayTasks()