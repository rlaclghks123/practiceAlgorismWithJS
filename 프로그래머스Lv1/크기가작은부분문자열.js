// 숫자로 이루어진 문자열 t와 p가 주어진다.
// t에서 p와 길이가 같은 부분문자열 중에서, 이 부분문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것이 나오는 횟수를 출력

// 1. t에서 p의 길이만큼 만들 수 있는 모든 숫자를 만든다.
// 2. 1에서 구한 숫자와 p와 비교하여 p보다 작거나 같은 값을 count한다.

// **길이가 최대 10,000이므로 2중 for문까지 가능**

function solution(t, p) {
  let cnt = 0;

  for (let i = 0; i < t.length; i++) {
    const sliced = t.slice(i, i + p.length);
    if (sliced.length === p.length && Number(sliced) <= Number(p)) {
      cnt++;
    }
  }

  return cnt;
}
