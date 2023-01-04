// 길이가 n이고 '수박수박수...' 패턴의 문자열을 return
// n이 4인경우 '수박수박',  n이 3인경우 '수박수'를 return

function solution(n) {
  var answer = '';

  // 1. n이 0이 될때까지 반복해준다.
  while (n > 0) {
    // 2. n이 1인 경우 '수'를 추가해주고 종료해준다.
    if (n === 1) {
      answer += '수';
      break;
    }

    // 3 n이 2이상인 경우, '수박'을 추가 해주고 n에 2를 빼준다.
    else {
      answer += '수박';
      n = n - 2;
    }
  }

  return answer;
}

solution(3); // "수박수"

solution(4); //	"수박수박"

// 다른사람의 코드
// 깔끔 그잡채, 수박을 repeat 해주고, 슬라이스로 짤라준다.

const waterMelon = (n) => '수박'.repeat(n).slice(0, n);
