// 가로길이 W, 세로길이 H인 직사각형
// 격자칸은 1x1
// 현재 직사각형 종이는 크기가 같은 직각삼각형 2개로 나누어진 상태
// 사용할 수 있는 정사각형의 개수
// W,H는 1억 이하의 자연수

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}
function solution(w, h) {
  var answer = 1;

  // 1. 총 사각형의 개수 - (w+h - (가로와 세로의 최대공약수))
  answer = w * h - (w + h - gcd(w, h));
  console.log(answer);

  return answer;
}

solution(8, 12); // 80
