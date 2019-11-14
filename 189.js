/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    for(let i=1;i<=k;i++){
        nums.unshift(nums.pop());
        // console.log(nums.pop());
    }
    console.log(nums)
};

var rotate_two = function(nums, k) {
    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
}
function reverse(arr,start,end) {
    while (start<end){
        let  temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        end --
        start++
    }
}
rotate([1,2,3,4,5,6,7,8,9],3)
// rotate_two([1,2,3,4,5,6,7,8,9],3)
// rotate_one([1,2,3,4,5,6],2)
// 1,2,3,4
// 7,1,2,3

var rotate_one = function(nums, k) {
    let start = 0
    let i = 0
    let n = 0;
    let j = k-1;
    console.log('开始：',"i:"+i,"j:"+j,"n:"+n,"start:"+start)
    let l = nums.length
    while (start+k <= l){
        console.log('Array:',nums)
        if(i>0 && i% k == 0){
            start +=k
            n=0
            j = k-1
            console.log('增加Start：',"i:"+i,"j:"+j,"n:"+n,"start:"+start)
        }else{
            let last = nums[l-n-1]
            // console.error(nums[nums.length-1],n)
            let temp = nums[start+j]
            console.log("last:"+last,"temp:"+temp,"length:"+nums.length)
            nums[start +j] = last;
            nums[nums.length-1-n] = temp;
            console.log('--------')
            n++
            j--
        }
        i++
    }
    console.log("++++++++++++++")
    console.log(nums)
};
