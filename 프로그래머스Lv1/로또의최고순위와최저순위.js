// 알아볼 수 없는 번호를 0으로 표기하기로 하고, 민우가 구매한 로또 번호 6개가 44, 1, 0, 0, 31 25라고 가정해보겠습니다.
// 당첨 번호	 31	 10	     45	 1	 6	 19	 결과
// 최고 순위 번호	31	0→10	44	1	0→6	25	4개 번호 일치, 3등
// 최저 순위 번호	31	0→11	44	1	0→7	25	2개 번호 일치, 5등
// 순서와 상관없이, 구매한 로또에 당첨 번호와 일치하는 번호가 있으면 맞힌 걸로 인정됩니다

// 1. 등수를 담은 DB를 만든다.
// 2. 0의 개수를 체크한다.
// 3. lottos를 돌면서 win_nums를 lottos에 포함되어 있지 않은 숫자를 추출한다.
// 4. 총 로또개수 - 못맞춘 숫자 를 통해 맞춘 개수를 구한다.
// 5. 0의 개수를 통해 최저순위와 최고순위를 출력한다.

function solution(lottos, win_nums) {
  const DB = [6, 6, 5, 4, 3, 2, 1];
  let win_nums_tmp = [...win_nums];
  const zeroCnt = lottos.filter((num) => num === 0).length;

  lottos.forEach((num) => (win_nums_tmp = win_nums_tmp.filter((winNum) => num !== winNum)));

  const answer = win_nums.length - win_nums_tmp.length;

  const min = answer;
  const max = answer + zeroCnt;

  return [DB[max], DB[min]];
}

// 다른사람의 코드
// filter를 사용했으며 !v를 통해 0을 count했다.

function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let minCount = lottos.filter((v) => win_nums.includes(v)).length;
  let zeroCount = lottos.filter((v) => !v).length;

  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}
