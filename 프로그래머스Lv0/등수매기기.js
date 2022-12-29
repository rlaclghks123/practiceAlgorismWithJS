// score가 주어질때, 영어점수와 수학점수의 평균을 기준으로 매긴 등수를 담은 배열을 return
// 같을경우 공동으로 지정하고, 다음 등수를 없앤다. Ex) 1,2,2,4,5...

function solution(score) {
  var answer = [];

  // 1. 각 2차배열의 평균을 구해준다.
  const avg = score.map((item) => {
    return item.reduce((acc, cur) => acc + cur, 0) / 2;
  });

  // 2. 평균을 구한 배열을 내림차순으로 정렬해준다.
  const sort = [...avg].sort((a, b) => b - a);

  // 3. avg의 요소를 sort에서 위치(index)를 찾아 배열로 만든다.
  answer = avg.map((item) => {
    return sort.indexOf(item) + 1;
  });

  // 4. 출력한다.
  return answer;
}

solution([
  [80, 70],
  [90, 50],
  [40, 70],
  [50, 80],
]); // [1, 2, 4, 3]

solution([
  [80, 70],
  [70, 80],
  [30, 50],
  [90, 100],
  [100, 90],
  [100, 100],
  [10, 30],
]); // [4, 4, 6, 2, 2, 1, 7]
