function gcd(a, b) {
  if (a % b === 0) return b;
  return gcd(b, a % b);
}

function solution(denum1, num1, denum2, num2) {
  var answer = [];

  const boonJa = denum1 * num2 + denum2 * num1;
  const boonMo = num1 * num2;

  const gcd_val = gcd(boonJa, boonMo);
  answer = [boonJa / gcd_val, boonMo / gcd_val];

  return answer;
}
