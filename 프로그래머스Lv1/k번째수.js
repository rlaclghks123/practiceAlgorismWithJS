// 1. 배열 array의 i번째 숫자부터 j번째 숫자까지 자른다.
// 2. 1에서 자른 숫자배열을 오름차순으로 정렬한다.
// 3. 2에서 정렬한 숫자들 중 k번째에 있는 수를 구한다.

function solution(array, commands) {
  const answer = commands.map(([i, j, k]) => {
    const sliced = array.slice(i - 1, j);
    const sorted = sliced.sort((a, b) => a - b);
    return sorted[k - 1];
  });

  return answer;
}
