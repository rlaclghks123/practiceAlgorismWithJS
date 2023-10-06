// 1. 접두어로 존재하는지 비교하기 위해 sort로 정렬합니다.
// 2. 0번째 값을 처음에 prev값으로 설정해줍니다.
// 3. phone_book을 돌면서 현재값과 이전값을 비교해 접두어로 존재하는지 확인합니다.
// 3-1 존재한다면 false를 출력
// 4. 존재하지 않는다면 이전값을 현재값으로 바꿔줍니다.
// 5. 종료하지 못했다면(접두어가 존재하지 않는다면) true를 출력합니다.

function solution(phone_book) {
  phone_book.sort();
  let prev = phone_book[0];

  for (let i = 1; i < phone_book.length; i++) {
    let cur = phone_book[i];
    if (cur.startsWith(prev)) return false;
    prev = cur;
  }

  return true;
}
