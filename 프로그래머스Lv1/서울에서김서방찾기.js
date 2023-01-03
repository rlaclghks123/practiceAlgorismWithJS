// seoul 배열의 요소 중 Kim의 위치 x를 찾아 '김서방은 x에 있다' 를 return

function solution(seoul) {
  var answer = '';

  // 1. Kim의 index값을 찾는다.
  seoul.forEach((item, index) => {
    if (item === 'Kim') {
      answer = `김서방은 ${index}에 있다`;
    }
  });

  return answer;
}

solution(['Jane', 'Kim']); // 	"김서방은 1에 있다"

// 다른사람의 코드
function findKim(seoul) {
  var idx = seoul.indexOf('Kim');
  return '김서방은 ' + idx + '에 있다';
}
