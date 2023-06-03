// 4개가 같음
// 네 주사위에서 나온 숫자가 모두 p로 같다면 1111 × p점을 얻습니다.

// 3개가 같음
// 세 주사위에서 나온 숫자가 p로 같고 나머지 다른 주사위에서 나온 숫자가 q(p ≠ q)라면 (10 × p + q)^2 점을 얻습니다.

// 2개가 같음
// 주사위가 두 개씩 같은 값이 나오고, 나온 숫자를 각각 p, q(p ≠ q)라고 한다면 (p + q) × |p - q|점을 얻습니다.
// 어느 두 주사위에서 나온 숫자가 p로 같고 나머지 두 주사위에서 나온 숫자가 각각 p와 다른 q, r(q ≠ r)이라면 q × r점을 얻습니다.

// 다 다름
// 네 주사위에 적힌 숫자가 모두 다르다면 나온 숫자 중 가장 작은 숫자 만큼의 점수를 얻습니다.

function solution(a, b, c, d) {
  let map = new Map();
  let ans;

  map.set(a, (map.get(a) || 0) + 1);
  map.set(b, (map.get(b) || 0) + 1);
  map.set(c, (map.get(c) || 0) + 1);
  map.set(d, (map.get(d) || 0) + 1);

  // 4개 다 같음
  if (map.size === 1) ans = 1111 * [...map.keys()][0];

  // 3개가 같음 or 2개씩 같음
  if (map.size === 2) {
    let sorted = [...map].sort((a, b) => b[1] - a[1]);

    if ([...map.values()][0] !== 2) ans = (10 * sorted[0][0] + sorted[1][0]) ** 2;
    else
      ans =
        ([...map.keys()][0] + [...map.keys()][1]) *
        Math.abs([...map.keys()][0] - [...map.keys()][1]);
  }

  // 2개가 같음
  if (map.size === 3) {
    let sorted = [...map].sort((a, b) => a[1] - b[1]);
    ans = sorted[0][0] * sorted[1][0];
  }

  // 다 다름
  else if (map.size === 4) ans = Math.min(a, b, c, d);

  return ans;
}
