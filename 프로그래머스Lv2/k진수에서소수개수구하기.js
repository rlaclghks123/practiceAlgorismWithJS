// n을 k진수로 바꿨을때 변환된 수 안에 아래의 조건에 맞는 소수의 개수를 return
// n은 1,000,000만 이하

// 0P0처럼 소수 양쪽에 0이 있는 경우
// P0처럼 소수 오른쪽에만 0이 있고 왼쪽에는 아무것도 없는 경우
// 0P처럼 소수 왼쪽에만 0이 있고 오른쪽에는 아무것도 없는 경우
// P처럼 소수 양쪽에 아무것도 없는 경우
// 단, P는 각 자릿수에 0을 포함하지 않는 소수입니다.
// 예를 들어, 101은 P가 될 수 없습니다.
// 212 는 10진법일 경우 소수여야 합니다.

// 1. k진수로 바꾼다.
// 2. 0을 기준으로 split 한다.
// 3. split한 값을 숫자 형태로 바꾸고, 각 요소가 소수인지 확인한다.
// 4. 소수인 경우 true, 아닌경우 false를 반환하여 filter를 사용하여 true인 개수를 리턴한다.

function primecheck(n) {
  if (n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}

function solution(n, k) {
  let changed = n.toString(k);
  let splited = changed.split('0');

  return splited.filter((item) => primecheck(Number(item))).length;
}
