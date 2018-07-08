# -*- coding: utf-8 -*-
''' module bubble_sort '''

import bubble_sorter
import ptvsd
import time

ptvsd.enable_attach("my_secret", address=('0.0.0.0', 3333))
ptvsd.wait_for_attach()

time.sleep(5)
bubble_sorter.main()
