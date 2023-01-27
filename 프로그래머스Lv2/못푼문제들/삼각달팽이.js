// 첫 행부터 마지막 행까지 모두 순서대로 합친 새로운 배열을 return

function solution(n) {
  // 삼각 달팽이를 채울 배열을 만들어준다.
  // [0]
  // [0,0]
  // [0,0,0]
  // [0,0,0...]
  const answer = new Array(n).fill(0).map((_, index) => new Array(index + 1));

  // x,y좌표를 담아주고, count를 0부터 해준다.
  // x를 -1부터 시작한느 이유는 ++x를 통해 담아줄 예정이기 때문
  let x = -1;
  let y = 0;
  let count = 0;

  // n이 양수인경우 반복해준다.
  while (n > 0) {
    // 맨왼쪽 배열을 내려가면서 ++count를 담아준다.
    for (let i = 0; i < n; i++) answer[++x][y] = ++count;

    // 맨밑에 배열을 오른쪽으로가면서 ++count를 담아준다.
    for (let i = 0; i < n - 1; i++) answer[x][++y] = ++count;

    // 맨오른쪽 배열을 올라가면서 ++count를 담아준다.
    for (let i = 0; i < n - 2; i++) answer[--x][--y] = ++count;

    // 상단2개 하단 1개 총 3개를 제외해준다.
    n -= 3;
  }

  // 최종적으로 n차 배열을 flat을 통해 제거해준다.
  return answer.flat();
}

solution(4); // [1,2,9,3,10,8,4,5,6,7]

// solution(5); // [1,2,12,3,13,11,4,14,15,10,5,6,7,8,9]

// solution(6); // [1,2,15,3,16,14,4,17,21,13,5,18,19,20,12,6,7,8,9,10,11]
