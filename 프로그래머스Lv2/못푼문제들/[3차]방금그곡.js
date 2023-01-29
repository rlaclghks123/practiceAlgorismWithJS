// 음악제목 /  재생이 시작되고, 끝난 시각 / 악보
// 네오가 기억한 멜로디와 악보에 사용되는 음은 C, C#, D, D#, E, F, F#, G, G#, A, A#, B 12개
// 각 음은 1분에 1개씩 재생, 처음부터 재생,

// 음악의 길이보다 재생시간이 길 떄는 음악이 끊김없이 처음부터 반복해서 재생
// 음악길이보다 재생시간이 짧을때는 처음부터 재생시간만큼 재생
// 음악이 00:00를 넘겨서까지 재생되는 일은 없다
// 조건이 일치하는 음악이 여러 개 일경우, 라디오에서 재생된 시간이 제일 긴 음악제목을 반환
// 조건이 일치하는 음악이 없을때는 '(None)'을 반환

// function solution(m, musicinfos) {
//   let arr = musicinfos.map((item) => {
//     const [start, end, title, code] = item.split(',');
//     const hour = end.slice(0, 2) - start.slice(0, 2);
//     const minute = end.slice(3) - start.slice(3);
//     const runTime = 60 * hour + minute;

//     const codeMatch = code.match(/[A-Z]#?/g);
//     let stream = code.repeat(Math.floor(runTime / codeMatch.length));
//     stream += codeMatch.slice(0, runTime % codeMatch.length).join('');
//     return [title, runTime, stream];
//   });

//   const answer = arr.filter(([_, __, stream]) => {
//     let i = stream.indexOf(m);
//     if (i === -1) return false;
//     while (i !== -1) {
//       if (stream[i + m.length] !== '#') return true;
//       i = stream.indexOf(m, i + 1);
//     }
//   });

//   if (!answer.length) return '(None)';

//   answer.sort((a, b) => {
//     if (a[1] === b[1]) return 0;
//     return b[1] - a[1];
//   });

//   return answer[0][0];
// }

function solution(m, musicinfos) {
  let arr = musicinfos.map((item) => {
    // 1. 구조분해 할당을 통해, 시작시간, 끝나는시간, 노래제목, 악보를 구해줍니다.
    const [start, end, title, code] = item.split(',');

    // 2. 총 음악 시간을 구합니다.
    const hour = end.slice(0, 2) - start.slice(0, 2);
    const minute = end.slice(3) - start.slice(3);
    const runTime = +hour * 60 + +minute;

    // 3. 총 음악시간만큼 악보를 이어 붙혀줍니다.
    // 3-1 정규표현식을 사용해 음 (알파벳 대문자, #이 0번이상 반복되는 문자)을 찾아줍니다,
    const codeArr = code.match(/[A-Z]#?/g);
    // 3-2 찾은 음을 통해 재생시간이 음악시간 보다 길다면 시간만큼  repeat를 통해 반복 붙혀줍니다.
    let stream = code.repeat(Math.floor(runTime / codeArr.length));
    // 3-3 만약 재생시간이 음악시간보다 짧다면 처음부터 재생시간만큼만 재생해줍니다.
    stream += codeArr.slice(0, runTime % codeArr.length).join('');

    // 4. title, runTime, stream을 가진 배열로 return 합니다. [hello, 14, CDEFGABCDEFGAB];
    return [title, runTime, stream];
  });

  // 5. filter를 통해 m과 동일한 악보를 찾아줍니다.
  let answer = arr.filter(([_, __, stream]) => {
    let i = stream.indexOf(m);
    if (i === -1) return false;

    while (i !== -1) {
      if (stream[i + m.length] !== '#') return true;
      i = stream.indexOf(m, i + 1);
    }
  });

  // 6. 만약 조건에 맞는것이 없다면 ('None')을 출력해줍니다.
  if (answer.length === 0) return '(None)';

  // 7. 조건에 맞는것이 있다면, 악보의 길이를 기준으로, 악보의 길이가 같다면, 먼저 입력된 음악 제목을 반환합니다.
  answer.sort((a, b) => {
    if (a[1] === b[1]) return 0;
    return b[1] - a[1];
  });

  // 8. 노래제목을 return 한다.
  return answer[0][0];
}

solution('ABCDEFG', ['12:00,12:14,HELLO,CDEFGAB', '13:00,13:05,WORLD,ABCDEF']); // "HELLO"

solution('CC#BCC#BCC#BCC#B', ['03:00,03:30,FOO,CC#B', '04:00,04:08,BAR,CC#BCC#BCC#B']); // "FOO"

solution('ABC', ['12:00,12:14,HELLO,C#DEFGAB', '13:00,13:05,WORLD,ABCDEF']); // "WORLD"
