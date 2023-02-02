// 1과 0로 채워진 표 board
// 1로 이루어진 가장 큰 정사각형을 찾아 넓이를 return

function solution(board) {
  let answer = 0;
  let row = board.length;
  let col = board[0].length;

  // 행 또는 열이 1이면 정사각형의 넓이를 1로 반환.
  if (row < 2 || col < 2) return 1;

  // 그 외의 경우엔 루프를 돌며 계산을 수행
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      // 만약 자신의 위치(현재 인덱스)의 값이 1이상일 경우
      if (board[i][j] !== 0) {
        // 왼쪽상단(↖︎), 위쪽(↑), 왼쪽(←)의 최솟값을 구한 후
        let min = Math.min(board[i - 1][j - 1], board[i - 1][j], board[i][j - 1]);
        // 자신의 위치에 최솟값 + 1을 할당한다.
        board[i][j] = min + 1;
      }
      // 할당한 값의 최댓값을 answer에 할당해주고
      if (answer < board[i][j]) answer = board[i][j];
    }
  }
  // 정사각형의 넓이를 구한다.
  return answer * answer;
}

function solution(board) {
  let answer = 0;

  // 1. row, col을 구해줍니다.
  let row = board.length;
  let col = board[0].length;

  // 2. row, col 1인 경우 return 해줍니다.
  if (row < 2 && col < 2) return 1;

  // 3. board를 돌면서 값이 1이면서 왼쪽 상단 대각,  상단, 왼쪽  총 3부분 중 최소값의 +1을 해줍니다.
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (board[i][j] === 1) {
        let leftUp = board[i - 1][j - 1];
        let up = board[i - 1][j];
        let left = board[i][j - 1];

        board[i][j] = Math.min(leftUp, up, left) + 1;
      }
      // board의 최댓값을 answer에 담아줍니다.
      answer = Math.max(answer, board[i][j]);
    }
  }
  // 최댓값의 제곱값을(넓이) return 해줍니다.
  return answer ** 2;
}
solution([
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 0, 1, 0],
]); // 9

solution([
  [0, 0, 1, 1],
  [1, 1, 1, 1],
]); // 4
