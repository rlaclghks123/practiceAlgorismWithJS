// 1. 사전 배열에 ['A','E','I','O','U']를 담아줍니다.

// 2. dfs를 통해 깊이우선 탐색을 진행합니다.
// 2-1. 만약 새로만든 str이 원하는 word와 같다면 ans을 cnt로 바꿔주고 return을 통해 탈출합니다.
// 2-2. 만약 새로만든 str의 길이가 5가되면 탈출합니다.(그 이상은 불필요함)
// 2-3. 새로만든 str에 새로운 문자를 더해서 dfs를 진행합니다.

// 3. 최종 ans의 값을 출력합니다.

function solution(word) {
  const dictionary = ['A', 'E', 'I', 'O', 'U'];
  let ans = 0;
  let cnt = 0;

  dfs('');
  return ans;

  function dfs(str) {
    if (str === word) {
      ans = cnt;
      return;
    }

    if (str.length === 5) return;

    for (let i = 0; i < 5; i++) {
      cnt++;
      dfs(str + dictionary[i]);
    }
  }
}
