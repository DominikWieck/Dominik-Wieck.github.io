var taskcounter = 0;
window.addEventListener("load", function () {
    document.querySelector(".pushbutton").addEventListener("click", AddTaskText);
    document.querySelector(".number").addEventListener("click", AddTaskText);
});
function AddTaskText() {
    var newtask = document.querySelector(".newtask").value;
    console.log(newtask);
    addTaskToList(newtask); // Funktion
    // tslint:disable-next-line:typedef
    var element = document.querySelector(".Rahmen");
    // tslint:disable-next-line:typedef
    var numberofChildren = element.children.length;
    taskcounter = numberofChildren;
    console.log("Die Anzahl der To-Dos lautet:" + numberofChildren);
    document.querySelector(".number").innerHTML = numberofChildren + " in total";
}
function addTaskToList(newTaskValue) {
    var addElement = document.createElement("div");
    addElement.setAttribute("class", "Template");
    addElement.setAttribute("id", "TaskId" + taskcounter); // Template konstruiert
    var myHtmlTemplate = ""; // Inhalte
    myHtmlTemplate += "<button onclick=\"CheckedButton(this)\" class=\"far fa-circle checkbox\" id=\"circle" + taskcounter + "\"></button>";
    myHtmlTemplate += "<input class=\"firsttask\" id=\"firsttask" + taskcounter + "\" value=\"" + newTaskValue + "\" ></input>";
    myHtmlTemplate += "<button onclick=\"DeleteTaskText(this)\" class=\"far fa-trash-alt trash\" id=\"delete" + taskcounter + "\"></button>";
    addElement.innerHTML = myHtmlTemplate;
    document.querySelector(".Rahmen").appendChild(addElement); // Hinzufügen vom Template
    console.log("addTasktoList:" + newTaskValue);
}
function DeleteTaskText(trash) {
    console.log("This is deleating the task");
    trash.parentElement.remove(); // div wird bei click auf bin gelöscht
    taskcounter--;
    // Counter
    var element = document.querySelector(".Rahmen");
    var numberofChildren = element.children.length;
    document.querySelector(".number").innerHTML = numberofChildren + " in total";
}
function CheckedButton(ClickedButton) {
    if (ClickedButton.classList.contains("fa-circle")) {
        ClickedButton.classList.remove("fa-circle");
        ClickedButton.classList.add("fa-check-circle");
    }
    else {
        ClickedButton.classList.remove("fa-check-circle");
        ClickedButton.classList.add("fa-circle");
    }
}
//# sourceMappingURL=To_Do.js.map