// 서로 다른 balls개의 구슬 중 share개의 구슬을 고르는 모든 경우의 수를 return
// 서로다른 n개 중 m개를 뽑는 경우의수는 다음과 같다
//     n!
// ㅡㅡㅡㅡㅡㅡㅡㅡ
// (n-m)! * m!

// BigInt를 사용해야 한다.
// BigInt는 Number 원시 값이 안정적으로 나타낼 수 있는 최대치인 2^53 - 1보다 큰 정수를 표현할 수 있는 내장 객체입니다.

function factorial(n) {
  let temp = BigInt(1);
  for (let i = 1; i <= n; i++) {
    temp *= BigInt(i);
  }
  return temp;
}

// function solution(balls, share) {
//   var answer = 0;

//   // 1. factorial함수를 구해준다.

//   // 2. n! / {(n-m)! * m! }을 구해준다.
//   const boonMo = factorial(balls);
//   const boonJa = factorial(balls - share) * factorial(share);

//   if (balls === share) {
//     answer = 1;
//   } else {
//     answer = boonMo / boonJa;
//   }
//   console.log(answer);
//   return answer;
// }

// 틀린이유 : BigInt를 몰라 크기가 클 경우 어떻게 해야할지 몰랐다.
// 다시풀기

function solution(balls, share) {
  var answer = 0;
  const boonMo = factorial(balls);
  const boonJa = factorial(balls - share) * factorial(share);

  balls === share ? 1 : console.log(boonMo / boonJa);
  return answer;
}

function solution(balls, share) {
  let boonJa = factorial(balls);
  let boonMo = factorial(balls - share) * factorial(share);

  return boonJa / boonMo;
}

// n개 중 m개 뽑는 조합
//      n!
// -----------
// (n-m)! * m!
// factorial 함수 계산시 숫자가 너무 커서 BigInt를 사용해야됨
// BigInt(숫자) or 숫자n 으로 사용 가능 BigInt(3) or 3n

function solution(balls, share) {
  var answer = 0;
  let top = factorial(balls);
  let bottom = factorial(balls - share) * factorial(share);

  return top / bottom;
}

function factorial(num) {
  let ans = 1n;
  for (let i = 1; i <= num; i++) {
    ans *= BigInt(i);
  }
  return ans;
}

solution(3, 2); //3

solution(3, 3); //1

solution(30, 15); //1

solution(5, 3); //10

/// 2번 통과
