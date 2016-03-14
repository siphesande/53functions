function fibonacci(n) {
  var f = [];
  for (var c = 0; c < n; ++c) {
    f.push((c < 2) ? c : f[c-1] + f[c-2]);
  }
  //console.log(f);
  return f;
}

fibonacci(6);