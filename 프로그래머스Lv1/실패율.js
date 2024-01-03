// 1. 실패율을 구한다. -> 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
// 1-1. 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수를 구한다.
// 1-2. 스테이지에 도달한 플레이어 수를 구한다.
// 2. 실패율, idx가 담긴 배열을 만든다.
// 3. 2에서 만든 배열을 내림차순으로 만들고, 만약 실패율이 같다면 낮은 순서로 담아 출력한다.

function solution(N, stages) {
  const answer = [];

  for (let i = 1; i <= N; i++) {
    const first = stages.filter((num) => num === i).length;
    const second = stages.filter((num) => num >= i).length;

    answer.push([first / second, i]);
  }

  return answer
    .sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]))
    .map(([fail, idx]) => idx);
}
