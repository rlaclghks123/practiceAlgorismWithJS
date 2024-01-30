function solution(arr1, arr2) {
  const ans = arr1.map((arr1Items) => {
    const sumArr = arr2[0].map((_, i) => {
      const sum = arr1Items.reduce((acc, cur, j) => acc + cur * arr2[j][i], 0);
      return sum;
    });

    return sumArr;
  });

  return ans;
}

// arr1 : [[2, 3, 2], [4, 2, 4], [3, 1, 4]]
// arr2 : [[5, 4, 3], [2, 4, 1], [3, 1, 1]]
// return : [[22, 22, 11], [36, 28, 18], [29, 20, 14]]

// ans[0][0] = (2 * 5) + (3 * 2) + (2 * 3) = 22
// ans[0][1] = (2 * 4) + (3 * 4) + (2 * 1) = 22
// ans[0][2] = (2 * 3) + (3 * 1) + (2 * 1) = 11

// ans[0][0] = (arr1[0][0] * arr2[0][0]) + (arr1[0][1] * arr2[1][0]) + (arr1[0][2] * arr2[2][0])
// ans[0][1] = (arr1[0][0] * arr2[0][1]) + (arr1[0][1] * arr2[1][1]) + (arr1[0][2] * arr2[2][1])
// ans[0][2] = (arr1[0][0] * arr2[0][2]) + (arr1[0][1] * arr2[1][2]) + (arr1[0][2] * arr2[2][2])

// 1. 2중 for문을 통해 arr1 내부에서 arr2[0]값을 순회하면서 각 요소를 곱한 값을 다 더해준다.
// 1-1. (arr1의 요소 * arr2의 요소)의 합을 구해줍니다.
// 2. 각 요소의 합을 배열로 담고, 각 배열을 배열에 담아 2차원 배열을 만들어 출력합니다.
