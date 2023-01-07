// 같은행, 같은열의 값을 서로 더한결과
// 2개의 행렬을 입력받아 행렬 덧셈의 결과를 반환

function solution(arr1, arr2) {
  answer = [];
  // map을 이용해서 2배열의 값을 더해서 새로운 배열을 return
  answer = arr1.map((item, i) => {
    return item.map((item2, j) => {
      return item2 + arr2[i][j];
    });
  });

  return answer;
}

solution(
  [
    [1, 2],
    [2, 3],
  ],
  [
    [3, 4],
    [5, 6],
  ]
);
// [[4,6],[7,9]]

solution([[1], [2]], [[3], [4]]); // 	[[4],[6]]

// 다른사람의코드
// 2중 for문  사용

function solution(arr1, arr2) {
  var answer = [[]];
  for (var i = 0; i < arr1.length; i++) {
    answer[i] = [];
    for (var j = 0; j < arr1[i].length; j++) {
      answer[i].push(arr1[i][j] + arr2[i][j]);
    }
  }
  return answer;
}
