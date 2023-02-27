var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


// form submit event
form.addEventListener('submit', additem);

//delete event
itemList.addEventListener('click', removeItem);


//add edit

// itemList.addEventListener('click',edititem);

//filter event

filter.addEventListener('keyup', filterItems)

// add item
function additem(e) {
    e.preventDefault();


    //get input value
    var newItem = document.getElementById('item').value;


    //  create new li element
    var li = document.createElement('li');

    //add class
    li.classname = 'list-group-item';

    // add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //create delete buuton
    var deleteBtn = document.createElement('button');

    //add class to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    //appendTextnode
    deleteBtn.appendChild(document.createTextNode('x'));


    //append button to li
    li.appendChild(deleteBtn);


   
    

 //create edit buuton
 var editBtn = document.createElement('button');

 //add class to delete button
 editBtn.className = 'btn btn-success btn-sm float-right edit';

 //appendTextnode
 editBtn.appendChild(document.createTextNode('✔'));

 //append button to li
     li.appendChild(editBtn);


     itemList.appendChild(li);
   

}

//remove item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('are you sure')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


//save local storage

function saveToLocalStorage(event){
    event.preventDefault();
    var name=event.target.username.value;
    localStorage.setItem('name',name);

}



// 















//filteritems

function filterItems(e) {
    //convert to text to lowercase
    var text = e.target.value.toLowerCase();
    // console.log(text);
    var items = itemList.getElementsByTagName('li');
    //    console.log(items); (it give html collection)

    //to convert htmlcollection into an array
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
    })




    // var items=itemList.getElementsByTagName('li')
}