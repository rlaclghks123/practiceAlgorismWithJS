// 설명은 아래쪽에

function solution(board, moves) {
  let answer = 0;
  const stack = [];

  moves.forEach((position) => {
    const curPosition = position - 1;

    for (let i = 0; i < board.length; i++) {
      const col = board[i];

      if (col[curPosition] === 0) continue;
      if (stack[stack.length - 1] !== col[curPosition]) stack.push(col[curPosition]);
      else {
        stack.pop();
        answer += 2;
      }

      board[i][curPosition] = 0;
      break;
    }
  });
  return answer;
}

// 1. moves를 돌면서 해당 위치에서 0이 아닌값을 찾습니다.
// 2-1   1에서 찾은값과 stack의 가장 마지막값이 같은경우 2씩 cnt해주고 stack에서 삭제합니다.
// 2-2   1에서 찾은값과 stack의 가장 마지막값이 다른경우 stack에 push합니다.
// 2-3   1에서 찾은값을 0으로 바꿔줍니다.

// [
//   [0, 0, 0, 0, 0],
//   [0, 0, 1, 0, 3],
//   [0, 2, 5, 0, 1],
//   [4, 2, 4, 4, 2],
//   [3, 5, 1, 3, 1],
// ];

// 1번부터 moves : 1 5 3 5 1 2 1 4
// 0번부터 moves : 0 4 2 4 0 1 0 3

// [
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 5, 0, 0],
//   [0, 2, 4, 0, 2],
//   [0, 5, 1, 3, 1],
// ];

// 4311324
// 424
// 11, 33 => 총 4개
