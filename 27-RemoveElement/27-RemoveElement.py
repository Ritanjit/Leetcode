# Last updated: 5/27/2026, 11:29:26 PM
class Solution:
    def removeElement(self, nums, val):
        k = 0  # Pointer for position of next valid element
        
        for i in range(len(nums)):
            if nums[i] != val:
                nums[k] = nums[i]
                k += 1
        
        return k