let grades = [100, 50, 90, 80, 70];

grades = grades.sort(ascendingSort);

grades.forEach((element) => console.log(element))

function descendingSort(x, y) {
  return y - x;
}

function ascendingSort(x, y) {
  return x - y;
}