// 1. 콜라츠 숫자인지 확인합니다.
// 1-1. 입력된 수가 짝수라면 2로 나눕니다.
// 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
// 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
// 3. 주어진 수가 1인 경우에는 0을, 작업을 500번 반복할 때까지 1이 되지 않는다면 –1을 반환한다.

function getCollatzNumber(num) {
  let cnt = 0;

  while (cnt < 500) {
    if (num === 1) return cnt;

    if (num % 2 === 0) {
      num /= 2;
      cnt++;
      continue;
    }

    if (num % 2 === 1) {
      num = num * 3 + 1;
      cnt++;
      continue;
    }
  }

  return -1;
}

function solution(num) {
  const collatzNumber = getCollatzNumber(num);

  return collatzNumber;
}
