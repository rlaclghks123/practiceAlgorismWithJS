function solution(array, n) {
  var answer = 0;

  //array를 돌면서 n이랑 같으면 +1개를 count해준다.
  array.map((item) => {
    if (item === n) answer++;
  });

  return answer;
}

solution([1, 1, 2, 3, 4, 5], 1);
//	2
