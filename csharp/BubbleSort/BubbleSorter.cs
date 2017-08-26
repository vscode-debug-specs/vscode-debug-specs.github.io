using System;
using System.Collections;
using System.Collections.Generic;

namespace BubbleSort
{
	public class Sorter
	{
		public void Sort(IList<int> list)
		{
			for (var i = 0; i < list.Count; i++)
			{
				for (var j = 0; j < list.Count - i - 1; j++)
				{
					if (list[j].CompareTo(list[j + 1]) > 0)
					{
						var tmp = list[j];
						list[j] = list[j + 1];
						list[j + 1] = tmp;
					}
				}
			}
		}
	}
}
