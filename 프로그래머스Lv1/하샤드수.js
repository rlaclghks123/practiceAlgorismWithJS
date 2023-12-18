// 1. 하샤드 숫자인지 확인한다.
// 1-1. 각 자리수의 합을 구한다.
// 1-2. 주어진 값인 x가 각 자리수의 합으로 나눠떨어지는지 확인한다.
// 1-3. 1-2에서 나눠 떨어진다면 하샤드 수
// 1-4. 1-2에서 나눠 떨어지지 않는다면 하샤드 수가 아니다.

// 2. 하샤드수인경우 true, 아닌경우 false를 반환

function checkHashad(x) {
  const sum = [...String(x)].reduce((a, c) => a + Number(c), 0);

  return x % sum === 0 ? true : false;
}

function solution(x) {
  const result = checkHashad(x);

  return result;
}
