---
problem_id: undefined
title: Plus One
difficulty: Easy
topics: [Array, Math]
solved_at: 2026-05-27T19:15:04.989Z
language: unknown
url: https://leetcode.com/problems/plus-one/submissions/2014818340/
---

## Solution

```unknown
class Solution:
    def plusOne(self, digits):
        n = len(digits)

        # Traverse from the last digit
        for i in range(n - 1, -1, -1):
            # If digit is less than 9, just add 1
            if digits[i] < 9:
                digits[i] += 1
                return digits

            # If digit is 9, make it 0
            digits[i] = 0

        # If all digits were 9
        return [1] + digits

```
