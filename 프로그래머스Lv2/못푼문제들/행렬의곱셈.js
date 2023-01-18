// arr에 arr2를 곱한 결과를 반환하는 함수
function solution(arr1, arr2) {
  return arr1.map((row) => {
    return arr2[0].map((x, index) => {
      return row.reduce((a, b, c) => a + b * arr2[c][index], 0);
    });
  });
}

solution(
  [
    [1, 4],
    [3, 2],
    [4, 1],
  ],
  [
    [3, 3],
    [3, 3],
  ]
); // [[15, 15], [15, 15], [15, 15]]

solution(
  [
    [2, 3, 2],
    [4, 2, 4],
    [3, 1, 4],
  ],
  [
    [5, 4, 3],
    [2, 4, 1],
    [3, 1, 1],
  ]
); //	[[22, 22, 11], [36, 28, 18], [29, 20, 14]]
