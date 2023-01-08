// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 숫자를 return

// 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면
// array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
// 배열을 정렬하면 [2, 3, 5, 6]입니다.
// 배열의 3번째 숫자는 5입니다.

function solution(array, commands) {
  var answer = [];

  answer = commands.map((item) => {
    // 1. commands를 통해 i,j,k를 구해준다.
    const i = item[0] - 1;
    const j = item[1];
    const k = item[2] - 1;

    // 2. i,j만큼 잘라준다.
    const sliced = array.slice(i, j);

    // 3. 자른값들을 정렬해준다.
    const sorted = sliced.sort((a, b) => a - b);

    console.log(k);
    // 4. k번째 숫자를 구해준뒤, 배열에 담아준다.
    const getNum = sorted[k];
    return getNum;
  });

  console.log(answer);
  return answer;
}

solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
); // [(5, 6, 3)];

solution([1, 2, 3], [[1, 2, 3]]); // [(5, 6, 3)];
