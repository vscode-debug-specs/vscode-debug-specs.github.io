package bubblesort;

import java.util.*;

class BubbleSort {
	 public void Sort(int[] list) {
		 for (int i = 0; i < list.length - 1; i++) {
			for (int j = 0; j < list.length - 1 - i; j++) {
				if (list[j] >list[j + 1]) {
					int tmp = list[j];
					list[j] = list[j + 1];
					list[j + 1] = tmp;
				}
			}
		}
	}
}