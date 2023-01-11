// 최대 당첨순위와 최소 당첨 순위를 결정
// 0은 알아볼수 없는 번호

function solution(lottos, win_nums) {
  var answer = [];
  let win = [6, 3, 5, 4, 3, 2, 1];

  let count = 0;
  let countZero = 0;

  lottos.forEach((item) => {
    if (win_nums.includes(item)) {
      count++;
    }
    if (item === 0) countZero++;
  });

  answer = [win[count + countZero], win[count]];

  return answer;
}

solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]); //[3, 5]
solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]); //[1, 6]
solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]); //[1, 1]

// 다른사람의 코드
// filter를 사용했으며 !v를 통해 0을 count했다.

function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let minCount = lottos.filter((v) => win_nums.includes(v)).length;
  let zeroCount = lottos.filter((v) => !v).length;

  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}
