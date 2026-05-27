# Last updated: 5/27/2026, 11:29:23 PM
class Solution:
    def lengthOfLastWord(self, s):
        return len(s.strip().split()[-1])