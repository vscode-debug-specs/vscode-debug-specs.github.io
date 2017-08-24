# -*- coding: utf-8 -*-
''' module bubble_sort '''


def bubble_sort(list):
    ''' sort list '''
    for i in range(0, len(list)):
        for j in range(0, len(list) - i - 1):
            if list[j] > list[j + 1]:
                tmp = list[j]
                list[j] = list[j + 1]
                list[j + 1] = tmp
    return list
