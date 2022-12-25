// 문자열 s에서 한번만 등장하는 문자를 사전순으로 정렬한 문자열을 return

function solution(s) {
  var answer = '';

  // 1. 모든 요소를 확인하기 위해 s를 배열로 만든다.
  const arr = s.split('');
  const result = [];

  // 2. 모든 요소를 확인하여 각 요소가 s의 처음부터 시작하여 index의 값과, 마지막부터 시작하여 index값이 같은지 확인하여 같다면 result에 담아준다.
  arr.forEach((item) => {
    if (s.indexOf(item) === s.lastIndexOf(item)) {
      result.push(item);
    }
  });

  // 3. result의 값을 정렬후, 문자열로 바꿔 출력한다.
  answer = result.sort().join('');
  return answer;
}

// 한번만 등장하기 때문에, 앞에서 부터 시작하여 나온 문자와 뒤에서 부터 시작한 문자가 같아야 한다.
// 따라서 indexOf(item) === lastIndexOf(item) 의 결과가 같아야 한다.

solution('abcabcadc'); // "d"

solution('abdc'); // "abcd"

solution('hello'); //"eho"
