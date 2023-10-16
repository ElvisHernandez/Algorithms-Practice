import { arraysEqual } from "./utils";

function reverseString(str: string[]) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        const temp = str[left];
        str[left] = str[right];
        str[right] = temp;

        left++;
        right--;
    }
}

(() => {
    const str = ["h", "e", "l", "l", "o", ",", " ", "w", "o", "r", "l", "d"];

    reverseString(str);
    const expectedResult = [
        "d",
        "l",
        "r",
        "o",
        "w",
        " ",
        ",",
        "o",
        "l",
        "l",
        "e",
        "h",
    ];

    if (arraysEqual(str, expectedResult)) {
        console.log("It worked :)");
    } else {
        console.log("It didn't work :(");
    }
})();
