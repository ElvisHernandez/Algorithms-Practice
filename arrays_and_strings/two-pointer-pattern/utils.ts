export function arraysEqual(
    a: Array<number | string>,
    b: Array<number | string>
): boolean {
    if (a.length !== b.length) return false;

    return a.every((val, index) => b[index] === val);
}
