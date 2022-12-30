// 유한소수인지 판별하며 조건은 기약분수로 나타내었을 때, 분모의 소인수가 2와 5만 존재
// a/b가 유한소수이면 1을, 무한소수라면 2를 return

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function solution(a, b) {
  var answer = 0;

  // 1. 기약분수로 나타낸다.

  // 1-1 최대공약수를 구해준다.
  const gcdNum = gcd(a, b);

  // 1-2 분모(b)를 최대공약수로 나눠준다.
  answer = b / gcdNum;

  // 2. 분모가 2와 5로 나눠 떨어지는지 확인하여 2,5로 나눠질때까지 계속 나눠준다.
  while (answer % 2 === 0 || answer % 5 === 0) {
    answer % 2 === 0 ? (answer /= 2) : (answer /= 5);
  }

  // 3. 출력한다. b가 1이면 유한소수 아니면 무한소수.
  return answer === 1 ? 1 : 2;
}

solution(7, 20); //1

solution(11, 22); // 1

solution(1, 6); // 1

solution(12, 21); // 2

solution(1000, 1000); // 1

solution(1, 1000); // 1
