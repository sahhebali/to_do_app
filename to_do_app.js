// alert("to_do_app")

function g_e_by_id(id) {
    return document.getElementById(id);
}
const addButton = g_e_by_id("add_new_button");
const newTaskButton = g_e_by_id("new_task_input");
const newTask = g_e_by_id("daily_task");

// add a click event listener to add button
addButton.addEventListener("click", function (event) {
    var taskName = newTaskButton.value;
    if (!taskName) {
        return;
    }
    newTaskButton.value = "";
    addNewTask(taskName);
});

function addNewTask(text) {
    const task_Two = document.createElement("div");
    task_Two.className = "task";
    task_Two.innerHTML = `<li>${text}</li>
    <button id='check' class="material-icons ">done_outline</button>
    <button id='edit' class="material-icons">edit_note</button>
    <button class="material-icons" id="delete">delete_outline</button>
    `;

    newTask.appendChild(task_Two);
}

newTask.addEventListener("click", function (event) {
    // console.log(event.target);
    if (event.target.id == "delete") {
        deleteBtn(event);
    } else if (event.target.id == "edit") {
        edit(event)
    } else if (event.target.id == "check") {
        check(event)
    }
    // console.log("event called");
});

function deleteBtn(event) {
    event.target.parentElement.remove();
}

function check(event) {
    const li1 = event.target.parentElement.firstElementChild;
    li1.classList.toggle('check')

}

function edit(event) {
    const li1 = event.target.parentElement.firstElementChild;
    const prevues = li1.innerText;
    li1.innerHTML = ''

    const input = document.createElement('input');
    input.type='text'
    input.value=prevues;

    input.addEventListener('keypress',function(e){
        if(e.key == 'Enter'){
            const inputModify = e.target.value;
            li1.innerHTML = ''
            li1.innerText = inputModify
            event.target.style.display = 'inline'
        }
    })
    li1.appendChild(input)
    event.target.style.display = 'none'
} 