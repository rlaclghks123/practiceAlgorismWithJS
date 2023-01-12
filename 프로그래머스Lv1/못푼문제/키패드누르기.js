// 1 2 3
// 4 5 6
// 7 8 9
// * 0 #

// 왼손 엄지손가락은 *
// 오른손 엄지손가락은 # 에서 시작
// 상하좌우 방향으로만 1칸 이동가능,

// 1, 4, 7은 왼손 엄지손가락을 사용
// 3, 6, 9는 오른손 엄지손가락을 사용
// 2,5,8,0은 두 엄지손가락 중 더 가까운 엄지손가락 사용
// 만약 거리가 같다면 오른손잡이는 오른손, 왼손잡이는 왼손

// 순서대로 누를 번호가 담긴 numbers, 왼손인지 오른손인지 hand
// 번호를 왼손으로 눌렀는지, 오른손으로 눌렀는지를 문자열로 return

function solution(numbers, hand) {
  var answer = '';

  // 1. 왼손가락과 오른손가락의 시작 위치를 지정
  let leftPosition = '*';
  let rightPosition = '#';

  // 2. number를 돌면서 번호에 따라 다르게 처리해준다.
  numbers.forEach((number) => {
    // 2-1  1, 4, 7인 경우 왼손가락을 움직이므로 L을 추가해주고, leftPosition을 변경
    if (number === 1 || number === 4 || number === 7) {
      answer += 'L';
      leftPosition = number;
      return;
    }

    // 2-2  3, 6, 9인 경우 오른손가락을 움직이므로 R을 추가해주고, rightPosition을 변경
    if (number === 3 || number === 6 || number === 9) {
      answer += 'R';
      rightPosition = number;
      return;
    }

    // 3 중간번호인 2, 5, 8, 0 인경우 가까운 손가락이 움직이기 때문에 거리를 찾아준다.
    let leftDistance = getDistance(leftPosition, number);
    let rightDistance = getDistance(rightPosition, number);

    // 4. 거리가 같다면 왼손잡이는 왼손, 오른손잡이는 오른손 이동
    if (leftDistance === rightDistance) {
      if (hand === 'left') {
        answer += 'L';
        leftPosition = number;
      }

      if (hand === 'right') {
        answer += 'R';
        rightPosition = number;
      }
    }

    // 5. 거리가 작은쪽 이동
    if (leftDistance > rightDistance) {
      answer += 'R';
      rightPosition = number;
    }

    if (leftDistance < rightDistance) {
      answer += 'L';
      leftPosition = number;
    }
  });
  return answer;
}

function getDistance(position, target) {
  // keyPad를 Object로 지정해서 key값을 통해 위치를 결정
  let keyPad = {
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

  // 현재 위치와, 목표위치를 설정
  let curPosition = keyPad[position];
  let targetPosition = keyPad[target];

  // 절대값을 통해 현재위치에서 목표위치를 구해서 return한다.
  return (
    Math.abs(targetPosition[0] - curPosition[0]) + Math.abs(targetPosition[1] - curPosition[1])
  );
}

function solution(numbers, hand) {
  var answer = '';
  let leftPosition = '*';
  let rightPosition = '#';

  numbers.forEach((item) => {
    if (item === 1 || item == 4 || item === 7) {
      leftPosition = item;
      answer += 'L';
      return;
    }

    if (item === 3 || item == 6 || item === 9) {
      rightPosition = item;
      answer += 'R';
      return;
    }

    let leftDistance = getDistance(leftPosition, item);
    let rightDistance = getDistance(rightPosition, item);

    if (leftDistance === rightDistance) {
      if (hand === 'left') {
        leftPosition = item;
        answer += 'L';
      }

      if (hand === 'right') {
        rightPosition = item;
        answer += 'R';
      }
    }

    if (leftDistance < rightDistance) {
      leftPosition = item;
      answer += 'L';
      return;
    }

    if (leftDistance > rightDistance) {
      rightPosition = item;
      answer += 'R';
    }
  });
  return answer;
}

function getDistance(position, target) {
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

  const curPosition = keyPad[position];
  const targetPosition = keyPad[target];

  return (
    Math.abs(curPosition[0] - targetPosition[0]) + Math.abs(curPosition[1] - targetPosition[1])
  );
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'); // "LRLLLRLLRRL"

solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left'); //"LRLLRRLLLRR"

solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right'); //	"LLRLLRLLRL"
