// // // alert('123');
// // //Examine the document object
// // // console.dir(document);
// // // alert('786');
// // // console.log(document.URL);
// // // console.log(document.title);
// // // document.title ='123';
// // // console.log(document.doctype);
// // console.log(document.head);
// // console.log(document.body);
// // console.log(document.all);
// // console.log(document.all[10]);
// // console.log(document.forms);
// // console.log(document.links);
// // // document.all[10].textContent = "Hello";
// // console.log(document.images);

// //GETELEMENT BY ID
// // console.log(document.getElementById('header-title'));
// // var headerTitle = document.getElementById('header-title');
// // var header = document.getElementById('main-header');
// // console.log(headerTitle);
// // headerTitle.textContent = "Hello";
// // headerTitle.innerHTML = "GoodBYE";
// // console.log(headerTitle.innerText);
// // headerTitle.innerHTML = '<h3>Hello</h3>';
// // header.style.borderBottom = 'solid 3px #000';

// // GETELEMENTBYCLASSNAME
// // var items = document.getElementsByClassName('list-group-item');
// // console.log(items);
// // console.log(items[1]);
// // items[2].textContent ="hell02";
// // items[2].style.fontWeight = 'bold';
// // // items[2].style.backgroundColor = 'yellow';

// // // Gives error
// // // items.style.backgroundColor = '#f4f4f4';

// // for(var i = 0; items.length; i++)
// // {
// //     items[i].style.backgroundColor = '#f4f4f4';
// // }

// //GETELEMENTBYTAGNAME
// // var li = document.getElementsByClassName('list-group-item');
// // console.log(li);
// // console.log(li[1]);
// // li[2].textContent ="hell02";
// // li[2].style.fontWeight = 'bold';
// // // items[2].style.backgroundColor = 'yellow';

// // // Gives error
// // // items.style.backgroundColor = '#f4f4f4';

// // for(var i = 0; li.length; i++)
// // {
// //     li[i].style.backgroundColor = '#f4f4f4';
// // items[2].textContent = 'item 3';
// // }


// //Query Selector//
// // var header = document.querySelector('main-header');
// // // header.style.borderBottom = 'solid 4px #ccc';

// // var input = document.querySelector('input');
// // input.value = 'hello world'

// // var input = document.querySelector('input[type="submit"]');
// // input.value = 'send';

// // var item = document.querySelector('.list-group-item');
// // item.style.color = 'red';

// // var lastItem = document.querySelector('.list-group-item:last-child');
// // lastItem.style.color = 'blue';

// // var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// // secondItem.style.color = 'coral';

// //query selector all//
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles.textContent = 'hello';
// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');
 
// for(var i=0; i < odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }
//   //Traversing the dom //
//   var itemList = document.querySelector('#items');
//   //parentnode
// //   console.log(itemList.parentNode);
// //   itemList.parentNode.style.backgroundColor = '#f4f4f4';
// //   console.log(itemList.parentNode.parentNode.parentNode);

// // //parentElement
// // console.log(itemList.parentElement);
// //  itemList.parentElement.style.backgroundColor = '#f4f4f4';
// //   console.log(itemList.parentElement.parentElement.parentElement);

// //childnode
// // console.log(itemList.childNodes);
// // console.log(itemList.children);
// // console.log(itemList.children[1]);
// // itemList.children[1].style.backgroundColor = "yellow";

// // //firstChild
// // console.log(itemList.firstChild);
// // //firstelement child
// // console.log(itemList.firstElementChild);
// // itemList.firstElementChild.textContent = 'hello 1';

// // /lastChild
// // console.log(itemList.lastChild);
// //firstelement child
// // console.log(itemList.lastElementChild);
// //  itemList.lastElementChild.textContent = 'hello 1';

// //Next siblings
// // console.log(itemList.nextSibling);
// // //Next Elementsiblings
// // console.log(itemList.nextElementSibling);

// //privious siblings
// // console.log(itemList.previousSibling);

// //priviouselement siblings
// // console.log(itemList.previousElementSibling);
// // itemList.previousElementSibling.style.color = 'green';
// // create element

// //create a div
// //  var newDiv = document.createElement('div');

// //  //add class
// //  newDiv.className='hello1';

// //  //add id
// //  newDiv.id='hello';

// //  //add atr
// //  newDiv.setAttribute('title','hello div');
// //  // create text node
// //  var newDivText = document.createTextNode('hello world');
// //  //add text to div
// //  newDiv.appendChild(newDivText);
// //  var container = document.querySelector('header .container');
// //  var h1 = document.querySelector('header h1');
// //  console.log(newDiv);
// //  newDiv.style.fontSize = '30px';
// //  container.insertBefore(newDiv, h1);
// //events
// // var button = document.getElementById('button').addEventListener('click',buttonClick);
// // function buttonClick(e){
//   // // console.log('Button Clicked');
//   // document.getElementById('header-title').textContent = 'changed';
//   // document.querySelector('#main').style.backgroundColor = '#f4f4f4';
//   // // console.log(e);
//   // console.log(e.target);
//   // console.log(e.target.id);
//   // console.log(e.target.className);
//   // console.log(e.target.classList);
//   // // var output = document.getElementById('output');
//   // // output.innerHTML = '<h3>"+e.target.id+"</h3>';
//   // console.log(e.type);
//   // console.log(e.clientX);
//   // console.log(e.clientY);
//   // console.log(e.offsetX);
// //   console.log(e.altKey);
// //   console.log(e.ctrlKey);
// //   console.log(e.shiftKey);
// // }
// var button = document.getElementById('button');
// var box = document.getElementById('box');

// // button.addEventListener('dblclick',runEvent);
// // button.addEventListener('mousedown',runEvent);
// // button.addEventListener('mouseup',runEvent);

// // box.addEventListener('mouseenter',runEvent);
// // box.addEventListener('mouseleave',runEvent);
// // box.addEventListener('mouseover',runEvent);
// // box.addEventListener('mouseout',runEvent);

// button.addEventListener('mousemove',runEvent);

// function runEvent(e){
// console.log('EVENT TYPE: '+e.type);
// // output.innerHTML = '<h3>MouseX: ' +e.offsetX+'</h3><h3>MouseY: '+e.offsetY+'</h3>';
// document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
// }
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form Submit event 
 form.addEventListener('submit', addItem);
 //delete event
 itemList.addEventListener('click',removeItem);
 //filter event
 filter.addEventListener('keyup',filterItems);


// //Add item
function addItem(e){
  e.preventDefault();
  
//   //get input value
  var newItem = document.getElementById('item').value;

//   //Createnew li element 
  var li = document.createElement('li');
  


//     //add class
  li.className = 'list-group-item';
     
//     //add text node with input value
   li.appendChild(document.createTextNode(newItem));

   //create del button element
   var deleteBtn = document.createElement('button');

   //Add classes to del button
   deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
   // append text node
   deleteBtn.appendChild(document.createTextNode('X'));
   li.appendChild(deleteBtn);

itemList.appendChild(li);
}
//Remove item
function removeItem(e){
if(e.target.classList.contains('delete')){
  if(confirm('Are you Sure ?')){
    var li = e.target.parentElement;
    itemList.removeChild(li);
  }
}
}
//filter items
function filterItems(e){
  //convert text to lowercase
  var text = e.target.value.toLowerCase();
  //get list
  var items = itemList.getElementsByTagName('li');
  // convert to an array 
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLocaleLowerCase().indexOf(text) != -1){
item.style.display = 'block';
    }
    else{
      item.style.display = 'none';
    }

  });
}