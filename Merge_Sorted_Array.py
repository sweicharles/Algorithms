# Merge_Sorted_Array.py;


# Example 1:

# Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
# Output: [1,2,2,3,5,6]
# Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
# The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
# Example 2:

# Input: nums1 = [1], m = 1, nums2 = [], n = 0
# Output: [1]
# Explanation: The arrays we are merging are [1] and [].
# The result of the merge is [1].
# Example 3:

# Input: nums1 = [0], m = 0, nums2 = [1], n = 1
# Output: [1]
# Explanation: The arrays we are merging are [] and [1].
# The result of the merge is [1].
# Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.


class Solution:
    def merge(nums1, m, nums2, n):
        while n > 0:
            if m <= 0 or nums2[n-1] >= nums1[m-1]:
                nums1[m+n-1] = nums2[n-1]
                n -= 1
            else:
                nums1[m+n-1] = nums1[m-1]
                m -= 1


nums1 = [1, 2, 3, 0, 0, 0]
m = 3
nums2 = [2, 5, 6]
n = 3


# nums1 = [1], m = 1, nums2 = [], n = 0
# nums1 = [0], m = 0, nums2 = [1], n = 1


Solution.merge(nums1, m, nums2, n)
print(nums1)


'''
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        count = 0
        for i in range(0,m+n,1):
            count += 1
            if m != 0:
                if count >= m and count < (m+n):
                    nums1[count]=nums2[count-m]
            else:
                nums1[i]=nums2[count-n]
        
        nums1.sort()
        """
        Do not return anything, modify nums1 in-place instead.
        """
'''
