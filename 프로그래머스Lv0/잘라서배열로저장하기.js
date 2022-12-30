// 문자열 my_str을 길이 n으로 잘라서 저장한 배열을 return

function solution(my_str, n) {
  var answer = [];

  // 1. my_str에서 n만큼 잘라서 answer에 담아준다.
  for (let i = 0; i < my_str.length; i += n) {
    answer.push(my_str.slice(i, i + n));
  }

  // 2. answer를 출력한다.
  return answer;
}

solution('abc1Addfggg4556b', 6); // ["abc1Ad", "dfggg4", "556b"]

solution('abcdef123', 3); //["abc", "def", "123"]
