/**
 * 26. 删除排序数组中的重复项
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates_two = function(nums) {
    let count = 0;
    let j = 0;
    for (let i = 1 ; i<nums.length; i++){
        if(nums[i] == nums[i-1]){
            count ++
        }else{
            j++
            nums[i-count] = nums[i]
        }
    }
    return j+1;
};

console.log(removeDuplicates_two([1,1,1,1,2,2,2,2,2,2,3]))
console.log(removeDuplicates([1,1,1,1,2,2,2,2,2,2,3]))
console.log(removeDuplicates_two([1,1,2]))
console.log(removeDuplicates([1,1,2]))
