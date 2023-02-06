function solution(lines) {
  var answer = 0;
  // 1. arr배열을 만들어준다. (lines의 범위에 포함되어 있는 숫자의 개수를 담는 배열)
  // -100 ~ 100까지 인데, 음수는 배열에서 사용할 수 없어서 +100을 해줘 0~200까지의 배열을 사용
  const arr = Array.from({ length: 200 }, () => 0);

  // 2. arr배열에 lines 값들의 범위에 포함되어 있는 숫자들을 +1 해준다.
  // +100을 해줌으로써 음수제거
  for (let i = 0; i < lines.length; i++) {
    for (let j = lines[i][0] + 100; j < lines[i][1] + 100; j++) {
      arr[j]++;
    }
  }

  // 3. arr배열의 겹치는 부분(1초과)을 answer에 담아준다.
  for (let i = 0; i < 200; i++) {
    if (arr[i] > 1) answer++;
  }
  // 4. answer를 출력한다.
  return answer;
}

// 틀린이유. 어떻게 접근할지를 몰랐었고 스택에 넣고 이런 저런방법으로 고민해봤으나 스스로 정한 시간인 40분을 넘겼기 때문에 다른분들의 답을 확인했다.

// 다시 풀어보기
function solution(lines) {
  var answer = 0;
  const map = new Map();

  lines.forEach((item) => {
    const [start, end] = item;
    for (let i = start; i < end; i++) {
      map.set(i, (map.get(i) || 0) + 1);
    }
  });
  return [...map.values()].reduce((acc, cur) => {
    return cur >= 2 ? ++acc : acc;
  }, 0);
}

function solution(lines) {
  let map = new Map();

  lines.forEach((item) => {
    const [start, end] = item;

    for (let i = start; i < end; i++) {
      map.set(i, (map.get(i) || 0) + 1);
    }
  });

  return [...map.values()].reduce((acc, cur) => {
    if (cur >= 2) {
      acc++;
    }
    return acc;
  }, 0);
}

solution([
  [0, 1],
  [2, 5],
  [3, 9],
]); // 2

solution([
  [-1, 1],
  [1, 3],
  [3, 9],
]); // 0

solution([
  [0, 5],
  [3, 9],
  [1, 10],
]); // 8
