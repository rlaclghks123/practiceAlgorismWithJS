// 최대 공약수와 최소공배수를 Return

function gcdFn(a, b) {
  if (b === 0) return a;
  return gcdFn(b, a % b);
}
function solution(n, m) {
  var answer = [];

  // 1. 최대공약수를 구해준다.
  const gcd = gcdFn(n, m);

  // 2. 최소 공배수를 구해준다.
  const lcm = (n * m) / gcd;
  answer = [gcd, lcm];
  return answer;
}

solution(3, 12); // [3, 12]

solution(2, 5); // [1, 10]
