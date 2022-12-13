function solution(id_pw, db) {
  let answer = '';

  const id = id_pw[0];
  const pw = id_pw[1];

  db.map((list) => {
    // 1. id,pw 값이 db에 존재할 경우
    if (list.includes(id) && list.includes(pw)) return (answer = 'login');

    // 2. id는 db에 있지만 pw값이 db에 존재하지 않는 경우
    if (list.includes(id)) return (answer = 'wrong pw');

    // 3. id, pw정보가 db에 없는 경우
    if (!list.includes(id) && !list.includes(pw)) return (answer = 'fail');
  });
  return answer;
}
