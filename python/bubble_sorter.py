# -*- coding: utf-8 -*-
''' module bubble_sort '''

import sys
import bubble_sort


def main():
    '''sort'''
    if len(sys.argv) < 3:
        print("bubble_sorter.py n1 n2...")
        sys.exit(1)

    nums = []
    for item in sys.argv[1:]:
        nums.append(int(item))
    print(nums)
    nums = bubble_sort.bubble_sort(nums)
    print(nums)


if __name__ == "__main__":
    main()
