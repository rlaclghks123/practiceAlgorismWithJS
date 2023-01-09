// 2016년 1월 1일은 금요일입니다.
// 2016년 a월 b일은 무슨 요일일까요?
// 즉 두 수 a,b를 입력받아 a월 b일이 무슨 요일인지 return
// 2016년은 윤년입니다. (2월이 29일까지 있음)
// 1,3,5,7,8,10,12 => 31일
// 2,4,6,9,11 => 30일
11 * 30 == 330, 28 + 7;
const days = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
const month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function solution(a, b) {
  var answer = '';

  // 1. 몇월인지(a) 체크한 뒤, 그 전까지 일수를 다 더해준다.
  let test = 0;
  for (let i = 0; i < a; i++) {
    test += month[i];
  }

  // 2. 해당 월의 일자를 더해준다(b)
  test += b;

  // 3. 요일을 체크해준다.
  answer = days[test % 7];
  return answer;
}

solution(5, 24); // "TUE"

solution(1, 1); // "TUE"

solution(2, 1); // "TUE"

// 다른사람의 코드
// Date를 사용해서 날짜를 구해줬다.

function getDayName(a, b) {
  var date = new Date(2016, a - 1, b);
  return date.toString().slice(0, 3).toUpperCase();
}

//아래 코드는 테스트를 위한 코드입니다.
console.log(getDayName(5, 24));
