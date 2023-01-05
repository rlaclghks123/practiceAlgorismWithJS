// 문자열 s에 나타나는 문자를 큰것부터 작은순으로 정렬(내림차순)하여 새로운 문자열을 return
// 대문자는 소문자보다 작은것으로 간주

function solution(s) {
  var answer = '';

  answer = s
    // 1. 배열로 변환
    .split('')

    // 2. map을 통해 아스키 코드로 변환
    .map((item) => {
      return item.charCodeAt(0);
    })

    // 3. 아스키코드를 통해 내림차순으로 정렬
    .sort((a, b) => b - a)

    // 4. 정렬한 아스키코드를 문자로 변환하여 배열로 만든다.
    .map((item) => String.fromCharCode(item))

    // 5. 문자를 담은 배열을 문자열로 변환
    .join('');

  return answer;
}

solution('Zbcdefg'); // 	"gfedcbZ"

// 다른사람의 코드
// 배열로 만들고, sort()를 통해 정렬 후, reverse한뒤, 문자열로 변환
function solution(s) {
  return s.split('').sort().reverse().join('');
}
