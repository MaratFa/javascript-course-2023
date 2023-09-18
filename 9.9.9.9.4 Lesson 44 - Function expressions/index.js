// function expression = function without a name (anonymous function)
//                       avoid pollutting the global scope with names
//                       Write it, then forget about it


let count = 0;

document.getElementById("decreaseButton").onclick = function(){
  count--;
  document.getElementById("myLabel").innerHTML = count;
}

document.getElementById("increaseButton").onclick = function(){
  count++;
  document.getElementById("myLabel").innerHTML = count;
}

