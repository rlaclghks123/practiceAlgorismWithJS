// 두 집합 A, B 사이의 자카드 유사도 J(A, B)는 두 집합의 교집합 크기를 두 집합의 합집합 크기로 나눈 값으로 정의된다.

// 예를 들어 집합 A = {1, 2, 3}, 집합 B = {2, 3, 4}라고 할 때,
// 교집합 A ∩ B = {2, 3}, 합집합 A ∪ B = {1, 2, 3, 4}이 되므로, 집합 A, B 사이의 자카드 유사도 J(A, B) = 2/4 = 0.5가 된다.
// 집합 A와 집합 B가 모두 공집합일 경우에는 나눗셈이 정의되지 않으니 따로 J(A, B) = 1로 정의한다.

// 두 글자씩 끊어서 다중집합의 원소로 만든다.
// 이때 영문자로 된 글자 쌍만 유효하고, 기타 공백이나 숫자, 특수 문자가 들어있는 경우는 그 글자 쌍을 버린다.
// 예를 들어 "ab+"가 입력으로 들어오면, "ab"만 다중집합의 원소로 삼고, "b+"는 버린다.
// 유사도 값은 0에서 1 사이의 실수이므로, 이를 다루기 쉽도록 65536을 곱한 후에 소수점 아래를 버리고 정수부만 출력한다.

function change(str) {
  // 1. 모두 소문자로 바꾼다.

  str = str.toLowerCase();
  // 2. 소문자를 제외하고 나머지 문자는 제거한다.

  // 3. 2글자씩 잘라준다.
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    const sliced = str.slice(i, i + 2);

    if (sliced.match(/[a-z]{2}/)) {
      arr.push(sliced);
    }
  }
  return arr;
}

function solution(str1, str2) {
  var answer = 0;

  let arr = change(str1);
  let arr2 = change(str2);

  let union = 0;
  let intersection = 0;
  const set = new Set([...arr, ...arr2]);

  set.forEach((item) => {
    const a = arr.filter((f) => item === f).length;
    const b = arr2.filter((f) => item === f).length;
    // 4.  합집합을 구해준다.
    union += Math.max(a, b);
    // 5. 교집합을 구해준다.
    intersection += Math.min(a, b);
  });
  console.log('');
  answer = union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
  return answer;
}

solution('FRANCE', 'french'); // 16384
solution('handshake', 'shake hands'); // 65536
// solution('aa1+aa2', 'AAAA12'); // 43690
solution('E=M*C^2', 'e=m*c^2'); // 65536
