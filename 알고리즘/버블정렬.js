function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    let swap;
    // 앞에서부터 2개씩 요소를 비교를해서 큰 숫자를 오른쪽으로 위치시켜 줍니다.
    for (let j = 0; j < array.length - i; j++) {
      console.log(`${i + 1}회전: ${array}`);
      if (array[j] > array[j + 1]) {
        swap = array[j];
        array[j] = array[j + 1];
        array[j + 1] = swap;
      }
    }
    console.log(' ');
    // 바꿀것이 없다면 종료해줍니다.
    if (!swap) {
      break;
    }
  }
  return `최종 정렬 배열 => ${array}`;
}
console.log(`정렬 전 => ${[4, 2, 1, 3]}`);
console.log(' ');
console.log(bubbleSort([4, 2, 1, 3]));
