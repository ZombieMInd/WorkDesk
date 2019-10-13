
function addTask(){
	text=document.getElementsByClassName("text_new_task")[0].value;
	parent = document.getElementById("to_do");
	
	child = document.createElement("div");
	buttAlter = document.createElement("button");
	buttDel = document.createElement("button");
	buttMove = document.createElement("button");
	buttDone = document.createElement("button");
	litMenu = document.createElement("div");
	
	litMenu.className = "lit_menu";
	litMenu.Style = "float: left;"
	
	buttAlter.className = "alter_but button";
	//buttAlter.textContent = "Edit";
	buttAlter.onclick = editTask;
	
	buttDel.className = "del_but button";
	buttDel.textContent = "Del";
	buttDel.onclick = delTask;
	
	buttMove.className = "move_but button"
	buttMove.textContent = "Do";
	buttMove.onclick = moveTask;
	
	buttDone.className = "done_but button";
	buttDone.textContent = "Done!";
	buttDone.onclick = moveInDone;
	
	child.className = "task";
	child.innerHTML = "<p>" + text + "</p>";
	child.addEventListener("click", taskOnClick);
	
	parent.appendChild(child);
	
	child.appendChild(litMenu);
	litMenu.appendChild(buttAlter);
	litMenu.appendChild(buttMove);
	litMenu.appendChild(buttDone);
	litMenu.appendChild(buttDel);
}

function editTask() {
	parent = this.parentElement;
	editWindow = document.createElement("div");
	editWindow.className = "ed_wind";
	closeBut = document.createElement("button");
	closeBut.className = "close_but button";
	appBut = document.createElement("button");
	appBut.className = "apply_but button";
	appBut.textContent = "Apply";
	editField = document.createElement("input");
	editField.className = "edit_field"
	document.body.appendChild(editWindow);
	editWindow.appendChild(appBut);
} 

function moveTask(event) {
	parent = this.parentElement.parentElement;
	parent.parentElement.removeChild(parent);
	document.getElementsByClassName("in_progress")[0].appendChild(parent);
	stopEvent(event);
}

function delTask(event) {
	parent = this.parentElement.parentElement;
	parent.parentElement.removeChild(parent);
	console.log("wat?");
	stopEvent(event);
}

function moveInDone(event){
	parent = this.parentElement.parentElement;
	parent.parentElement.removeChild(parent);
	document.getElementsByClassName("done")[0].appendChild(parent);
	stopEvent(event);
}

function taskOnClick() {
	//console.log("!");
	//this.style.background = "#DBC6A8";
	det = document.getElementsByClassName("details_overlay")[0];
	det.style.display = "flex";
	header = this.firstChild.textContent;
	document.getElementsByClassName("details_header")[0].innerHTML = header;
	console.log(header);
}

//detClose = document.getElementsByClassName("details_close")[0];
//detClose = addEventListener("click", closeDetails);

function closeDetails(event) {
	overlay = document.getElementsByClassName("details_overlay")[0];
	overlay.style.display = "none";
	
}

function stopEvent(ev) {
	ev.stopPropagation();
}

overlay = document.getElementsByClassName("details_overlay")[0];
overlay.addEventListener("click", closeDetails, false);

det = document.getElementsByClassName("details")[0];
det.addEventListener("click", stopEvent, false);