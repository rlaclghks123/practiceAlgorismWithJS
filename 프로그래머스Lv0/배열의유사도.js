function solution(s1, s2) {
  //두개의 배열에 같은 요소의 개수를 출력
  var answer = 0;

  // 1.두개의 배열중 길이가 짧은 배열을 찾는다.
  // 2. 짧은 배열의 요소들을 길이가 긴 배열에 포함되어있는지 확인하여, 포함 되어있으면 count해준다.

  if (s1.length - s2.length < 0) {
    s1.forEach((char) => s2.includes(char) && answer++);
  } else {
    s2.forEach((char) => s1.includes(char) && answer++);
  }

  return answer;
}

solution(['a', 'b', 'c'], ['com', 'b', 'd', 'p', 'c']); //	2

solution(['n', 'omg'], ['m', 'dot']); // 0
