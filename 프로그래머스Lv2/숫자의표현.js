// 1. 시작값을 n부터 시작하여 1까지 돌아줍니다 => n부터 시작하는 이유는 시간 단축을 위해
// 2. n부터 -1씩 하면서 총 합이 n이 되면 count해줍니다.
// 2-1 만약 순회하면서 n이 되면 count해주고, n보다 크거나 같아지면 반복문을 중단합니다.
// 3. 시작값을 -1 해줍니다.

function solution(n) {
  let start = n;
  let cnt = 0;

  while (start > 0) {
    let sum = 0;
    for (let i = start; i > 0; i--) {
      sum += i;
      if (sum === n) cnt++;
      if (sum >= n) break;
    }
    start--;
  }
  return cnt;
}
