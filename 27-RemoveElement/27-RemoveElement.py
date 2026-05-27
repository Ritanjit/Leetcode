# Last updated: 5/27/2026, 8:31:22 PM
class Solution:
    def removeElement(self, nums, val):
        k = 0  # Pointer for position of next valid element
        
        for i in range(len(nums)):
            if nums[i] != val:
                nums[k] = nums[i]
                k += 1
        
        return k