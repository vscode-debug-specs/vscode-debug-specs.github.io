package bubblesort;

import java.util.*;

class BubbleSorter {
	public static void main(String[] args) {

		BubbleSort sort = new BubbleSort();

		int[] list = new int[args.length];
		for(int i=0; i < args.length; i++) {
			list[i] = Integer.parseInt(args[i]);
		}
		sort.Sort(list);
		for(int i=0; i < list.length; i++) {
			System.out.print(list[i]);
			System.out.print(" ");
		}
		System.out.println("");
	}
}