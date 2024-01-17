// brown yellow       return
// 10 + 2   ===    4*3 = 12
// 8  + 1   ===    3*3 = 9
// 24 + 24  ===    8*6 = 48
// 즉, 가로와 세로는 (brown + yellow)의 약수 중 하나

// 그림을 보면 yellow 좌우로 1개씩, 위아래로 1개씩 있어야 brown이 yellow를 덮을 수 있다.
// 즉 => (총 가로-2) * (총 세로-2)가 yellow 개수이다.

// 1. 총 카펫 개수를 구해준다. => yellow + brown
// 2. 총 카펫 개수의 약수를 구해준다.
// 3. 총 카펫 개수의 약수를 순회하면서 조건에 맞는 값을 찾아준다.
// 조건 1 : 가로가 세로보다 항상 큼
// 조건 2 : 가로와 세로의 곱은 brown + yellow임
// 조건 3 : (총 가로-2) * (총 세로-2)가 yellow 개수이다.

function getYaksu(sum) {
  let i = 1;
  const ans = [];

  while (i < sum) {
    if (sum % i === 0) ans.push(i);
    i++;
  }

  return ans;
}

function solution(brown, yellow) {
  const sum = brown + yellow;
  const yaksus = getYaksu(sum);

  for (let i = 0; i < yaksus.length; i++) {
    for (let j = 0; j < yaksus.length; j++) {
      if (yaksus[i] * yaksus[j] === sum && yaksus[i] <= yaksus[j]) {
        if ((yaksus[i] - 2) * (yaksus[j] - 2) === yellow) {
          return [yaksus[j], yaksus[i]];
        }
      }
    }
  }
}
