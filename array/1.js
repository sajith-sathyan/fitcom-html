    var merge = function(nums1, m, nums2, n) {
        let i = m - 1; // Last index of initial elements in nums1
    let j = n - 1; // Last index of nums2
    let k = m + n - 1; // Last index of merged array in nums1

    
    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
    console.log(nums1)
    return nums1

    };

//  arrays and lengths
const nums1 = [1,2,3,0,0,0]
const m = 3
; 
const nums2 = [2,5,6]
const n = 3;

merge(nums1, m, nums2, n);
