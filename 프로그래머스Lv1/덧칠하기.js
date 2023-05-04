// 구역 n, 왼쪽부터 1번부터 n번
// 페인트 칠하는 롤러의 길이는 m미터
// 롤러가 벽에 벗어나면 안됨
// 구역의 일부분만 포함되도록 칠하면 안됨

function solution(n, m, section) {
  // 기본적으로 1로 초기화 해줍니다.
  let wall = Array.from({ length: n }, () => 1);

  // section을 돌면서 다시 칠해야 하는 부분을 0으로 바꿔줍니다. -1을 해준 이유는 wall은 0번째 부터 시작하기 때문
  section.forEach((item) => {
    wall[item - 1] = 0;
  });

  let cnt = 0;

  // wall을 돌면서 item이 0이면서, i+m이 n보다 작거나 같은경우에 for문을 돌아 i부터 i+m까지 1로 바꿔줍니다.(페인트칠)
  // 칠해주고 난 뒤, cnt를 해줍니다.
  wall.forEach((item, i) => {
    if (item === 0 && i + m <= n) {
      for (let j = i; j < i + m; j++) {
        wall[j] = 1;
      }
      cnt++;
    }
  });
  // wall에 0이 남아있다면 1번 더 페인트칠 해야하기 때문에 cnt를 해주고, 총 cnt값을 출력합니다.
  if (wall.includes(0)) cnt++;
  return cnt;
}
