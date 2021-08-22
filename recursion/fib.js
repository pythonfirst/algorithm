function fib(n) {
  let r;
  if (n<2) {
    return n
  } else {
    r = fib(n-1) + fib(n-2); 
    return r
  }
}

console.log(fib(6))