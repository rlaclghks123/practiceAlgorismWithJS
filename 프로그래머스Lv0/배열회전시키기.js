// numbers안의 값을 direction방향으로 한칸씩 회전시킨 배열을 return

function solution(numbers, direction) {
  var answer = [];
  // 1. 방향이 오른쪽이면 배열의 맨오른쪽 요소를 제거한다.
  if (direction === 'right') {
    const temp = numbers.pop();

    // 1-1 제거한 요소가 오른쪽이면 배열의 맨 왼쪽에 추가한다.
    numbers.unshift(temp);
    answer = numbers;
  } else {
    // 2. 방향이 왼쪽이면 배열의 맨왼쪽 요소를 제거한다.
    const temp = numbers.shift();

    // 2-1. 제거한 요소가 왼쪽이면 배열의 맨 오른쪽에 추가
    numbers.push(temp);
    answer = numbers;
  }

  return answer;
}

solution([1, 2, 3], 'right'); //[(3, 1, 2)]

solution([4, 455, 6, 4, -1, 45, 6], 'left'); //[(455, 6, 4, -1, 45, 6, 4)];
