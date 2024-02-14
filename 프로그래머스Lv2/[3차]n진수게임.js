// 1. 0부터 m*t만큼 n진수로 바꿔 totalStr에 값을 더해준다.
// 2. totalStr를 돌면서 index%m이 p-1인 경우 ans에 num을 추가해준다.
// 3. ans에서 0부터 t까지 잘라주고, 모두 대문자로 바꿔 출력한다.

function solution(n, t, m, p) {
  let totalStr = '';
  let ans = '';
  for (let i = 0; i <= m * t; i++) {
    totalStr += i.toString(n);
  }

  [...totalStr].forEach((num, i) => {
    if (i % m === p - 1) {
      ans += num;
    }
  });

  return ans.slice(0, t).toUpperCase();
}
