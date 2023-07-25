//  0, 1, 2 ...9를 말한다
// 10이상의 숫자부터는 한 자리씩 끊어서 말한다.  11번째 사람은 1, 12번째 사람은 0
// 이진수로도 말한다.
// 진법 n, 미리구할 숫자의 개수 t, 게임 참가인원 m, 튜브의 순서 p

function solution(n, t, m, p) {
  var answer = '';

  let sum = '';
  // 1. n진법으로 바꾼다.
  for (let i = 0; ; i++) {
    let num = i.toString(n);
    // 바꾼 값들을 sum에 더해준다.
    sum += num;
    if (sum.length > t * m) break;
  }
  // sum을 ''로 나눠 1자리 단어를 찾아주고 i%p가 p-1인 경우 answer에 담아준다.
  sum.split('').forEach((item, i) => {
    if (i % m === p - 1) {
      answer += item;
    }
  });

  // 마지막자리 제외하고 대문자로 바꿔 출력한다.
  return answer.slice(0, t).toUpperCase();
}

// 진법 n, 미리 구할 숫자의 갯수 t, 게임에 참가하는 인원 m, 튜브의 순서 p 가 주어진다

// 1. 0부터 튜브가 말해야 하는 숫자 t * 참가인원 만큼의 숫자를 n진법으로 바꿔서 tmp에 담아줍니다.
// 2. m명중 p번째 값을 t인 경우만 담은 새로운 배열 map을 통해 만들어줍니다.
// 3. 2에서 만든 배열을 문자열로 바꿔줍니다.
// 4. 3에서 만든 문자열을 t의 길이만큼 잘라준 뒤, 대문자로 바꿔 출력합니다.

function solution(n, t, m, p) {
  let tmp = '';

  for (let i = 0; i <= t * m; i++) {
    tmp += i.toString(n);
  }

  return [...tmp]
    .map((item, idx) => {
      if (idx % m === p - 1) return item;
    })
    .join('')
    .slice(0, t)
    .toUpperCase();
}

solution(2, 4, 2, 1); // "0111"
solution(16, 16, 2, 1); // "02468ACE11111111"
solution(16, 16, 2, 2); // "13579BDF01234567"
