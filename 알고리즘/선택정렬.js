function selectionSort(array) {
  // 1. 최소값의 index값을 찾아줍니다.
  for (let i = 0; i < array.length; i++) {
    // i번은 0번부터 시작합니다. 즉 배열의 맨 왼쪽 값부터 시작합니다.
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      // arr의 minIndex의 값과  i+1번째 부터 +1씩 하여 최소값을 찾아줍니다.
      if (array[minIndex] > array[j]) {
        // 최소값을 찾았다면 j로 초기화 해줍니다.
        minIndex = j;
      }
    }

    // 2. 만약 i번째 값이 최소값이 아닌경우, 즉 i번째보다 작은값이 존재할 경우 값을 바꿔줍니다.
    if (minIndex !== i) {
      let swap = array[minIndex];
      array[minIndex] = array[i];
      array[i] = swap;
    }
    console.log(`${i + 1}회전: ${array}`);
  }
  return `최종 정렬 배열 => ${array}`;
}
console.log(`정렬 전 => ${[5, 2, 4, 3, 1]}`);
console.log(' ');
console.log(selectionSort([5, 2, 4, 3, 1]));
