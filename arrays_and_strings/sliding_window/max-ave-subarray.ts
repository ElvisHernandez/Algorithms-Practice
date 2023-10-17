const maxAveSubArray = (nums: number[], k: number): number => {
    let currSum = 0;

    for (let i = 0; i < k; i++) {
        currSum += nums[i];
    }

    let maxSum = currSum;

    for (let i = k; i < nums.length; i++) {
        currSum += nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum / k;
};

(() => {
    const nums = [1, 12, -5, -6, 50, 3];

    // const subArrays = [
    //     [1], [12], [-5], [-6], [50], [3],
    //     [1, 12], [1, 12, -5], ...,
    //     [12, -5], [12, -5, -6], ...,
    //     ...
    // ];

    const k = 4;
    const maxAve = maxAveSubArray(nums, k);

    console.log(`maxAve: ${maxAve}`);

    if (maxAve === 12.75) {
        console.log("It worked :)");
    } else {
        console.log("It didn't work :(");
    }
})();
