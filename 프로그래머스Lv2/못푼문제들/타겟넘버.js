// 사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때
// 숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return

function solution(numbers, target) {
  let ans = 0;

  // 재귀를 통해 값을 구한다.
  function dfs(index, sum) {
    // 재귀 탈출조건 : index===numbers.length
    if (index === numbers.length) {
      // 만약 sum===target 이면 ans++해준다.
      if (sum === target) ans++;
      return;
    }

    // 아래의 두 경우 모두 index+1을 한다.
    // sum + numbers 인 경우
    dfs(index + 1, sum + numbers[index]);

    // sum - numbers 인 경우
    dfs(index + 1, sum - numbers[index]);
  }

  // 시작은 index 0 , sum=0 부터 시작해준다.
  dfs(0, 0);
  return ans;
}

function solution(numbers, target) {
  let answer = 0;
  function dfs(index, sum) {
    if (index === numbers.length) {
      if (target === sum) {
        answer++;
      }
      return;
    }
    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  }
  dfs(0, 0);
  return answer;
}

function solution(numbers, target) {
  let answer = 0;
  dfs(0, 0);

  function dfs(cnt, sum) {
    if (cnt === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }

    dfs(cnt + 1, sum + numbers[cnt]);
    dfs(cnt + 1, sum - numbers[cnt]);
  }
  return answer;
}

solution([1, 1, 1, 1, 1], 3); //	5
solution([4, 1, 2, 1], 4); //	2
