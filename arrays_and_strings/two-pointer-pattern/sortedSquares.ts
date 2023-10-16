import { arraysEqual } from "./utils";

function sortSquares(nums: number[]): number[] {
    let left = 0;
    let right = nums.length - 1;
    const sortedSquares = [];

    for (let i = nums.length - 1; i >= 0; i--) {
        const leftSquare = nums[left] * nums[left];
        const rightSquare = nums[right] * nums[right];

        if (leftSquare > rightSquare) {
            sortedSquares[i] = leftSquare;
            left++;
        } else {
            sortedSquares[i] = rightSquare;
            right--;
        }
    }

    return sortedSquares;
}

(() => {
    const nums = [-4, -1, 0, 3, 10];

    const sortedSquares = sortSquares(nums);
    const expectedResult = [0, 1, 9, 16, 100];

    console.log(sortedSquares);

    if (arraysEqual(sortedSquares, expectedResult)) {
        console.log("It worked :)");
    } else {
        console.log("It didn't work :(");
    }
})();
