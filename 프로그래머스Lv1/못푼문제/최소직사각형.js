// 모든 명함을 수납할 수 있는 가장 작은 지갑의 크기를 return
// 둘중 더 큰값을 한곳에 몰아놓고, 큰값중에 큰값, 작은값중 큰값을 곱한다는 생각을 못했었음.

function solution(sizes) {
  var answer = [];
  let width = [];
  let height = [];
  // 1. 가로와 세로의 크기를 비교해서 큰값은 0번째 배열에, 작은값은 1번째 배열에 담아준다.
  sizes = sizes.map((item) => (item[0] < item[1] ? [item[1], item[0]] : [item[0], item[1]]));

  // 2. sizes의 모든 요소를 돌면서 가로와 세로 배열에 값을 담아준다.
  for (let i = 0; i < sizes.length; i++) {
    width.push(sizes[i][0]);
    height.push(sizes[i][1]);
  }

  // 3. 가로의 최대값과 세로의 최대값을 곱해준다.
  answer = Math.max(...width) * Math.max(...height);
  return answer;
}

solution([
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
]); //4000
solution([
  [10, 7],
  [12, 3],
  [8, 15],
  [14, 7],
  [5, 15],
]); //	120
solution([
  [14, 4],
  [19, 6],
  [6, 16],
  [18, 7],
  [7, 11],
]); //	133
