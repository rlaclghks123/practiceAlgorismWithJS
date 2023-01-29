//  ( 와 ) 의 개수가 같다면 균형잡힌 괄호 문자열   (()))(
// () 모두 짝이 맞을 경우 올바른 괄호 문자열  (())()
// 균형잡힌 괄호 문자열인경우 올바른 괄호 문자열로 변환 할 수 있습니다.
// 올바른 괄호 문자열을 변환한 결과를 return

// 1. 빈문자열인 경우 빈문자열을 반환
// 2. 왼쪽부터 균형잡힌 괄호 u를 찾아주고, 나머지는 v(빈문자열일 수 있음)
// 3. u가 올바른 문자열인 경우 v에 대해 다시 재귀
// 4. u가 올바른 문자열이 아닌경우 빈문자열에 (를 추가
// 5. 4에서 만든 문자열에 문자열 v에 대해 재귀적으로 한 결과값을 붙힘
// 6. )를 붙힘
// 7. u에서 첫 번째와 마지막 문자를 제거하고 나머지 문자를 뒤집어서 붙힘
// 8. 생성된 문자를 반환

function solution(p) {
  // 1. 빈문자열인 경우 빈문자열을 반환
  if (!p) return '';

  // 2. 왼쪽부터 균형잡힌 괄호를 u를 찾아주고, 나머지는 v (빈 문자열일 수 있다).
  let openCnt = 0; // open = '(' 의 개수
  let closeCnt = 0; // close = ')'의 개수

  for (let i = 0; i < p.length; i++) {
    if (p[i] === '(') openCnt++;
    else closeCnt++;

    if (openCnt === closeCnt) {
      // 개수가 같다 === 균형잡힌 괄호다.
      let u = p.slice(0, i + 1);
      let v = p.slice(i + 1);

      // 3.u가 올바른 문자열인지 확인하여 올바른 문자열인 경우 빈문자열에 추가하고, v에 대해 재귀
      if (check(u)) {
        return (answer = u + solution(v));
      }
      // 4. u가 올바른 문자열이 아닌경우 빈문자열에 (를 추가, , v에 대해 재귀적으로 한 결과를 붙여주고, )를 추가해준다.
      else {
        answer = '(' + solution(v) + ')';

        // 5. u에서 첫번째와 마지막 문자를 제거하고(j=0이 아닌 1부터~  j<i까지), 나머지 문자를 뒤집어서 붙힘
        for (let j = 1; j < i; j++) {
          if (p[j] === '(') answer += ')';
          else answer += '(';
        }
        return answer;
      }
    }
  }
}

function check(p) {
  let stack = [];
  for (let i = 0; i < p.length; i++) {
    if (p[i] === '(') stack.push(i);
    else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  return true;
}

// solution('(()())()'); // 	"(()()) ()"

// solution(')('); // 	"()"

// solution('))(('); // 	"()"

solution('()))((()'); // 	"() (())()"
