// 1. 왼쪽 손가락과 오른쪽 손가락의 시작 위치를 처음에 '*', '#'으로 정해줍니다.

// 2. 손가락의 움직임을 담을 ans의 초기값을 ''로 정해줍니다.

// 3. numbers를 돌면서 번호를 순서대로 돌아줍니다.
// 3-1  번호가 1,4,7인경우 왼쪽 손가락을 번호로 움직여주고, 움직임에 'L'을 추가합니다.
// 3-2  번호가 3,6,9인경우 오른쪽 손가락을 번호로 움직여주고, 움직임에 'R'을 추가합니다.
// 3-3  그 외의 경우 왼쪽 손가락과 누를번호의 위치 vs 오른쪽 손가락과 누를번호의 위치의 거리를 찾아줍니다.

// 3-4  거리가 같다면 왼손잡이는 왼쪽, 오른손잡이는 오른쪽손가락을 움직여주고, 움직임에 'L' 또는 'R'을 추가해줍니다.
// 3-5  거리가 같지 않다면 거리가 짧은 손가락을 움직여주고, 움직임을 추가해줍니다.

function getDistance(target, curNumber) {
  const keyPad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  };
  const [targetLeft, targetRight] = keyPad[target];
  const [curLeft, curRight] = keyPad[curNumber];

  return Math.abs(targetLeft - curLeft) + Math.abs(targetRight - curRight);
}

function moveHand(hand, number, answer, position) {
  position[hand] = number;
  answer += hand === 'left' ? 'L' : 'R';
  return [answer, position];
}

function solution(numbers, hand) {
  let answer = '';
  let position = {
    left: '*',
    right: '#',
  };

  numbers.forEach((curNumber) => {
    // 왼손이 움직이는 경우
    if (curNumber === 1 || curNumber === 4 || curNumber === 7) {
      [answer, position] = moveHand('left', curNumber, answer, position);
    }

    // 오른손이 움직이는 경우
    if (curNumber === 3 || curNumber === 6 || curNumber === 9) {
      [answer, position] = moveHand('right', curNumber, answer, position);
    }

    // 현재 위치와 가까운 손가락을 움직이는 경우
    if (curNumber === 2 || curNumber === 5 || curNumber === 8 || curNumber === 0) {
      const leftDistance = getDistance(position.left, curNumber);
      const rightDistance = getDistance(position.right, curNumber);

      // 왼쪽이 더 가까운 경우
      if (leftDistance < rightDistance) {
        [answer, position] = moveHand('left', curNumber, answer, position);
      }

      // 오른쪽이 더 가까운 경우
      if (leftDistance > rightDistance) {
        [answer, position] = moveHand('right', curNumber, answer, position);
      }

      // 왼쪽과 오른쪽의 거리가 같은경우, 어느손잡이에 따라 다르게 처리
      if (leftDistance == rightDistance) {
        hand === 'left'
          ? ([answer, position] = moveHand('left', curNumber, answer, position))
          : ([answer, position] = moveHand('right', curNumber, answer, position));
      }
    }
  });

  return answer;
}
