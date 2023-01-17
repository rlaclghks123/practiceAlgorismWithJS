// n개의 최소 공배수를 구해라

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function solution(arr) {
  var answer = 0;
  let first = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const lcm = (first * arr[i]) / gcd(first, arr[i]);
    first = lcm;
  }
  return first;
}

solution([2, 6, 8, 14]); //	168

solution([1, 2, 3]); // 6

// 다른사람의 코드
// reduce를 사용하여 더해줬다.

function nlcm(num) {
  return num.reduce((a, b) => (a * b) / gcd(a, b));
}

function gcd(a, b) {
  return a % b ? gcd(b, a % b) : b;
}
