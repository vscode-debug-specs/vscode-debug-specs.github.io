using System;
using BubbleSort;
using System.Collections.Generic;
using Xunit;

namespace BubbleSortTest
{
	public class TestSort
	{
		[Fact]
		public void Test1()
		{
			var sorter = new BubbleSort.Sorter();
			var list = new List<int>();
			list.Add(4);
			list.Add(3);
			list.Add(2);
			list.Add(1);
			sorter.Sort(list);
			Assert.Equal(1, list[0]);
			Assert.Equal(2, list[1]);
			Assert.Equal(3, list[2]);
			Assert.Equal(4, list[3]);
		}
	}
}
