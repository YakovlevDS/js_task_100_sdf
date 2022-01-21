// solution_1
const digital_root=n=>(n - 1) % 9 + 1
  
// solution_2

  function digital_root(n) {
    return--n%9+1;
  }

  // solution_3

  function digital_root(n) {
    return n < 10 ? n : digital_root(String(n).split('').reduce((s,v)=> +s + +v));
  }
  // solution_4

  function digital_root(n) {
    if (n < 10)
      return n;
  
    for (var sum = 0, i = 0, n = String(n); i < n.length; i++)
      sum += Number(n[i]);
     
    return digital_root(sum);
  }
  // solution_5
  function digital_root(n){
    n = eval(n.toString().split('').join('+'));

    if (n > 9) {
        return digital_root(n);
    }

    return n;
}