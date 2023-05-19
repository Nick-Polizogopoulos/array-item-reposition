
const items: number[] = [1, 2, 3, 4, 5];
const firstCall = moveItem(items, 0, 3);
const secondCall = moveItem(items, 3, -1);
console.log(firstCall, ' - ', secondCall);


function moveItem(array: number[], index: number, offset: number): number[] | string {
    let newArray: number[] = [...array];
    let position: number = index + offset;
    if (position >= array.length || position < 0) return 'Invalid Offset';
    const item: number = newArray.splice(index, 1)[0];
    newArray.splice(position, 0, item);
    return newArray;
}