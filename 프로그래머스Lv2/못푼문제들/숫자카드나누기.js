// 숫자가 하나씩 적힌 카드들을 절반씩 나눠서 가진후,  아래의 두 조건중 하나를 만족하는 가장 큰 양의 정수

// 철수가 가진 카드들에 적힌 모든 숫자를 나눌 수 있고 영희가 가진 카드들에 적힌 모든 숫자들 중 하나도 나눌 수 없는 양의 정수 a
// 영희가 가진 카드들에 적힌 모든 숫자를 나눌 수 있고, 철수가 가진 카드들에 적힌 모든 숫자들 중 하나도 나눌 수 없는 양의 정수 a

// 조건을 만족하는 a가 없다면 0을 return

// 제한사항
// 1 ≤ arrayA의 길이 = arrayB의 길이 ≤ 500,000
// 1 ≤ arrayA의 원소, arrayB의 원소 ≤ 100,000,000
// arrayA와 arrayB에는 중복된 원소가 있을 수 있습니다.

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function solution(arrayA, arrayB) {
  let answer = 0;
  // 1. 최대공약수를 담을 gcdA, gcdB를 각각의 배열 첫번째(0번째) 값으로 초기화해줍니다.
  let [gcdA, gcdB] = [arrayA[0], arrayB[0]];

  // 2. fo문을 통해 1부터 array.length까지 돌면서 모든수의 최대공약수를 찾아줍니다.
  for (let i = 1; i < arrayA.length; i++) {
    gcdA = gcd(gcdA, arrayA[i]);
    gcdB = gcd(gcdB, arrayB[i]);
  }

  // 3. 만약 최대공약수가 1이라면 0을 담아줍니다. 왜 why? 1이 나왔다는것은 공통된 부분이 없다는걸 의미
  if (gcdA === 1) gcdA = 0;
  if (gcdB === 1) gcdB = 0;

  // 4. every를 통해 A함수에서 gcdB를, B함수에서 gcdA를 나눈 나머지가 0이 아닌경우(나눠지지 않은경우) answer에 최대값을 담아줍니다.
  if (arrayA.every((item) => item % gcdB !== 0)) answer = Math.max(answer, gcdB);
  if (arrayB.every((item) => item % gcdA !== 0)) answer = Math.max(answer, gcdA);

  return answer;
}

function solution(arrayA, arrayB) {
  let answer = 0;
  let [gcdA, gcdB] = [arrayA[0], arrayB[0]];

  for (let i = 1; i < arrayA.length; i++) {
    gcdA = gcd(gcdA, arrayA[i]);
    gcdB = gcd(gcdB, arrayB[i]);
  }

  if (gcdA === 1) gcdA = 0;
  if (gcdB === 1) gcdB = 0;

  if (arrayA.every((item) => item % gcdB !== 0)) answer = Math.max(answer, gcdB);
  if (arrayB.every((item) => item % gcdA !== 0)) answer = Math.max(answer, gcdA);
  return answer;
}

solution([10, 17], [5, 20]); // 	0

solution([10, 20], [5, 17]); // 10

solution([14, 35, 119], [18, 30, 102]); // 	7
