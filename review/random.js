var n1 = process.argv[2];
var n2 = process.argv[3];
var nx = Math.floor((Math.random() * 10) + 1);

console.log(nx);

if ((nx < n1) && (nx < n2)){
  console.log("too cold");
}

else if ((nx > n1) && (nx > n2)){
  console.log("too hot");
}

else if ((nx > n1) && (nx < n2)){
  console.log("just right");
}

else {
  console.log("just right");
}

if ((nx > n1) && (n1 > n2)){
  console.log(nx, n1, n2);
}
else if ((n1 > n2) && (n2 > nx)){
  console.log(n1, n2, nx);
}
else if ((n2 > n1) && (n1 > nx)){
  console.log(n2, n1, nx);
}
else {
  console.log("some numbers are equal");
}
