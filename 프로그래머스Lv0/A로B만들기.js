// before 문자열의 순서를 바꿨을때 after문자열이 가능할 경우 1 아닌경우 0을 return

function solution(before, after) {
  var answer = 0;

  before = [...before].sort((a, b) => {
    return a.localeCompare(b);
  });

  after = [...after].sort((a, b) => {
    return a.localeCompare(b);
  });

  if (before.join('') === after.join('')) {
    answer = 1;
  } else {
    answer = 0;
  }

  return answer;
}

solution('olleh', 'hello'); // 1

solution('allpe', 'apple'); //	0
