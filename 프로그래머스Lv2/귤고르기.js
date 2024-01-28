// 1. tangerine를 돌면서 map에 [num, cnt]를 담아줍니다.
// 2. cnt를 기준으로 내림차순으로 정렬합니다.
// 3. tangerine를 돌면서 현재까지 모은 귤 + cnt값이 k보다 크거나 같으면 종류를 출력합니다.
// 4. 그렇지 않다면 현재까지 모은 귤에 cnt값을 추가해줍니다.

function solution(k, tangerine) {
  const map = new Map();
  let cur = 0;
  let ans = 0;
  tangerine.forEach((num) => map.set(num, (map.get(num) ?? 0) + 1));

  const tangerineArr = [...map].sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < tangerineArr.length; i++) {
    const [num, cnt] = tangerineArr[i];
    ans++;

    if (cur + cnt >= k) return ans;
    cur += cnt;
  }

  return ans;
}
