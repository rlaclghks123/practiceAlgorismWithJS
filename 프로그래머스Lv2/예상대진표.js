// 12, 34, 56, n-1,n번끼리 게임을 진행
// 다음 라운드에 진출하면 번호는 다시 배정받음
// 1,2중 2가 이기면 2는 1번을 부여받음 , 34중 이긴사람이 2를 부여받음
// A번 참가자는 B참가자와 몇번째 라운드에서 만나는가
// A와 B는 항상 이긴다고 가정
// 10만이기 때문에 1중 for문만 가능

function solution(n, a, b) {
  var answer = 0;
  let start = n;

  while (a !== b) {
    answer++;
    a = a % 2 === 0 ? (a = a / 2) : Math.floor(a / 2) + 1;
    b = b % 2 === 0 ? (b = b / 2) : Math.floor(b / 2) + 1;
  }
  console.log(answer);
  return answer;
}

solution(8, 4, 7); // 3

// 다른사람 코드
// 그냥 ceil 썼으면 됐음. 어차피 짝수는 나머지가 없기 때문이다.

function solution(n, a, b) {
  let answer = 0;
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }

  return answer;
}
