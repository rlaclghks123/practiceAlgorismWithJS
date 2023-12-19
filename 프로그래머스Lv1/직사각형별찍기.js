// 1. row만큼 *를 더해준다.
// 2. col만큼 1에서 구한 row를 출력해준다.

process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const [row, col] = data.split(' ');

  for (let i = 0; i < col; i++) {
    const rowStar = '*'.repeat(row);
    console.log(rowStar);
  }
});
