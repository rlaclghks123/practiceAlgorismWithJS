// 1. keymap을 순회하면서 map에 key값의 최소값(왼쪽부터 index의 최소값)을 담아줍니다.
// 2. target을 순회하면서 map에 target값이 있는지 확인합니다.
// 2-1. 만약 존재한다면 map에 있는 값을 담아줍니다.
// 2-2. 만약 존재하지 않는다면 -1을 담아줍니다.
// 3. 2에서 구한 값들을 answer에 담아줍니다.
// 3-1. 단 이때 -1이 포함되어 있다면 -1을 담아주고, 아닌경우 모든값들의 합을 담아줍니다.

function initKey(keymap) {
  const map = new Map();

  keymap.forEach((key) => {
    [...key].forEach((keyWord, i) => {
      if (map.has(keyWord)) {
        const idx = Math.min(i + 1, map.get(keyWord));
        map.set(keyWord, idx);
      } else {
        map.set(keyWord, i + 1);
      }
    });
  });

  return map;
}

function solution(keymap, targets) {
  const map = initKey(keymap);
  let answer = [];

  targets.forEach((target) => {
    let res = [];
    [...target].forEach((targetWord) => {
      map.has(targetWord) ? res.push(map.get(targetWord)) : res.push(-1);
    });

    res.includes(-1) ? answer.push(-1) : answer.push(res.reduce((a, c) => a + c, 0));
  });

  return answer;
}
