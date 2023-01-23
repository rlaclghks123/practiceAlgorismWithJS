// 선행스킬은 스킬을 배우기 전에 먼저 배워야 하는 스킬
// 순서에 없는 다른 스킬은 순서에 상관없이 배울 수 있습니다.
// 선행스킬순서 skill, 유저들이 만든 스킬트리를 담은 배열 skill_trees
// 가능한 스킬트리의 개수를 return

// 제한사항
// 스킬은 알파벳 대문자로 표기, 모든 문자열은 대문자로
// 스킬은 중복 X, 1이상 ~26이하
//

function solution(skill, skill_trees) {
  // 정규표현식으로 skill을 제외하고 나머지는 없애준다.
  var regex = new RegExp(`[^${skill}]`, 'g');

  // skill_trees를 돌면서 reg인부분을 ''로 바꿔준뒤, skill의 indexOf가 0인 경우만 추출해준다.
  let map = skill_trees.map((item) => item.replace(regex, ''));

  // skill.indexOf(f)===0인 경우만 추출해준다.
  let filter = map.filter((f) => skill.indexOf(f) === 0);

  let answer = filter.length;

  return answer;
}

solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA', 'C']); // 2
// BCD CBD  CB BD
//
solution('CBDA', ['BACDE', 'CBADF', 'AECB', 'BDA']); // 2
