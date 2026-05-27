# Last updated: 5/28/2026, 12:59:08 AM
1class Solution:
2    def mySqrt(self, x):
3        if x < 2:
4            return x
5
6        left, right = 1, x // 2
7
8        while left <= right:
9            mid = (left + right) // 2
10            square = mid * mid
11
12            if square == x:
13                return mid
14            elif square < x:
15                left = mid + 1
16            else:
17                right = mid - 1
18
19        return right