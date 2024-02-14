// 1. 'A'-'Z'까지 구성된 사전을 만든다.

// 2. msg의 길이가 없어질 때 까지 반복해줍니다.

// 2-1. msg를 한글자부터 msg글자까지 잘라줍니다.
// 2-1-1. 만약 자른 글자가 사전에 있다면 현재 문자를 자른 문자로 바꿉니다.
// 2-1-2. 만약 자른 글자가 사전에 없다면 사전에 추가하고 자르는 반복문(2-1)을 종료합니다.

// 2-2. 사전에서 현재문자의 위치를 ans에 담아줍니다.
// 2-3. msg를 현재 문자 다음부터 잘라줍니다.

// 3. 최종 위치를 담은 ans을 출력합니다.

function solution(msg) {
  const ans = [];
  const dictionary = makeDictionary();

  while (msg.length) {
    let curWord = '';
    for (let i = 1; i <= msg.length; i++) {
      const slicedWord = msg.slice(0, i);

      if (dictionary.includes(slicedWord)) curWord = slicedWord;
      else {
        dictionary.push(slicedWord);
        break;
      }
    }
    ans.push(dictionary.indexOf(curWord) + 1);
    msg = msg.slice(curWord.length);
  }
  return ans;
}

function makeDictionary() {
  const ans = [];

  for (let i = 65; i <= 90; i++) {
    ans.push(String.fromCharCode(i));
  }

  return ans;
}
