// 파일명에 포함된 숫자를 반영한 정렬 기능을 구현
// 파일명은 영문자로 시작, 숫자를 하나이상 포함
// Head, Number, Tail 세부분으로 나뉨

// Head : 숫자가 아닌 문자로 이루어져 있으며, 최소 한글자 이상
// Number : 한글자~ 최대 다섯글자 사이의 연속된 숫자로 이루어져 있으며 앞에 0이 올수 있다. 0~99999
// Tail : 나머지 부분으로 숫자가 다시 올 수 도있으며 아무글자가 없을수도 있음
// 파일명                  head.        number.       tail
// foo9.txt	              foo	         9	        .txt
// foo010bar020.zip	      foo	        010	        bar020.zip
// F-15	                   F-	        15	        (빈 문자열)

// head를 기준으로 사전순으로 정렬 단 이때 대소문자를 구분하지 않음 muzi= Muzi= MUZI= MuZi
// 대소문자 외에 같을경우  number의 숫자순으로 정렬   9< 10< 0011< 012 단 012===12
// 만약 head, number도 같을경우 원래 입력에 주어진 순서를 유지

function solution(files) {
  // 1. head, number, tail 부분으로 나눠준다.
  files.sort((a, b) => {
    const [, aHead, aNumber, ,] = a.split(/([^0-9]+)([0-9]+)(.*)/);
    const [, bHead, bNumber, ,] = b.split(/([^0-9]+)([0-9]+)(.*)/);

    // 2. 대소문자 구분없다고 했기 때문에, 소문자로 통일해준다.
    aHead = aHead.toLowerCase();
    bHead = bHead.toLowerCase();

    // 3. head가 같지 않은 경우 a,b를 비교해준다.
    if (aHead !== bHead) return aHead.localeCompare(bHead);

    // 4. head가 같은경우 number로 비교해준다.
    return Number(aNumber) - Number(bNumber);
  });

  // 5. 정렬한 files를 출력한다.
  return files;
}

solution(['img12.png', 'img10.png', 'img02.png', 'img1.png', 'IMG01.GIF', 'img2.JPG']);
//['img1.png', 'IMG01.GIF', 'img02.png', 'img2.JPG', 'img10.png', 'img12.png'];

solution([
  'img12.png',
  'img10.png',
  'img02.png',
  'IMG12.GIF',
  'img012.png',
  'img1.png',
  'img2.JPG',
]);

solution(['F-5 Freedom Fighter', 'B-50 Superfortress', 'A-10 Thunderbolt II', 'F-14 Tomcat']);
//['A-10 Thunderbolt II', 'B-50 Superfortress', 'F-5 Freedom Fighter', 'F-14 Tomcat'];

solution([
  'F-5 Freedom Fighter',
  'F-2 Freedom Fighter',
  'B-50 Superfortress',
  'A-10 Thunderbolt II',
  'F-14 Tomcat',
]);
