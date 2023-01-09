// n마리의 폰켄몬 중 n/2마리를 가져가도 ㅗ딘다.
// 4마리의 폰켄몬중 2마리를 고르는 방법은 6가지 중 최대한 다양한 종류의 폰켄몬을 가져가는 수
function solution(nums) {
  var answer = 0;

  // 1. 최대 가져갈수 있는 폰켄몬의 마릿수를 구해준다.
  const max = nums.length / 2;

  // 2. set을 통해 중복되는 부분을 제거해준다.
  const set = [...new Set([...nums])].length;

  // 3. 서로 다른 폰켄몬중 max마리를 구해준다.
  answer = set >= max ? max : set;

  return answer;
}

solution([3, 1, 2, 3]); //	2

solution([3, 3, 3, 2, 2, 4]); // 3

solution([3, 3, 3, 2, 2, 2]); // 2

//다른 사람의 코드
// 다른부분은 같지만 set의 size를 이용해 구해줬다.

const set = new Set([...nums]).size;
