var sum_to_n_a = function (n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

var sum_to_n_b = function (n) {
  if (n <= 1) {
    return n;
  }
  return n + sum_to_n_b(n - 1);
};

var sum_to_n_c = function (n) {
  return (n * (n + 1)) / 2;
};

const runMain = () => {
  try {
    console.log(sum_to_n_a(999));
    console.log(sum_to_n_b(999));
    console.log(sum_to_n_c(999));
  } catch (err) {
    console.error("Error Encountered: ", err);
  }
};

runMain();
