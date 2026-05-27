---
problem_id: 50
title: Sqrt(x)
difficulty: Medium
topics: []
solved_at: 2026-05-27T19:50:11.093Z
language: unknown
url: https://leetcode.com/problems/sqrtx/submissions/2014913664/
---

## Solution

```unknown
class Solution:
    def mySqrt(self, x):
        if x < 2:
            return x

        left, right = 1, x // 2

        while left <= right:
            mid = (left + right) // 2
            square = mid * mid

            if square == x:
                return mid
            elif square < x:
                left = mid + 1
            else:
                right = mid - 1

```
