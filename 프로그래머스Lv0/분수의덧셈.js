// 최대공약수(gcd)를 구하는 함수
function gcd(a, b) {
  if (a % b === 0) return b;
  return gcd(b, a % b);
}

function solution(denum1, num1, denum2, num2) {
  var answer = [];

  // 1. 두 분수의 합을 구한다.

  const boonJa = denum1 * num2 + denum2 * num1;
  const boonMo = num1 * num2;

  // 2. 최대 공약수를 구한다.
  const gcd_val = gcd(boonJa, boonMo);

  // 3. answer 배열에 분수의 합을 기약분수 형태로 나타낸다.(최대공약수로 나눈다)
  answer = [boonJa / gcd_val, boonMo / gcd_val];

  return answer;
}
