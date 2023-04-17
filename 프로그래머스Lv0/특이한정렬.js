// n을 기준으로 가까운 수부터 정렬할려고 합니다.
// n으로부터 거리가 같다면 더 큰수를 앞에 오도록 배치
// numList와 정수n이 주어질때 n으로부터 가까운 순서대로 정렬한 배열을 return

function solution(numlist, n) {
  var answer = [];

  // 1. n을 뺀 값으로 정렬을 해준다.
  answer = numlist.sort((a, b) => {
    const [aGab, bGab] = [Math.abs(a - n), Math.abs(b - n)];

    // 2. n을 뺀 두 값중이 거리가 같다면 더 큰 수를 우선 배치
    if (aGab === bGab) return b - a;

    // 3. n을 뺀 두 값이 다르다면 거리별 오름차순 정렬
    return aGab - bGab;
  });

  // 4. 출력한다.
  return answer;
}

// 틀린이유 : 정렬에 대한 지식이 부족했던것 같다.
// 다시풀기
function solution(numlist, n) {
  var answer = [];
  answer = numlist.sort((a, b) => {
    const [aGap, bGap] = [Math.abs(a - n), Math.abs(b - n)];
    if (aGap === bGap) return b - a;
    return aGap - bGap;
  });
  console.log(answer);
  return answer;
}

function solution(numlist, n) {
  var answer = [];
  numlist.sort((a, b) => {
    const [aGap, bGap] = [Math.abs(a - n), Math.abs(b - n)];
    if (aGap === bGap) return b - a;
    return aGap - bGap;
  });
  console.log(numlist);
  return answer;
}

function solution(numlist, n) {
  numlist.sort((a, b) => {
    let [aGap, bGap] = [Math.abs(a - n), Math.abs(b - n)];
    if (aGap === bGap) return b - a;
    return aGap - bGap;
  });
  console.log(numlist);
}

// 1. sort를 활용해 2개의 원소를 비교한다.
// 1-1 각 원소는 n과의 차이를 구한다.

// 2. 각 원소의 n과의 차이가 같은경우 더 큰 수를 앞에 오도록 배치

// 3. 각 원소의 n과의 차이가 다른 경우 '차이가 작은 값'을 앞으로 정렬한다.(가까운수를 앞에)

function solution(numlist, n) {
  return numlist.sort((a, b) => {
    let [aGap, bGap] = [Math.abs(a - n), Math.abs(b - n)];
    if (aGap === bGap) return b - a;
    return aGap - bGap;
  });
}

solution([1, 2, 3, 4, 5, 6], 4); // [4, 5, 3, 6, 2, 1]

solution([10000, 20, 36, 47, 40, 6, 10, 7000], 30); // [36, 40, 20, 47, 10, 6, 7000, 10000]
