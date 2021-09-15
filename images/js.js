
let BSFunction = function (arr, x, start, end) {

  if (start > end) return false;

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === x) return true;

  if (arr[mid] > x)
    return BSFunction(arr, x, start, mid - 1);
  else

    return BSFunction(arr, x, mid + 1, end);
}

let arr = [1, 3, 5, 7, 8, 9];
let x = 5;

if (BSFunction(arr, x, 0, arr.length - 1))
  document.write("Element found!<br>");
else document.write("Element not found!<br>");

x = 6;

if (BSFunction(arr, x, 0, arr.length - 1))
  document.write("Element found!<br>");
else document.write("Element not found!<br>");
