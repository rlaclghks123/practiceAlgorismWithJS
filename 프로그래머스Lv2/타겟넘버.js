// 사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때
// 숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return

function solution(numbers, target) {
  let result = {
    ans: 0,
    target: target,
    numbers: numbers,
  };

  dfs(0, 0, result);
  return result.ans;
}

function dfs(cnt, sum, result) {
  let { target, numbers } = result;

  if (cnt === numbers.length) {
    if (sum === target) result.ans += 1;
    return;
  }

  dfs(cnt + 1, sum + numbers[cnt], result);
  dfs(cnt + 1, sum - numbers[cnt], result);
}
