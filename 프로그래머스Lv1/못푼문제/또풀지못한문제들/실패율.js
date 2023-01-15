// 실패율은 스테이지에 도달했으나 아직 클리어하지 못한 플레이어수 / 스테이지에 도달한 플레이어수
// 전체스테이지의 개수 n,  현재 멈춰있는 스테이지의 번호가 담긴 배열 stages
// 실패율이 높은 스테이지부터 내림차순으로 스테이지 번호가 담긴 배열을 return
// 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저오도록
// 스테이지에 도달한 유저가 없는 경우 실패율은 0

function solution(N, stages) {
  let result = [];
  for (let i = 1; i <= N; i++) {
    // 1. 1부터 n까지 반복하여 stage의 요소 x가 i보다 크거나 같은경우(스테이지에 도달한 플레이어)의 수를 구해준다.
    let reach = stages.filter((x) => x >= i).length;

    // 2. stage의 요소 x와 같은 경우(스테이지에 도달했으나 아직 클리어 하지 못한경우)의 수를 구해준다.
    let curr = stages.filter((x) => x === i).length;

    // 3. i의 값과, 1,2의 값을 나눈값을 result에 담아준다.
    result.push([i, curr / reach]);
  }
  console.log(result);
  // 3. result의 값 중 나눈값을 기준으로 내림차순으로 정렬해준다.
  result.sort((a, b) => b[1] - a[1]);

  // 4. map을 통해 index값을 출력해준다.
  return result.map((x) => x[0]);
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]); // [3,4,2,1,5]

solution(4, [4, 4, 4, 4, 4]); // [4,1,2,3]

function solution(N, stages) {
  let result = [];

  for (let i = 1; i <= N; i++) {
    const reach = stages.filter((x) => x >= i).length;
    const noClear = stages.filter((x) => x === i).length;
    result.push([i, noClear / reach]);
  }
  return result.sort((a, b) => b[1] - a[1]).map((item) => item[0]);
}

// 확률과 i를 []에 같이 넣어주고, 이를 확률을 기준으로 정렬 sort((a,b)=>b[1]-a[1])후 map을 통해 i를 item[0] 하는 법을 잘 이용해야겠다.

function solution(N, stages) {
  var answer = [];

  for (let i = 1; i <= N; i++) {
    const clear = stages.filter((f) => f >= i).length;
    const noClear = stages.filter((f) => f === i).length;
    answer.push([i, noClear / clear]);
  }
  console.log(answer.sort((a, b) => b[1] - a[1]).map((item) => item[0]));
  return answer;
}
