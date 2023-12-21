// 2016년 1월 1일은 금요일입니다.
// 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴
// 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT

// 제한 조건
// 2016년은 윤년입니다. -> 2월을 29일로
// 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

function solution(a, b) {
  const dayOfWeek = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
  const totalDate = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const total = totalDate.slice(0, a).reduce((acc, cur, idx) => (acc += totalDate[idx]), 0);

  return dayOfWeek[(total + b) % 7];
}
// 다른사람의 코드
// Date를 사용해서 날짜를 구해줬다.

function solution(a, b) {
  var date = new Date(2016, a - 1, b);
  return date.toString().slice(0, 3).toUpperCase();
}
