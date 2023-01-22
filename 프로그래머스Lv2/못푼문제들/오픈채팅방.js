// 1. 누군가 들어올 경우 : "[닉네임]님이 들어왔습니다."
// 2. 누군가 나갈 경우 : "[닉네임]님이 나갔습니다."

// 3. 닉네임을 변경 할 경우 :
// 3-1 채팅방을 나간 후, 새로운 닉네임으로 다시 들어간다.
// 3-2 채팅방에서 닉네임을 변경한다.
// 닉네임을 변경할 때는 기존에 채팅방에 출력되어 있던 메세지의 닉네임도 전부 변경

// 채팅방은 중복 닉네임을 허용

// "Muzi님이 들어왔습니다."
// "Prodo님이 들어왔습니다."
// "Muzi님이 나갔습니다."

// "Prodo님이 들어왔습니다."
// "Prodo님이 들어왔습니다."
// "Prodo님이 나갔습니다."
// "Prodo님이 들어왔습니다."

// "Enter [유저 아이디] [닉네임]" (ex. "Enter uid1234 Muzi")
// "Leave [유저 아이디]" (ex. "Leave uid1234")
// "Change [유저 아이디] [닉네임]" (ex. "Change uid1234 Muzi")
function solution(record) {
  const map = new Map();
  const answer = [];

  // record를 돌면서 status, id, nickname을 찾아줍니다.
  record.forEach((item) => {
    const [status, id, nickName] = item.split(' ');

    // status가 Enter라면 answer배열에 id, 입장했다는 문구를 넣어줍니다.
    if (status === 'Enter') {
      answer.push([id, '님이 들어왔습니다.']);
    }
    // status가 Leave라면 answer배열에 id, 나갔다는 문구를 넣어주고 종료해줍니다.  종료하는 이유는 map에 id를 따로 담지 않아도 되기 때문입니다.
    else if (status === 'Leave') {
      answer.push([id, '님이 나갔습니다.']);
      return;
    }
    // map에 id, nickname을 저장해줍니다.
    map.set(id, nickName);
  });

  // answer배열을 돌면서 map에 담아준 id를 가진 nickname과 문구를 출력해줍니다.
  return answer.map((item) => map.get(item[0]) + item[1]);
}

solution([
  'Enter uid1234 Muzi',
  'Enter uid4567 Prodo',
  'Leave uid1234',
  'Enter uid1234 Prodo',
  'Change uid4567 Ryan',
]);

// ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
