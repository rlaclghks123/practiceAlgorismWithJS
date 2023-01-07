// n과 m을 이용해 별문자(*)를 나타내기
// 터미널에서 node 파일위치를 입력하면 콘솔로 확인 가능

process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);

  // 2중 for문을 돌면서 *을 찍어준다.
  for (let i = 0; i < b; i++) {
    let temp = '';
    for (let j = 0; j < a; j++) {
      temp += '*';
    }
    console.log(temp);
  }
});

// 5 3
// *****
// *****
// *****

// 다른사람의 코드
// repeat를 사용  repeat를 사용하는 경우가 많아 다음에는 꼭 repeat를 사용해봐야겠다.

process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);
  const row = '*'.repeat(a);
  for (let i = 0; i < b; i++) {
    console.log(row);
  }
});
