const maxConsecutiveOnes = (nums: number[], k: number): number => {
    let flippedZeros = 0;
    let maxOnes = 0;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            flippedZeros++;
        }

        while (flippedZeros > k) {
            if (nums[left] === 0) {
                flippedZeros--;
            }
            left++;
        }

        maxOnes = Math.max(maxOnes, right - left + 1);
    }

    return maxOnes;
};

(() => {
    const nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
    const k = 2;
    const maxOnes = maxConsecutiveOnes(nums, k);

    console.log(`maxOnes: ${maxOnes}`);

    if (maxOnes === 6) {
        console.log("It worked :)");
    } else {
        console.log("It didn't work :(");
    }
})();
