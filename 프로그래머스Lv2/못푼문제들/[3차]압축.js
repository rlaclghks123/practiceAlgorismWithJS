// LZW압축

// 길이가 1인 모든 단어를 포함하도록 사전을 초기화한다.
// 사전에서 현재 입력과 일치하는 가장 긴 문자열 w를 찾는다.
// w에 해당하는 사전의 색인 번호를 출력하고, 입력에서 w를 제거한다.
// 입력에서 처리되지 않은 다음 글자가 남아있다면(c), w+c에 해당하는 단어를 사전에 등록한다.
// 단계 2로 돌아간다.
// 길이는 1,000이하 =>2중 for문까지 가능

function solution(msg) {
  let dic = [];
  let ans = [];

  // 1. 길이가 1인 모든 단어를 위해 A~Z까지 모든 단어를 담아준다.
  for (let i = 65; i <= 90; i++) {
    dic.push(String.fromCharCode(i));
  }

  // msg의 길이가 0이상인 경우 계속 반복
  while (msg.length > 0) {
    // 길이가 가장 긴 단어를 찾아준다.
    let w = '';

    // msg에서 한단어, 두단어 ... 씩 잘라준다.
    for (let i = 1; i <= msg.length; i++) {
      let c = msg.slice(0, i);
      console.log(c, w, dic);
      // 만약 사전에 등록 되어있지 않다면 사전에 담아주고 break;
      if (!dic.includes(c)) {
        dic.push(c);
        break;
      }

      // 만약 사전에 등록되어있다면 w는 c로 초기화해준다.  존재하는 단어중 가장 긴단어
      w = c;
    }

    // ans에 현재 존재하는 가장 긴 단어의 index값을 담아준다. 단 0부터 시작했기 때문에 +1해준다.
    ans.push(dic.indexOf(w) + 1);

    // msg를 w의 길이만큼 잘라준다.
    msg = msg.slice(w.length);
  }
  return ans;
}

function solution(msg) {
  let dic = [];
  let ans = [];

  // 1. 길이가 1인 모든 단어를 위해 A~Z까지 모든 단어를 담아준다.
  for (let i = 65; i <= 90; i++) {
    dic.push(String.fromCharCode(i));
  }

  // msg의 길이가 0이상인 경우 계속 반복
  while (msg.length > 0) {
    // 길이가 가장 긴 단어를 찾아준다.
    let w = '';

    // msg에서 한단어, 두단어 ... 씩 잘라준다.
    for (let i = 1; i <= msg.length; i++) {
      let c = msg.slice(0, i);
      console.log(c, w, dic);
      // 만약 사전에 등록 되어있지 않다면 사전에 담아주고 break;
      if (!dic.includes(c)) {
        dic.push(c);
        break;
      }

      // 만약 사전에 등록되어있다면 w는 c로 초기화해준다.  존재하는 단어중 가장 긴단어
      w = c;
    }

    // ans에 현재 존재하는 가장 긴 단어의 index값을 담아준다. 단 0부터 시작했기 때문에 +1해준다.
    ans.push(dic.indexOf(w) + 1);

    // msg를 w의 길이만큼 잘라준다.
    msg = msg.slice(w.length);
  }
  return ans;
}

function solution(msg) {
  let dic = [];
  let ans = [];

  for (let i = 65; i <= 90; i++) {
    dic.push(String.fromCharCode(i));
  }

  while (msg.length > 0) {
    let curLongWord = '';

    for (let i = 1; i <= msg.length; i++) {
      let curSlicedWord = msg.slice(0, i);

      if (!dic.includes(curSlicedWord)) {
        dic.push(curSlicedWord);
        break;
      }

      curLongWord = curSlicedWord;
    }
    ans.push(dic.indexOf(curLongWord) + 1);

    msg = msg.slice(curLongWord.length);
    console.log(msg);
  }
  return ans;
}

// solution('TOBEORNOTTOBEORTOBEORNOT'); // [20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34]
// solution('ABABABABABABABAB'); // [1, 2, 27, 29, 28, 31, 30]
solution('KAKAO'); // [11, 1, 27, 15]
