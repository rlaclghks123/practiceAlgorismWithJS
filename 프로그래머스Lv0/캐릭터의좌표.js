// up, down,left, right로 이동합니다. 각각 [0,1] [0,-1] [-1,0] [0,1]
// 항상 0,0에서 시작하며, 키 입력이 모두 끝난 뒤 캐릭터의 좌표[x,y]를 return  // [가로,세로]
// board의 크기가 9라면 최대 [-4,0] [0,4]까지 이동 가능하며 크기를 벗어난 경우 입력은 무시

function solution(keyinput, board) {
  var answer = [0, 0];

  // 1. 이동 가능한 최대값을 구해준다.
  const maxLow = Math.floor(board[0] / 2);
  const maxCol = Math.floor(board[1] / 2);

  // 2. 범위안에서 방향키에 따라 값을 이동시킨뒤 ++ 혹은 -- 를 해준다.
  keyinput.forEach((item) => {
    if (item === 'left' && answer[0] > -maxLow) {
      answer[0]--;
    } else if (item === 'right' && answer[0] < maxLow) {
      answer[0]++;
    } else if (item === 'up' && answer[1] < maxCol) {
      answer[1]++;
    } else if (item === 'down' && answer[1] > -maxCol) {
      answer[1]--;
    }
  });

  // 3. 출력한다.
  return answer;
}

solution(['left', 'right', 'up', 'right', 'right'], [11, 11]); // [2, 1]

solution(['down', 'down', 'down', 'down', 'down'], [7, 9]); // [0, -4]

solution(['up', 'up', 'up', 'down'], [3, 3]); // [0, 0]

solution(['left', 'left', 'left', 'right'], [3, 3]); //[0,0]

// 다른사람의 코드
// swtich case를 이용했다.
// for of문을 통해 반복을 했다.

function solution(keyinput, board) {
  let res = [0, 0];
  for (let p of keyinput) {
    switch (p) {
      case 'left':
        if (-res[0] < board[0] / 2 - 1) res[0]--;
        break;
      case 'right':
        if (res[0] < board[0] / 2 - 1) res[0]++;
        break;
      case 'up':
        if (res[1] < board[1] / 2 - 1) res[1]++;
        break;
      case 'down':
        if (-res[1] < board[1] / 2 - 1) res[1]--;
        break;
    }
  }
  return res;
}
