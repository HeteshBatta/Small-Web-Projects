var parent = document.getElementById("list");
var btn = document.getElementById("btn");
var input = document.getElementById("task");
task.onkeyup = function(event)
{

  var code = event.keyCode;
  if(code==13)
  {
  if(value=="")
    {
      alert("List cannot be empty");
      return
    }
  var ele = document.createElement("li");
  var del = document.createElement("button");
  var value = input.value;
  del.innerHTML = "X";
  ele.innerHTML = value;
  parent.appendChild(ele);
  ele.appendChild(del);
  ele.setAttribute("Style" , "color:red");
  del.onclick = function()
  {
    parent.removeChild(ele);
  }
  input.value="";
}
}
bigX.onclick = function()
{
parent.innerHTML="";
}
btn.onclick = function()
{
  var ele = document.createElement("li");
  ele.setAttribute("Style" , "color:red");
  var value = input.value;
  if(value=="")
  {
    alert("List cannot be empty");
    return
  }
  ele.innerHTML = value;
  parent.appendChild(ele);
  input.value="";
}
