{
	function bubbleSort(list) {
		for (var i = 0; i < list.length; i++) {
			for (var j = 0; j < list.length - i - 1; j++) {
				if (list[j] > list[j + 1]) {
					var tmp = list[j];
					list[j] = list[j + 1];
					list[j + 1] = tmp;
				}
			}
		}
	}
	document.querySelector("#normal").addEventListener("click", function(e){
		var line = document.querySelector("#input").value;
		var list = [];
		line.split(" ").forEach(function(item){
			list.push(parseInt(item, 10));
		});
		bubbleSort(list);

		var output = "";
		list.forEach(function(item){
			output += item + " ";
		});
		document.querySelector("#output").innerHTML = output;
	});
}