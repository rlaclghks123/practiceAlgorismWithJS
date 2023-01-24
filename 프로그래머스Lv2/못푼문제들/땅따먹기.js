// N행 4열, 각 행의 4칸중 한 칸만 밟으면서 내려와야 합니다.
// 단 한 행씩 내려올 때, 같은 열을 연속해서 밟을 수 없는 특수 규칙이 있습니다.
// 마지막 행까지 모두 내려왔을대 얻을 수 있는 점수의 최대값을 return
// 행의 개수 100,000
// 열의 개수는 4개, land는 2차원 배열
// 점수는 100 이하의 자연수

function solution(land) {
  var answer = 0;

  // land 의 값들을 돌면서 reduce를 통해 [현재값+이전행들의 최대값,      현재값+이전행들의 최대값,      현재값+이전행들의 최대값,현      재값+이전행들의 최대값 ] 으로 만들어준다.
  // 같은 열을 연속으로 밟을 수 없기 때문에 현재 0번째는 이전값들의 1,2,3 부분 중  최대값과 같이 겹치지 않게 만들어준다.
  // 마지막 행에서 최대값을 찾아준다.

  return Math.max(
    ...land.reduce(
      (acc, cur) => {
        return [
          cur[0] + Math.max(acc[1], acc[2], acc[3]),
          cur[1] + Math.max(acc[0], acc[2], acc[3]),
          cur[2] + Math.max(acc[0], acc[1], acc[3]),
          cur[3] + Math.max(acc[0], acc[1], acc[2]),
        ];
      },
      [0, 0, 0, 0]
    )
  );
}

solution([
  [1, 2, 3, 5],
  [5, 6, 7, 8],
  [4, 3, 2, 1],
]); // 16
