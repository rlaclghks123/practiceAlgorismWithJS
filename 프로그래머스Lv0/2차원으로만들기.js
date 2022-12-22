//num_list를 n개를 묶어 2차원 배열로 만들어 return

function solution(num_list, n) {
  let answer = [];

  // 1. num_list의 모든 배열을 돌면서 i는 n만큼 더해준다.
  for (let i = 0; i < num_list.length; i += n) {
    // 2. num_list에서 n개를 담을 배열을 만들어준다.
    const temp = [];
    for (let j = i; j < i + n; j++) {
      temp.push(num_list[j]);
    }
    // 3. num_list에서 n개를 담은 배열을 answer배열에 담아준다.
    answer.push(temp);
  }

  return answer;
}

solution([1, 2, 3, 4, 5, 6, 7, 8], 2); //[[1, 2], [3, 4], [5, 6], [7, 8]]

solution([100, 95, 2, 4, 5, 6, 18, 33, 948], 3); // [[100, 95, 2], [4, 5, 6], [18, 33, 948]]
