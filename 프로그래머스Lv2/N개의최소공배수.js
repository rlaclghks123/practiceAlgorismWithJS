// 1. arr를 순회하면서 2개의 숫자(현재값, 이때까지의 최소공배수)의 최대 공약수를 구한다.
// 2. 최대공약수를 통해 최소공배수를 구한다.

// 최소공배수 : 두 수의 곱 / 최대공약수

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function solution(arr) {
  let ans = 1;
  arr.forEach((num) => {
    ans = (num * ans) / gcd(num, ans);
  });
  return ans;
}
