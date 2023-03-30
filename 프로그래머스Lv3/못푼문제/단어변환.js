function solution(begin, target, words) {
  let n = words.length;
  // 방문처리를 위한 배열을 만들어줍니다.
  const visited = Array.from({ length: n }, () => false);

  let answer = 0;
  // dfs를 통해 words를 탐색합니다.
  dfs(begin, target, words, 0);
  return answer;

  function dfs(current, end, words, cnt) {
    // current 와 end가 같다면 answer에 cnt를 담아주고 종료합니다.
    if (current === end) {
      answer = cnt;
      return;
    }

    // n만큼 즉 words에 있는 단어들만큼 반복해서 탐색합니다.
    for (let i = 0; i < n; i++) {
      // 방문한적 없는 단어라면
      if (!visited[i]) {
        // 다른 단어가 몇개있는지 cnt 해줍니다.
        let diffCnt = 0;
        // 현재 단어와, words[i]의 단어를 각각 찾아보면서 다른단어의 개수를 찾아줍니다.
        for (let j = 0; j < current.length; j++) {
          if (current[j] !== words[i][j]) diffCnt++;
        }

        // 만약 다른 문자가 1개라면 방문처리를해주고 dfs를 통해 현재값을 words[i]로 바꾸고, cnt+1해줍니다.
        if (diffCnt === 1) {
          visited[i] = true;
          dfs(words[i], end, words, cnt + 1);
          // dfs를 벗어났을때는 다시 방문처리를 없애줍니다.  깊이우선이기 때문에 한번쭉 들어갈떄 방문처리를 해주고, 다른 단어를 찾을때는 방문처리를 새출발 해주기 위해서 입니다.
          visited[i] = false;
        }
      }
    }
  }
}

solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']); // 4
solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']); // 0
