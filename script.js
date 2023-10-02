// create var for elements(input and button)
const inputBox = document.getElementById("input-box");
const listContainer= document.getElementById("list-container");

// defining addTask fun in js
function addTask(){
    if(inputBox.value === ''){
        alert("you must write something!");
    }
    else{
        let li = document.createElement("li");
        // creating html ele with tag name li and storing that ele in li var
        li.innerHTML = inputBox.value;
        // adding text in that li ele
        listContainer.appendChild(li);
        // display the li under list container
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        // creating cross at the end of each task
    }
    inputBox.value=" ";
    saveData();
}

// js for click fun
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listConatiner.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
