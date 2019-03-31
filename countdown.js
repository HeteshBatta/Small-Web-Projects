var div = document.getElementById('div');
var start = document.getElementById('start');
var pause = document.getElementById('pause');
var input = document.getElementById('input');
var reset = document.getElementById('reset');
var time = 0;
var box;
input.addEventListener("input" , function(abc)
{
  box = input.value;
});

start.addEventListener("click" , function(abc)
{
    time = time+1;
    var intervalid = setInterval(function()
  {
    if(input.value==0)
    {
      alert("Done");
      clearInterval(intervalid);
    }
    else
    {
        input.value = input.value - 1;
    }
  },1000);
  pause.addEventListener("click" , function(abc)
{
  clearInterval(intervalid);
});
reset.addEventListener("click" , function(abc)
{
  clearInterval(intervalid);
  input.value = box;
});
});
