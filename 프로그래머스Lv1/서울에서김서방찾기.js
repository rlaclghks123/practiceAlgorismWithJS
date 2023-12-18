// 1. seoul 배열에서 IndexOf를 활용하여 KIM의 index를 찾아준다.
// 2. "김서방은 해당위치에 있다" 라는 메세지를 출력한다.

function solution(seoul) {
  const idx = seoul.indexOf('Kim');
  return `김서방은 ${idx}에 있다`;
}
