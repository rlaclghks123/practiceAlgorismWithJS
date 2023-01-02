// a와 b사이에 속한 모든 정수의 합을 return
// a와 b대소관계는 정해져 있지 않습니다.

function solution(a, b) {
  var answer = 0;

  // 1. 둘 중 큰값과 작은값을 찾아준다.
  // 2. 작은값 이상, 큰값 이하의 모든 정수를 더해준다.
  if (a < b) {
    for (let i = a; i <= b; i++) {
      answer += i;
    }
  } else {
    for (let i = b; i <= a; i++) {
      answer += i;
    }
  }

  return answer;
}

// 다른사람의 코드  가우스의 법칙을 사용

function solution(a, b) {
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}

solution(3, 5); // 12

solution(3, 3); // 	3

solution(5, 3); // 12
