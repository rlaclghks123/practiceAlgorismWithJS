// 가위는 '2', 바위는 '0' , 보는 '5'
// rsp에 저장된 가위바위보를 모두 이기는 경우를 return

function solution(rsp) {
  var answer = '';

  // 1. rsp의 문자열 값을 반복문을 통해 문자 요소를 가져온다.
  rsp.split('').forEach((char) => {
    // 2. 가위('2')인 경우 바위('0')을 answer에 저장
    if (char === '2') answer += '0';

    // 3. 바위('0')인 경우 보('5')를 answer에 저장
    if (char === '0') answer += '5';

    // 4.보('5')인 경우 가위('2')를 answer에 저장
    if (char === '5') answer += '2';
  });

  return answer;
}

solution('2'); // '0'

solution('205'); //'052'
