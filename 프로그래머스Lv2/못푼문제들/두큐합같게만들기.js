// 하나의 큐를 골라 원소를 추출, 추출된 원소를 다른큐에 집어넣어 큐의 원소의 합이 같도록
// 이때 작업의 최소 횟수를 구함, pop, insert를 합쳐서 1회로 간주
// pop : 배열의 첫번째 요소, insert : 배열의 끝 요소
// 각 큐의 원소합을 같게 만들 수 없는 경우 -1을 return

// 투포인터 알고리즘을 이용한 풀이
function solution(queue1, queue2) {
  var answer = 0;

  // 1. 각각의 큐에 포인터 값을 초기화 해준다.
  let q1Pointer = 0;
  let q2Pointer = queue1.length;

  // 2. 두개의 큐를 하나의 큐로 합해준다.
  const totalQueue = [...queue1, ...queue2];

  // 3. 총합의 절반값을 구해준다.
  let sum1 = queue1.reduce((acc, cur) => acc + cur, 0);
  let sum2 = queue2.reduce((acc, cur) => acc + cur, 0);
  const half = (sum1 + sum2) / 2;

  // 4. 투포인터 알고리즘을 통해 값을 구해준다.
  // qeueue1.length*4 까지 반복하는 이유는 한 포인터당 최대 2n번 이동하기 때문
  for (let cnt = 0; cnt < queue1.length * 4; cnt++) {
    // 4-1 만약 절반의 값과 sum1이 같다면 return 해준다.
    if (sum1 === half) {
      return (answer = cnt);
    }
    sum1 =
      sum1 < half
        ? // 4-2 sum1의 값이 절반값보다 큰경우 sum1에 q2포인터의 위치를 이동시킨뒤, 깂을 더해줍니다.  => 큰 큐(q2)에서 작은큐로(q1) 넘겨줌
          sum1 + totalQueue[q2Pointer++ % totalQueue.length]
        : // 4-3 sum1의 값이 절반값보다 작은경우 sum1에 q1포인터의 위치를 이동시킨뒤, 깂을 빼줍니다.  => 큰 큐(q1)에서 작은큐(q2)로 넘겨줌
          sum1 - totalQueue[q1Pointer++ % totalQueue.length];
  }
  // 찾지 못한경우 -1을, 아닌경우 answer을 출력해줍니다.

  return answer === 0 ? -1 : answer;
}

// function solution(queue1, queue2) {
//   var answer = 0;

//   // 1. 각각의 큐에 포인터 값을 초기화 해준다.
//   let q1Pointer = 0;
//   let q2Pointer = queue1.length;

//   // 2. 두개의 큐를 하나의 큐로 합해준다.
//   const totalQueue = [...queue1, ...queue2];

//   // 3. 총합의 절반값을 구해준다.
//   let sum1 = queue1.reduce((acc, cur) => acc + cur, 0);
//   let sum2 = queue2.reduce((acc, cur) => acc + cur, 0);
//   const half = (sum1 + sum2) / 2;

//   for (let cnt = 0; cnt < queue1.length * 3; cnt++) {
//     if (sum1 === half) {
//       return (answer = cnt);
//     }

//     sum1 =
//       sum1 < half
//         ? sum1 + totalQueue[q2Pointer++ % totalQueue.length]
//         : sum1 - totalQueue[q1Pointer++ % totalQueue.length];
//   }
//   console.log(answer);
// }

solution([3, 2, 7, 2], [4, 6, 5, 1]); // 	2

solution([1, 2, 1, 2], [1, 10, 1, 2]); // 	7

solution([1, 1], [1, 5]); // -1
