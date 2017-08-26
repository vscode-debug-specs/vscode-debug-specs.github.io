using System;
using System.Collections.Generic;
using System.Linq;
using BubbleSort;

namespace BubbleSorter
{
	class Program
	{
		static void Main(string[] args)
		{
			if (args.Length == 0)
			{
				Console.WriteLine("BubbleSorter 2 1...");
				System.Environment.Exit(1);
			}

			var list = new List<int>();
			foreach (var arg in args)
			{
				list.Add(int.Parse(arg));
			}

			var sorter = new Sorter();
			sorter.Sort(list);

			foreach (var n in list)
			{
				Console.Write(n.ToString() + " ");
			}
			Console.WriteLine();
		}
	}
}
