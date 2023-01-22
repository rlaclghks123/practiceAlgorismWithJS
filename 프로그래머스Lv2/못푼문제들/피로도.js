// 최소 피로도는 탐험을 위한 최소한 피로도
// 소모 피로도는 탐험후 소모되는 피로도
// 유저가 탐험할 수 있는 최대 던전 수를 return
// [최소피로도, 소모피로도]
// 소모피로도<=최소피로도    && 1이상 1,000이하
// 서로 다른 던전의 []가 서로 같을 수 있습니다.

function solution(k, dungeons) {
  var answer = [];

  // 방문체크를 할 visited 배열을 false로 초기화해준다.
  const visited = Array.from({ length: dungeons.length }, () => false);

  // dfs함수를 통해 모든던전을 탐험해본다.
  function dfs(count, k) {
    //count값을 담아준다.
    answer.push(count);

    // 모든 던전을 돌면서 현재 피로도 이하 && 방문한 적 없는 던전을 방문한다.
    dungeons.forEach((item, i) => {
      const [minimum, used] = item;
      if (minimum <= k && !visited[i]) {
        // 방문했기 때문에 방문처리 해준다.
        visited[i] = true;
        // 현재 위치에서 dfs를 통해 탐험해준다.
        dfs(count + 1, k - used);
        // 한번 최대한 깊숙히 들어갔다 왔고, 다시 새출발 해야하기 때문에 방문처리를 false로 바꿔준다.
        visited[i] = false;
      }
    });
  }
  dfs(0, k);
  return Math.max(...answer);
}

solution(80, [
  [80, 20],
  [50, 40],
  [30, 10],
]); // 3

solution(40, [
  [40, 20],
  [10, 10],
  [10, 10],
  [10, 10],
  [10, 10],
]);
//  4
