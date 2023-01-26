// 2x2 형태로 4개가 붙어있을 경우 사라지면서 점수를 얻는 게임
// 2x2 모양이 여러 개 있다면 한꺼번에 지워진다.
// 블럭이 지워진 후에 위에 있는 블록이 아래로 떨어져 빈 공간을 채우게된다.
// 계속 반복이 된다.
// 입력으로 블록의 첫 배치가 주어졌을 때, 지워지는 블록은 모두 몇 개인지 판단하는 프로그램을 제작

// 1. 반복하여 2*2 블럭을 찾아준다.
// 2. 만약 2*2블럭이 없다면 현재 board의 0의 개수를 return 해준다.(0의개수===지워진 블럭개수)
// 3. 찾은 2*2블럭을 board에서 0으로 바꿔준다.
// 4. 0보다 위에있는 블럭을 아래로 내려준다. (재정렬)

function solution(m, n, board) {
  board = board.map((v) => v.split(''));

  while (true) {
    let founded = [];

    // 찾기
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        if (
          board[i][j] &&
          board[i][j] === board[i][j - 1] &&
          board[i][j] === board[i - 1][j - 1] &&
          board[i][j] === board[i - 1][j]
        ) {
          founded.push([i, j]);
        }
      }
    }

    if (!founded.length) return [].concat(...board).filter((v) => !v).length;

    // 부수기
    founded.forEach((a) => {
      board[a[0]][a[1]] = 0;
      board[a[0]][a[1] - 1] = 0;
      board[a[0] - 1][a[1] - 1] = 0;
      board[a[0] - 1][a[1]] = 0;
    });

    // 재정렬
    for (let i = m - 1; i > 0; i--) {
      if (!board[i].some((v) => !v)) continue;

      for (let j = 0; j < n; j++) {
        for (let k = i - 1; k >= 0 && !board[i][j]; k--) {
          if (board[k][j]) {
            board[i][j] = board[k][j];
            board[k][j] = 0;
            break;
          }
        }
      }
      console.log('board', board);
    }
  }
}

solution(4, 5, ['CCBDE', 'AAADE', 'AAABF', 'CCBBF']); // 14
solution(6, 6, ['TTTANT', 'RRFACC', 'RRRFCC', 'TRRRAA', 'TTMMMF', 'TMMTTJ']); // 15

function solution(m, n, board) {
  // 1. 2차 배열을 만들어줍니다.
  board = board.map((item) => item.split(''));

  // 2. 반복문을 통해 2*2를 계속 찾아주고, 찾은 값의 2*2의 위치를 found에 담아줍니다.
  while (true) {
    let found = [];

    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        if (
          board[i][j] &&
          board[i][j] === board[i][j - 1] &&
          board[i][j] === board[i - 1][j] &&
          board[i][j] === board[i - 1][j - 1]
        ) {
          found.push([i, j]);
        }
      }
    }

    // 3. 만약 2*2를 찾은 값이 없다면 현재까지 0의 값을 출력합니다.
    if (!found.length) return [].concat(...board).filter((f) => !f).length;

    // 4. 2*2를 찾았다면 실제 board의 값을 0으로 바꿔줍니다.
    found.forEach((item) => {
      const [x, y] = item;
      board[x][y] = 0;
      board[x][y - 1] = 0;
      board[x - 1][y] = 0;
      board[x - 1][y - 1] = 0;
    });

    // 5. 재정렬을 해줍니다. 빈칸보다 위에있는 값을 아래로 내려줍니다.  단 빈칸이 있어야만 바꾸기 때문에 아래에서부터(i=m-1) 찾아줍니다.
    for (let i = m - 1; i > 0; i--) {
      // 만약 0이 1개라도 존재하지 않는다면 넘어가줍니다.
      if (!board[i].some((s) => !s)) continue;
      for (let j = 0; j < n; j++) {
        // k반복문 : i,j가 0을 찾았다면 k는 빈칸 위의 블럭이 있는지 찾는 반복문입니다.  따라서 0(!board[i][j])이면서 범위안에서(k>=0) 위에 확인을 해보는 반복문
        for (k = i - 1; k >= 0 && !board[i][j]; k--) {
          // 빈칸위에 블럭이 존재한다면 빈칸 0 (board[i][j])와 board[k][j] 블럭을 바꿔줍니다.
          if (board[k][j]) {
            board[i][j] = board[k][j];
            board[k][j] = 0;
            break;
          }
        }
      }
    }
  }
}
