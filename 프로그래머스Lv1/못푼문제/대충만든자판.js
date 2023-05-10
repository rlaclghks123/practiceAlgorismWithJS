function solution(keymap, targets) {
  const keyMap = new Map();

  // keyMap에 등록된 문자열의 최소 횟수를 담아줍니다.
  keymap.forEach((map) => {
    for (let i = 0; i < map.length; i++) {
      if (keyMap.has(map[i])) {
        const idx = Math.min(i + 1, keyMap.get(map[i]));
        keyMap.set(map[i], idx);
      } else {
        keyMap.set(map[i], i + 1);
      }
    }
  });

  let ans = [];
  // targets를 돌면서 각 단어가 keyMap에 들어있는 횟수를 cnt에 담아줍니다.
  targets.forEach((words) => {
    let cnt = [];
    [...words].forEach((char) => cnt.push(keyMap.get(char)));

    // 총 cnt의 합을 담아줍니다.
    let sum = cnt.reduce((a, c) => a + c, 0);

    // 만약 값이 없다면 undefined가 섞여 있으면 NaN이 나오기 때문에 NaN이 된다면 -1을 ans에 담아줍니다.
    if (Number.isNaN(sum)) ans.push(-1);
    // 만약 값이 있다면 ans에 sum을 담아줍니다.
    else ans.push(sum);
  });
  // ans를 출력합니다.
  return ans;
}
