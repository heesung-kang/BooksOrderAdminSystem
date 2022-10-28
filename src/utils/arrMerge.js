export default function arrMerge(arr) {
  const resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    let idx = getKeyIndex(resultArr, arr[i]);
    if (idx > -1) {
      //같은종 더하기
      resultArr[idx].count += Number(arr[i].count);
    } else {
      resultArr.push(arr[i]);
    }
  }
  return resultArr;
}
//중복제거
function getKeyIndex(arr, obj) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].shop_name === obj.shop_name && arr[i].timestamp === obj.timestamp) {
      return i;
    }
  }
  return -1;
}
