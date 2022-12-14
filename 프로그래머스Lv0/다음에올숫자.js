function solution(common) {
  //등차수열, 등비수열 2가지 경우
  const first = common[0];
  const second = common[1];
  const third = common[2];
  const length = common.length - 1;
  const last = common[length];
  var answer = 0;

  //등차수열인 경우 다음 원소를 구한다.
  if (second - first === third - second) {
    const diff = second - first;
    answer = last + diff;
  }

  //등비수열인 경우 다음 원소를 구한다.
  else {
    const diff = second / first;
    answer = last * diff;
  }

  return answer;
}

solution([1, 2, 3]); //4
solution([1, 2, 3, 4]); //5
solution([2, 5, 8, 11]); //14

solution([1, 2, 4]); //8
solution([2, 4, 8]); //16
solution([1, 3, 9, 27]); //81
