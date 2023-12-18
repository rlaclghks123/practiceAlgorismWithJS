// 1. 정수 n을 입력받아 n의 약수를 구한다.
// 2. 1에서 구한 n의 약수들을 reduce를 활용하여 모두 더한다
// 3. 1에서 더한 값을 리턴한다.

// 1번째 방법
function yaksu(num) {
  const set = new Set();

  Array.from({ length: num + 1 }).forEach((_, i) => {
    if (Number.isInteger(num / i)) set.add(i);
  });

  return [...set];
}

function solution(n) {
  const yaksus = yaksu(n);
  const sum = yaksus.reduce((a, c) => a + c, 0);

  return sum;
}

// 2번째 방법
function yaksu(num) {
  const result = [];
  let temp = 0;

  while (temp <= num) {
    if (num % temp === 0) {
      result.push(temp);
    }
    temp++;
  }

  return result;
}

function solution(n) {
  const yaksus = yaksu(n);
  const sum = yaksus.reduce((a, c) => a + c, 0);

  return sum;
}
