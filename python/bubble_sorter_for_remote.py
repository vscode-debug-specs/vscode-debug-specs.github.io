# -*- coding: utf-8 -*-
''' module bubble_sort '''

import bubble_sorter
import ptvsd

ptvsd.enable_attach("my_secret", address=('0.0.0.0', 3000))
ptvsd.wait_for_attach()

bubble_sorter.main()
