// 1. 방문처리를 위해 visit 배열을 만들어줍니다.

// 2. dungeons를 깊이우선으로 완전탐색을 시작합니다.
// 2-1. cnt, max를 비교하여 최대값을 max에 저장해줍니다.
// 2-2. dungeons를 순회하면서 최소피로도가 k이하면서 방문한적 없는 경우
// 2-2-1. 방문처리를 해줍니다.
// 2-2-2. 카운트+1, k에서 소비피로도를 소비한 뒤, 다시 exploreDungeons를 방문합니다.(dfs)
// 2-2-3. dfs를 빠져나오면 방문처리를 다시 false를 통해 다른 경우의 dfs에 문제 없도록 해줍니다.

// 3. 최대값을 출력해줍니다.

function solution(k, dungeons) {
  let max = 0;
  const visit = Array.from({ length: dungeons.length }, () => false);

  exploreDungeons(0, k);
  return max;

  function exploreDungeons(cnt, k) {
    max = Math.max(max, cnt);

    dungeons.forEach(([minPirodo, consumePirodo], idx) => {
      if (minPirodo <= k && !visit[idx]) {
        visit[idx] = true;
        exploreDungeons(cnt + 1, k - consumePirodo);
        visit[idx] = false;
      }
    });
  }
}
