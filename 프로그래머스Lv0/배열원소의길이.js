function solution(strlist) {
  var answer = [];

  // 배열의 요소의 길이를 구한다.
  strlist.map((item) => {
    answer.push(item.length);
  });
  return answer;
}

solution(['We', 'are', 'the', 'world!']); // [(2, 3, 3, 6)]
solution(['I', 'Love', 'Programmers.']); //[(1, 4, 12)];
