// 1. 최대 공약수를 구한다.
// 2. 최소공배수를 구한다.
// 3. [최대공약수, 최소공배수]를 출력한다.

function getGcd(n, m) {
  if (m === 0) return n;

  return getGcd(m, n % m);
}

function solution(n, m) {
  const gcd = getGcd(n, m);
  const lcm = (n * m) / gcd;

  return [gcd, lcm];
}
