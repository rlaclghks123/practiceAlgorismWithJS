// 1. 약수의 개수를 구한다.
// 1-1. 약수의 개수가 짝수인 경우 해당 숫자를 총합에서 더한다.
// 1-2. 약수의 개수가 홀수인 경우 해당 숫자를 총합에서 뺀다.

function getYaksuCount(num) {
  const set = new Set();

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) set.add(i);
  }

  return set.size;
}

function solution(left, right) {
  let sum = 0;

  for (let i = left; i <= right; i++) {
    const yaksuCount = getYaksuCount(i);
    yaksuCount % 2 === 0 ? (sum += i) : (sum -= i);
  }

  return sum;
}
