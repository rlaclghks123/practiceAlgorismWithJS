function solution(num_list) {
  var answer = [];

  //num_list의 첫번째 값을 answer의 첫번째 요소에 넣어준다.
  for (let i = 0; i < num_list.length; i++) {
    answer.unshift(num_list[i]);
  }
  return answer;
}

solution([1, 0, 1, 1, 1, 3, 5]);
//[(5, 3, 1, 1, 1, 0, 1)];
