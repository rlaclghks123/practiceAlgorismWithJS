function solution(board, moves) {
  let stack = [];
  let count = 0;

  // 1.  moves와 board를 2중 for문으로 확인해준다.
  for (let i = 0; i < moves.length; i++) {
    // 2.moves의 값을 하나씩 확인한다. 단 배열이 0부터 시작하므로 -1을 해준다.
    let pick = moves[i] - 1;

    for (let j = 0; j < board.length; j++) {
      // 3. 만약 아무것도 집은게 없다면(0) 넘겨준다.
      if (board[j][pick] === 0) continue;

      // 4. 만약  이전에 집은것과 현재 집은것이 같은것이라면 stack에서 꺼낸뒤, count+=2 해준다.
      if (stack[stack.length - 1] === board[j][pick]) {
        stack.pop();
        count += 2;
      }
      // 5. 현재 집은것이 이전에 집은것과 다르다면 stack에 담아준다.
      else {
        stack.push(board[j][pick]);
      }

      // 6. 집은것은 0으로 처리해주고 반복문을 멈춰준다.
      board[j][pick] = 0;
      break;
    }
  }
  return count;
}

solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
  // 4 3 1 1 3 2 4
); //	4

// 내 코드가 가장 이해하기 좋다.
