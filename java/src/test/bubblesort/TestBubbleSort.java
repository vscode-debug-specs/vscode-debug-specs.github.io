package test.bubblesort;

import static org.junit.Assert.*;
import org.junit.Test;
import bubblesort.*;

public class TestBubbleSort  {

    @Test
    public void testBubbleSort() {
		int[] list = new int[4];
		list[0] = 4;
		list[1] = 3;
		list[2] = 2;
		list[3] = 1;

		BubbleSort sorter = new BubbleSort();
		sorter.Sort(list);

		assertEquals(1,list[0]);
		assertEquals(2,list[1]);
		assertEquals(3,list[2]);
		assertEquals(4,list[3]);
    }

}