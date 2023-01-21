// 귤을 k개를 골라 상자 하나에 담아 판매,
// 귤을 크기로 분류 했을 때 서로 다른 종류의 수를 최소화
//

function solution(k, tangerine) {
  var answer = 0;
  let res = 0;
  // map에 담는다.
  const map = new Map();

  // map을 개수를 기준으로 내림차순 해준다.
  tangerine.forEach((item) => {
    map.set(item, (map.get(item) || 0) + 1);
  });

  const sort = [...map].sort((a, b) => b[1] - a[1]);
  console.log(sort);
  sort.forEach((item) => {
    const [madarine, count] = item;
    if (answer + count > k) {
      if (answer < k) ++res;
      answer += count;
      return;
    }
    answer += count;
    res++;
  });

  // 총 개수가 k개인경우 종류를 찾는다.

  return res;
}

solution(6, [1, 3, 2, 5, 4, 5, 2, 3]); // 3

solution(4, [1, 3, 2, 5, 4, 5, 2, 3]); // 2

solution(2, [1, 1, 1, 1, 2, 2, 2, 3]); // 1

// 다른사람 코드
// while문에 k가 양수인 조건으로 반복하며, cnt++한뒤, k에 값을 빼주었다.  더 깔끔한듯

function solution(k, tangerine) {
  let map = new Map();
  let answer = 0;
  tangerine.forEach((item) => {
    map.set(item, (map.get(item) || 0) + 1);
  });

  map = [...map].sort((a, b) => b[1] - a[1]);
  let i = 0;
  while (k > 0) {
    answer++;
    k -= map[i][1];
    i++;
  }
  console.log(answer);
  return answer;
}
