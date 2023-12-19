// 같은행, 같은열의 값을 서로 더한결과
// 2개의 행렬을 입력받아 행렬 덧셈의 결과를 반환

function solution(arr1, arr2) {
  const result = arr1.map((item, i) => {
    const sum = item.map((item2, i2) => item2 + arr2[i][i2]);
    return sum;
  });

  return result;
}
