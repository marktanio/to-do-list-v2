const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("listCon");

//create add task function, if empty, alert
function addTask(){
    if(inputBox.value === ''){
        alert("Please add something");
    }
    else{
        let li = document.createElement("li"); //create li, add value, append
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        inputBox.value = "";
    }
    inputBox.value = "";
    saveData();
 }

 //event listener for check and uncheck, on click ni 
listContainer.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();


