// 1. wallpaper를 순회하면서 현재값이 #이라면 위치를 각각의 가로와 세로배열에 담아준다.
// 2. 가로와 세로 배열을 오름차순으로 정렬해준다.
// 3. [가로의 최소값, 세로의 최소값, 가로의 최대값+1, 세로의 최대값+1]을 담아 출력한다.

function solution(wallpaper) {
  const rows = [];
  const cols = [];

  wallpaper.forEach((row, i) => {
    [...row].forEach((col, j) => {
      if (col === '#') {
        rows.push(i);
        cols.push(j);
      }
    });
  });

  rows.sort((a, b) => a - b);
  cols.sort((a, b) => a - b);

  return [rows[0], cols[0], rows[rows.length - 1] + 1, cols[cols.length - 1] + 1];
}
