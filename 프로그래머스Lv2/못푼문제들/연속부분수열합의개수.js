// 원형 수열이란 처음과 끝이 연결된 형태의 수열
// 원형 수열의 연속 부분 수열 합으로 만들 수 있는 수의 개수를 return

function solution(elements) {
  const set = new Set();
  for (let i = 1; i <= elements.length; i++) {
    let ele = elements.concat(elements.slice(0, i));
    for (let j = 0; j < elements.length; j++) {
      set.add(ele.slice(j, i + j).reduce((acc, cur) => acc + Number(cur), 0));
    }
  }
  return [...set].length;
}

solution([7, 9, 1, 1, 4]); // 18
