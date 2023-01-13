// 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
// 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거
// 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
// 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
// 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
// 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거
//      만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
// 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.

function solution(new_id) {
  var answer = '';

  // 1. 모든 대문자를 소문자로 치환
  new_id = new_id.toLowerCase();

  // 2. 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거
  new_id = new_id.replace(/[^a-z0-9|\-|.|_]+/g, '');

  // 3. 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환
  new_id = new_id.replace(/([.])\1+/g, '.');

  // 4. 마침표가 처음이나 끝에 위치한다면 제거

  new_id = new_id.replace(/^[.]|[.]$/, '');
  // 5. 빈문자열이라면 'a'를 대입
  new_id = new_id.length === 0 ? 'a' : new_id;

  // 6. new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거
  //    만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
  new_id = new_id.length >= 16 ? new_id.slice(0, 15) : new_id;
  new_id = new_id.replace(/[.]$/, '');
  // 7. new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
  if (new_id.length <= 2) {
    for (let i = 0; i < 4 - new_id.length; i++) {
      new_id += new_id[new_id.length - 1];
    }
  }
  return new_id;
}

solution('...!@BaT#*..y.abcdefghijklm'); //	"bat.y.abcdefghi"
solution('z-+.^.'); //	"z--"
solution('=.='); //	"aaa"
solution('123_.def'); //	"123_.def"
solution('abcdefghijklmn.p'); //	"abcdefghijklmn"

// 다른사람 코드

function solution(new_id) {
  const answer = new_id
    .toLowerCase() // 1
    .replace(/[^\w-_.]/g, '') // 2
    .replace(/\.+/g, '.') // 3
    .replace(/^\.|\.$/g, '') // 4
    .replace(/^$/, 'a') // 5
    .slice(0, 15)
    .replace(/\.$/, ''); // 6
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}
