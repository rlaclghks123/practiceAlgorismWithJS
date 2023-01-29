// 정수를 이어 붙여 만들 수 있는 가장 큰 수를 문자열로 return

function solution(numbers) {
  var answer = '';

  // 두개의 정수를 붙혀서 더큰수를 정렬한뒤, 문자열로 반환한다.
  let sort = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');

  // answer = '000' 인경우 그냥 '0'을 출력하기 위해 첫번째 문자가 0인경우 0, 아닌경우 sort를 출력한다.
  answer = sort[0] === '0' ? '0' : sort;
  return answer;
}

solution([6, 10, 2]); // "6210"

solution([3, 30, 34, 5, 9]); // "9534330"

solution([12, 1213]); // 121312

solution([45, 454]); // 45454
