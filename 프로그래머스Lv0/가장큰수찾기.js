// 가장 큰수와 그 수의 인덱스를 담은 배열을 return

function solution(array) {
  var answer = [];
  const len = array.length - 1;

  // 1. array을 오름차순으로 정렬한다.
  const sortedArr = Array.from(array).sort((a, b) => {
    return a - b;
  });

  // 2. sortedArr의 마지막값과, array의 가장큰값의 index값을 answer에 담아준다.
  answer.push(sortedArr[len], array.indexOf(sortedArr[len]));

  // 3. answer을 return한다.
  return answer;
}

solution([1, 8, 3]); //[8, 1]

solution([9, 10, 11, 8]); //[(11, 2)];

solution([9, 10, 11, 15, 3, 2, 5, 8]); //[(15, 3)];
