var form=document.getElementById('addForm');
var itemList=document.getElementById('items');


// form submit event
form.addEventListener('submit',additem);


itemList.addEventListener('click',removeItem)


// add item
function additem(e){
   e.preventDefault();


//get input value
 var newItem=document.getElementById('item').value;


//  create new li element
var li =document.createElement('li');

//add class
li.classname='list-group-item';

// add text node with input value
li.appendChild(document.createTextNode(newItem));

//create delete buuton
var deleteBtn=document.createElement('button');

//add class to delete button
deleteBtn.className='btn btn-danger btn-sm float-right delete';

//appendTextnode
deleteBtn.appendChild(document.createTextNode('x'));


//append button to li
li.appendChild(deleteBtn);


itemList.appendChild(li);

}




function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}