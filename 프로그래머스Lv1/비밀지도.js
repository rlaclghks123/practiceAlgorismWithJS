// 한 변의 길이가 n인 각 칸은 공백 (" ") 또는 벽("#") 두 종류로 되어있다.
// 전체 지도는 두 장의 지도를 겹쳐서 얻는다, 각 지도 중 어느 하나라도 벽인 부분은 벽
// 모두 공백인 부분은 전체지도에서 공백
// 암호화된 배열은 벽을 1, 공백은 0으로 부호화 했을때 얻는 이진수에 해당하는 값의 배열
// 암호를 해독한 지도를 return

function solution(n, arr1, arr2) {
  var answer = [];

  // 1. arr1, arr2의 각 10진수 값을 2진수로 바꾼다.
  arr1 = arr1.map((item) => {
    if (item.toString(2).length <= n) {
      let temp = '';
      for (let i = 0; i < n - item.toString(2).length; i++) {
        temp += '0';
      }
      return temp + item.toString(2);
    }
  });

  arr2 = arr2.map((item) => {
    if (item.toString(2).length <= n) {
      let temp = '';
      for (let i = 0; i < n - item.toString(2).length; i++) {
        temp += '0';
      }
      return temp + item.toString(2);
    }
  });

  // 2. arr1의 문자와 Arr2의 문자를 비교해서 1개라도 1이 존재한다면 1로 return
  answer = arr1.map((item, index) => {
    return item
      .split('')
      .map((char, indexChar) => {
        if (char === '1' || arr2[index][indexChar] === '1') {
          return '#';
        }
        return ' ';
      })
      .join('');
  });

  return answer;
}

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
// ["#####","# # #", "### #", "# ##", "#####"]

solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]); //  ["######", "### #", "## ##", " #### ", " #####", "### # "]

// 다른사람의 코드
// padStart를 통해 0을 추가했다.
// 1이라는걸 true로 사용해서 a|b[i]로 처리했다.

var solution = (n, a, b) =>
  a.map((a, i) => (a | b[i]).toString(2).padStart(n, 0).replace(/0/g, ' ').replace(/1/g, '#'));
