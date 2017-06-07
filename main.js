//Check or uncheck item click by user
var check = document.querySelector('ul');
check.addEventListener('click', function(env){
  if(env.target.tagName === 'LI') {
    env.target.classList.toggle('checked');
  }
}, false);

//Push new element
var submit = document.getElementById('submitButton');
submit.addEventListener('click', pushElement);

function pushElement(env){
  var list = document.querySelector('ul');
  var newElem = document.createElement('li');
  var text = document.getElementById('inputText').value;
  var textElem = document.createTextNode(text);
  var del = document.createElement('span');
  del.className = "delete";
    del.addEventListener('click', removeElem);
  var textDel = document.createTextNode('\u274c');
  del.appendChild(textDel);
  newElem.appendChild(del);
  newElem.appendChild(textElem);
  list.appendChild(newElem);
}

//Add delete buttom
var list = document.querySelectorAll('li');
var i;
for (i = 0; i < list.length; i++)
{
  var del = document.createElement('span');
  del.className = "delete";
  del.addEventListener('click', removeElem);
  var textDel = document.createTextNode('\u274c');
  del.appendChild(textDel);
  list[i].appendChild(del);
}

//Click to delete button for delete element
function removeElem(env)
{
  var list = document.querySelector('ul');
  var elem = env.target;
  elem = elem.parentNode;
  list.removeChild(elem);

}
