// 1. 소수를 체크하는 함수를 만든다.
// 2. 1부터 n까지 소수를 확인한다.

function getIsPrimeArr(n) {
  const check = Array.from({ length: n }, () => false);

  check[0] = true;
  check[1] = true;

  for (let i = 2; i * i <= n; i++) {
    if (check[i]) continue;

    // 어떤수의 배수는 약수를 가지기 때문에 소수가 아니다. 따라서 어떤수의 배수는 모두 true로 바꿔준다.
    for (let j = i + i; j <= n; j += i) {
      check[j] = true;
    }
  }

  return check;
}

function solution(n) {
  const isPrimeBox = getIsPrimeArr(n);
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    if (!isPrimeBox[i]) sum++;
  }

  return sum;
}
