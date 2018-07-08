using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BubbleSort;

namespace BubbleSorterAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BubbleSortController : ControllerBase
    {
        // POST api/values
        [HttpPost]
        public string Post([FromBody] string input)
        {
			var args = input.Split(" ");
			var list = new List<int>();
			foreach (var arg in args)
			{
				list.Add(int.Parse(arg));
			}

			var sorter = new Sorter();
			sorter.Sort(list);

			var output = "";
			foreach (var n in list)
			{
				output += n.ToString() + " ";
			}
			return output;
        }
    }
}
