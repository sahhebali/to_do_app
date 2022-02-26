
// alert("to_do_app")


function g_e_by_id(id){
    return document.getElementById(id)
}
const addButton= g_e_by_id("add_new_button")
const newTaskButton = g_e_by_id("new_task_input")
const newTask = g_e_by_id("daily_task")


// add a click event listener to add button
addButton.addEventListener("click",(e)=>{
    var taskName = newTaskButton.value;
    if(!taskName){
        return;
    }
    new_task_input.value = ''
    addNewTask(taskName)
 
})
function addNewTask(text){
    const task_Two = document.createElement("div")
    task_Two.className="task";
    task_Two.innerHTML = `<li>${text}</li>
    <button class="material-icons">done_outline</button>
    <button class="material-icons">edit_note</button>
    <button class="material-icons">delete_outline</button>
    `;

    newTask.appendChild(task_Two)
   
}
