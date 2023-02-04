// n개의 원판을 3번 원판으로 최소로 옮기는 방법을 return

// 한 번에 하나의 원판만 옮길 수 있습니다.
// 큰 원판이 작은 원판 위에 있어서는 안됩니다.

function solution(n) {
  var answer = [];

  function hanoi(num, start, mid, end) {
    if (num === 1) return answer.push([start, end]);
    hanoi(num - 1, start, end, mid);
    answer.push([start, end]);
    hanoi(num - 1, mid, start, end);
  }

  hanoi(n, 1, 2, 3);
  return answer;
}

function solution(n) {
  let answer = [];

  function hanoi(num, start, mid, end) {
    // num===1 이면 answer에 처음,마지막 값을 담아줍니다.
    if (num === 1) return answer.push([start, end]);

    // 처음 중간 끝 => 처음 끝 중간 으로 이동해줍니다.
    hanoi(num - 1, start, end, mid);

    // 처음,끝값을 answer에 담아줍니다.
    answer.push([start, end]);

    // 다시 중간지점부터 3번까지 이동해줍니다. mid,start,end
    hanoi(num - 1, mid, start, end);
  }

  hanoi(n, 1, 2, 3);
  return answer;
}

solution(2); // [ [1,2], [1,3], [2,3] ]
