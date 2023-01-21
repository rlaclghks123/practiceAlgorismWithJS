// n을 k진수로 바꿨을때 변환된 수 안에 아래의 조건에 맞는 소수의 개수를 return
// n은 1,000,000만 이하

// 0P0처럼 소수 양쪽에 0이 있는 경우
// P0처럼 소수 오른쪽에만 0이 있고 왼쪽에는 아무것도 없는 경우
// 0P처럼 소수 왼쪽에만 0이 있고 오른쪽에는 아무것도 없는 경우
// P처럼 소수 양쪽에 아무것도 없는 경우
// 단, P는 각 자릿수에 0을 포함하지 않는 소수입니다.
// 예를 들어, 101은 P가 될 수 없습니다.
// 212 는 10진법일 경우 소수여야 합니다.

function primecheck(n) {
  if (n === 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function solution(n, k) {
  var answer = 0;

  // 1. n을 k진수로 바꾼다.
  const transfer = n.toString(k);

  // 2. '0'을 기준으로 나눠준뒤, 소수인지 아닌지 확인한다.
  transfer.split('0').forEach((item) => {
    if (item === '') return;
    let prime = primecheck(Number(item));
    if (prime) {
      answer++;
    }
  });
  return answer;
}

solution(437674, 3); // 3
solution(110011, 10); // 2

// 다른사람의 코드
// filter를 통해 개수를 측정했다.
function isPrime(num) {
  if (!num || num === 1) return false;
  for (let i = 2; i <= +Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(n, k) {
  // k진법으로 나눈 후 spli
  const candidates = n.toString(k).split('0');
  // 소수 개수 세기
  return candidates.filter((v) => isPrime(+v)).length;
}

function isPrime(n) {
  if (n === 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function solution(n, k) {
  let transfer = n.toString(k);
  let answer = 0;

  transfer.split('0').forEach((item) => {
    if (item === '') return;
    const prime = isPrime(Number(item));
    if (prime) answer++;
  });
  return answer;
}
