function solution(n, build_frame) {
  const pillar = Array.from({ length: n + 1 }, () => Array.from({ length: n + 1 }, () => false));
  const bar = Array.from({ length: n + 1 }, () => Array.from({ length: n + 1 }, () => false));
  let cnt = 0;

  build_frame.forEach((item) => {
    let [y, x, a, b] = item;

    if (a === 0) {
      // 기둥을
      if (b === 1) {
        // 설치
        if (isInstallPillar(x, y)) {
          pillar[x][y] = true;
          cnt++;
        }
      }
      // 삭제
      else {
        pillar[x][y] = false;
        if (!canDelete(n)) pillar[x][y] = true;
        else cnt--;
      }
    }

    // 보를
    else {
      // 설치
      if (b === 1) {
        if (isInstallBar(x, y)) {
          bar[x][y] = true;
          cnt++;
        }
      }
      // 삭제
      else {
        bar[x][y] = false;
        if (!canDelete(n)) bar[x][y] = true;
        else cnt--;
      }
    }
  });

  let result = Array.from({ length: cnt }, () => Array.from({ length: 3 }, () => 0));
  let idx = 0;

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      if (pillar[i][j]) {
        result[idx][0] = j;
        result[idx][1] = i;
        result[idx++][2] = 0;
      }
      if (bar[i][j]) {
        result[idx][0] = j;
        result[idx][1] = i;
        result[idx++][2] = 1;
      }
    }
  }

  return result;

  function isInstallPillar(x, y) {
    if (x === 0) return true;
    if (x > 0 && pillar[x - 1][y]) return true;
    if ((y > 0 && bar[x][y - 1]) || bar[x][y]) return true;
    return false;
  }

  function isInstallBar(x, y) {
    if ((x > 0 && pillar[x - 1][y]) || pillar[x - 1][y + 1]) return true;
    else if (y > 0 && bar[x][y - 1] && bar[x][y + 1]) return true;
    return false;
  }

  function canDelete(n) {
    for (let i = 0; i <= n; i++) {
      for (let j = 0; j <= n; j++) {
        if (pillar[i][j] && !isInstallPillar(i, j)) return false;
        if (bar[i][j] && !isInstallBar(i, j)) return false;
      }
    }
    return true;
  }
}

// solution(5, [
//   [1, 0, 0, 1],
//   [1, 1, 1, 1],
//   [2, 1, 0, 1],
//   [2, 2, 1, 1],
//   [5, 0, 0, 1],
//   [5, 1, 0, 1],
//   [4, 2, 1, 1],
//   [3, 2, 1, 1],
// ]);
// [[1,0,0],[1,1,1],[2,1,0],[2,2,1],[3,2,1],[4,2,1],[5,0,0],[5,1,0]]

solution(5, [
  [0, 0, 0, 1],
  [2, 0, 0, 1],
  [4, 0, 0, 1],
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [2, 1, 1, 1],
  [3, 1, 1, 1],
  [2, 0, 0, 0],
  [1, 1, 1, 0],
  [2, 2, 0, 1],
]);

// [[0,0,0],[0,1,1],[1,1,1],[2,1,1],[3,1,1],[4,0,0]]
