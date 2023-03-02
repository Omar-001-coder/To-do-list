const enterTask = document.getElementById("enterTask")
const button = document.getElementById("addTask")
const check = document.getElementById("check")
const taskContainer = document.getElementById("tasksContainer")
const deleteIcon = document.querySelector(".tasks")

button.addEventListener("click", newTask)

function newTask(event) {
    event.preventDefault();
    let task = enterTask.value

    if (task === "") {
        alert("input task")
    }
    else {
        alert("task added" + task)
        handleAddtask(task)
    }

}
function handleAddtask(task) {
    const newAddedTask = `<li class="task">
<div class="content">
    <input type="checkbox" name="" id="check">
<p>${task}</p>
</div>
<i class="fa fa-trash delete" aria-hidden="true"id="Deleteicon"></i>
</li>`
    taskContainer.innerHTML += newAddedTask
}
function deleteTodos(e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove()
    }
}
deleteIcon.addEventListener("click", deleteTodos)