function solution(s) {
  var answer = '';
  const splited = s.split(' ');
  answer = Math.min(...splited) + ' ' + Math.max(...splited);
  return answer;
}

solution('-1 -2 -3 -4'); //	"-4 -1"

solution('-1 -1'); // "-1 -1"
