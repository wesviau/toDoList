var arr = [];//empty array to hold todo items
var form = document.getElementById("itemForm");

//----------------Check Box Function---------------
function checkFunc(){
  var cbId = this.id.replace("cb", "");//Checks list item #
  var itemContent = document.getElementById("itm" + cbId); // sets the # to equivalent Span id
  if(this.checked){ //Check toggeling action
  itemContent.style.textDecoration = "line-through";
  itemContent.style.opacity = "0.5";
  } else {
    itemContent.style.textDecoration = "none";
    itemContent.style.opacity = "1";
  }
}

//-----------------Delete Button Function-----------------

function dltFunc(){
  var dtId = this.id.replace("dt", "");//Checks list item #
  var contentItem = document.getElementById("itm" + dtId); // sets the # to equivalent Span id
  var uSure = confirm("Are you sure you want to delete " + contentItem.textContent +"?");
  if (uSure === true){
  arr.splice(dtId, 1); // removes list item from array using the id # of the delete button clicked
  populate(); //re-populates the list without the new item
  }//end of if statement
}// end of Delete functioin

//---------------Edit Button Function---------------------

function edtFunc(){
  var edId = this.id.replace("ed", ""); //Checks list item #
  var iContent = document.getElementById("itm" + edId);
  var editItem = prompt("What would you like to change this item to?", iContent.textContent);
  iContent.textContent = editItem;
  arr.splice(edId, 1, editItem);
}

//----------------------Populate--------------------------
function populate() {
  var items = document.getElementById("list");// this is the id of the ul
   document.getElementById('list').innerHTML = '';//clears the ul
  
   for (var i = 0; i < arr.length; i++ ) { //loop to populate list using array
     
        var item = document.createElement("li");//create list item
 
    //------------Check Box------------
        var cb = document.createElement( "input" );//create checkbox
          cb.type = "checkbox";
          //cb.setAttribute("class", "fa fa-check-square" );
          cb.id = "cb" + i;
          cb.onclick = checkFunc;
        var span = document.createElement("span");//create text area
          span.innerText = arr[i];//add array item to span
          span.id = "itm" + i;
    
    //------------Delete Button--------
        var dlt = document.createElement("button");//create delete button
          dlt.type = "button";
          dlt.setAttribute("class", "fa fa-trash" );
          dlt.setAttribute("style", "margin: 10px");
          dlt.setAttribute("style", "float:right" );
          //dlt.style.visibility='hidden';
          //var text = document.createTextNode("Delete"); // Create a text node
          //dlt.appendChild(text); //adds the text to the button
          //dlt.innerHTML = "Delete"; //sets button text to Delete
          dlt.onclick = dltFunc;
          dlt.id = "dt" + i;
     
     //-----------Edit Button----------
     var edt = document.createElement("button");//create edit button
       edt.type = "button";
       edt.setAttribute("class", "fa fa-pencil" );
       edt.setAttribute("style", "float:right" );
       //edt.style.visibility='hidden';
       //edt.setAttribute("style", "margin: 10px");
       edt.onclick = edtFunc;
       edt.id = "ed" + i;
          

    //------------List Items-----------
        item.className = "list-group-item"; //this class is for Bootstrap
        item.appendChild(cb);
        item.appendChild(span);
        item.appendChild(dlt);
        item.appendChild(edt);
        items.appendChild(item);
  } // end of for loop
} // end of populate function

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
  
    form.reset();      
    populate();     
 }
});