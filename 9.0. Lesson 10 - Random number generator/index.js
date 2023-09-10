let x, y, z;

document.getElementById("rollButton").onclick = function () {
  let x = Math.round(Math.random() * 6);
  let y = Math.round(Math.random() * 6);
  let z = Math.round(Math.random() * 6);

  document.getElementById("xlabel").innerHTML = x;
  document.getElementById("ylabel").innerHTML = y;
  document.getElementById("zlabel").innerHTML = z;
};
