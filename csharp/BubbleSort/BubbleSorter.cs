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
					if (list[i].CompareTo(list[i + 1]) > 0)
					{
						var tmp = list[i];
						list[i] = list[i + 1];
						list[i + 1] = tmp;
					}
				}
			}
		}
	}
}
