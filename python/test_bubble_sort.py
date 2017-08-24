# -*- coding: utf-8 -*-
''' module bubble_sort '''

import unittest
import bubble_sort


class TestBubbleSort(unittest.TestCase):
    '''bubble sort test '''

    def test_bubble_sort(self):
        '''test bubble sort'''

        before = [4, 3, 2, 1]
        after = bubble_sort.bubble_sort(before)
        self.assertEqual([1, 2, 3, 4], after, "must sort")
