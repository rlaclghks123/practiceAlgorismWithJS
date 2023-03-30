function solution(n, computers) {
  let answer = 0;
  // 방문처리를 위해 visited를 만들어줍니다.
  const visited = Array.from({ length: n }, () => false);

  // n만큼 반복하여 확인해줍니다.
  for (let i = 0; i < n; i++) {
    // 방문한적 없다면
    if (!visited[i]) {
      // dfs로 탐색해준뒤, 횟수(answer)를 추가해줍니다.
      dfs(i);
      answer++;
    }
  }
  return answer;

  function dfs(i) {
    // 방문처리를 해줍니다.
    visited[i] = true;

    // 각요소에 for문으로 접근하여 1이면서 방문한적 없다면 dfs로 탐색해줍니다.
    for (let j = 0; j < n; j++) {
      if (computers[i][j] === 1 && !visited[j]) {
        dfs(j);
      }
    }
  }
}

solution(3, [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
]); // 2

// solution(3, [
//   [1, 1, 0],
//   [1, 1, 1],
//   [0, 1, 1],
// ]); // 1
