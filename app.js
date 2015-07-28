var arr = [];//empty array to hold todo items
var form = document.getElementById("itemForm");

//----------------Check Box Function---------------
function checkFunc(){
  var cbId = this.id.replace("cb", "");
  var itemContent = document.getElementById("itm" + cbId);
  if(this.checked){
  itemContent.style.textDecoration = "line-through";
  itemContent.style.opacity = "0.5";
  } else {
    itemContent.style.textDecoration = "none";
    itemContent.style.opacity = "1";
  }
}

//-----------------Delete Button Function-----------------

function dltFunc(){
  var dtId = this.id.replace("dt", "");
  var uSure = confirm("Are you sure you want to delete " + arr[dtId] +"?");
  if (uSure === true){
  var list = document.getElementById("list");// Get the <ul>
list.removeChild(list.childNodes[dtId]);
arr.splice(dtId);
}

}





//----------------------Submit Button--------------
form.addEventListener("submit", function (evt){//This runs when the Submit button is clicked
		var toDoItem = document.getElementById("toDo").value;
        if (toDoItem === '' || toDoItem === ' '){ //Edge Casing
          alert("You must input something");
          evt.preventDefault();
        } else {
        arr.push(toDoItem);
        console.log(arr);
        evt.preventDefault();//This stops the submit button from refreshing the page.
  
  var items = document.getElementById("list");
   document.getElementById('list').innerHTML = '';//clears the ul
          
  for (var i = 0; i < arr.length; i++ ) {
        var item = document.createElement("li");//create list item
 
    //------------Check Box-----------------------
        var cb = document.createElement( "input" );//create checkbox
          cb.type = "checkbox";
          cb.id = "cb" + i;
          cb.onclick = checkFunc;
        var span = document.createElement("span");
        span.innerText = arr[i];
        span.id = "itm" + i;
    
    //------------Delete Button--------------------
        var dlt = document.createElement("button");//create delete button
          dlt.class="btn btn-default btn-lg";
          dlt.type = "button";
          dlt.onclick = dltFunc;
          dlt.id = "dt" + i;
          dlt.value = "Delete";
          dlt.name = "Delete";

    //------------List Items-----------------------
        item.className = "list-group-item"; //this class is for Bootstrap
        item.appendChild(cb);
        item.appendChild(dlt);
        item.appendChild(span);
        items.appendChild(item);
        //item.appendChild(dlt);
  }}
});


