// 1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
// 2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
// 3. 그렇지 않으면 J를 인쇄합니다.

// 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 return 하도록 solution 함수를 작성해주세요.
// 숫자가 클수록 중요하다는 뜻
// location에서 0이 가장 앞에 있다는 의미
function solution(priorities, location) {
  // 현재값과, 현재 index이 true, false를 담아주는 list를 만듦
  let list = priorities.map((t, i) => ({
    my: i === location,
    val: t,
  }));

  var count = 0;
  // 현재 index를 찾을때까지 무한반복
  while (true) {
    // 처음값을 뽑아줍니다. 참고로 splice는 배열을  변경함
    let start = list.splice(0, 1)[0];
    console.log(start);
    // some을 통해 현재값이 list의 값들보다 큰지 확인하여, 만약 현재값보다 큰값이 하나라도 있다면 list에 push해줍니다.
    if (list.some((t) => t.val > start.val)) {
      list.push(start);
    } else {
      // 만약 현재값보다 큰값이 없다면 count해줍니다. 이떄 현재값이 우리가찾는값이라면 종료하고 count를 return
      count++;
      if (start.my) return count;
    }
  }
}

solution([2, 1, 3, 2], 2); // 1
solution([1, 1, 9, 1, 1, 1], 0); // 5

function solution(priorities, location) {
  let list = priorities.map((item, index) => {
    return {
      index: index === location,
      val: item,
    };
  });

  let count = 0;
  while (true) {
    let cur = list.splice(0, 1)[0];
    if (list.some((item) => item.val > cur.val)) {
      list.push(cur);
    } else {
      count++;
      if (cur.index) return count;
    }
  }
}
