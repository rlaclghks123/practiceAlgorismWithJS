// 1. k진수로 값을 바꾼다.
// 2. 0을 기준으로 split 해준다.
// 3. split된 숫자들을 순회하면서 filter를 통해 소수인 경우만 찾아내 출력합니다.

function solution(n, k) {
  const changed = n.toString(k);
  const splited = changed.split('0');

  return splited.filter((num) => sosu(Number(num))).length;
}

function sosu(n) {
  if (n <= 1) return false;

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }

  return true;
}
