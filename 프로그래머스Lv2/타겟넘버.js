// dfs를 사용하여 풀었습니다.

// 1. 현재값은 0, cnt는 0, idx는 0으로 시작합니다.

// 2. dfs의 탈출조건은 idx가 numbers의 길이가 되면 탈출합니다.
// 2-1. 탈출할 때 현재값이 target과 같다면 ans를 +1 해줍니다.(타겟넘버가 가능한 경우)

// 3. 탈출하지 않았다면 현재값에 numbers[idx]값을 더하는 경우로 dfs를 탐색합니다.
// 4. 탈출하지 않았다면 현재값에 numbers[idx]값을 빼는 경우로 dfs를 탐색합니다.

function solution(numbers, target) {
  let ans = 0;
  dfs(0, 0, 0);

  return ans;

  function dfs(cur, cnt, idx) {
    if (idx === numbers.length) {
      if (cur === target) {
        ans++;
      }
      return;
    }

    dfs(cur + numbers[idx], cnt + 1, idx + 1);
    dfs(cur - numbers[idx], cnt + 1, idx + 1);
  }
}
