package bubblesort;

import java.util.*;

class BubbleSorter {
	public static void main(String[] args){

		BubbleSort sort= new BubbleSort();
		int[] list = new int[4];
		list[0] = 4;
		list[1] = 3;
		list[2] = 2;
		list[3] = 1;
		sort.Sort(list);
		System.out.println(list[0]);
		System.out.println(list[1]);
		System.out.println(list[2]);
		System.out.println(list[3]);
	}
}