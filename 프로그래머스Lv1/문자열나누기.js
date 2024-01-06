// 처음 문자열을 s가 입력되었을 때
// 먼저 첫 글자를 읽습니다. 이 글자를 x라고 합시다.
// 이제 이 문자열을 왼쪽에서 오른쪽으로 읽어나가면서, x와 x가 아닌 다른 글자들이 나온 횟수를 각각 셉니다.
// 처음으로 두 횟수가 같아지는 순간 멈추고, 지금까지 읽은 문자열을 분리합니다.

// s에서 분리한 문자열을 빼고 남은 부분에 대해서 이 과정을 반복합니다. 남은 부분이 없다면 종료합니다.
// 만약 두 횟수가 다른 상태에서 더 이상 읽을 글자가 없다면, 역시 지금까지 읽은 문자열을 분리하고, 종료합니다.
// 분해한 문자열의 개수를 return 하는 함수 solution을 완성하세요.

// 1. s의 길이만큼 반복한다.
// 1-1. s를 돌면서 첫번째 글자와 다른 개수가 나올때까지 반복한다.
// 1-2. 첫번째 글자의 개수와 다른 글자의 개수가 같은 시점까지 잘라서 다음 글자를 내보낸다.
// 1-3. s를 자른 글자로 바꾸고, count한다.
// 2. 총 횟수를 출력한다.

function splitFn(s) {
  let cnt = 1;
  let idx = 1;
  let start = s[0];

  while (cnt > 0 && idx < s.length) {
    if (s[idx] !== start) cnt--;
    else cnt++;

    idx++;
  }
  return s.slice(idx);
}

function solution(s) {
  let answer = 0;

  while (s.length) {
    s = splitFn(s);
    answer++;
  }

  return answer;
}
