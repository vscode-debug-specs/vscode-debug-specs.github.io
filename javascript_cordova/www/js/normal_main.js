{
	function bubbleSort(list) {
		for (let i = 0; i < list.length; i++) {
			for (let j = 0; j < list.length - i - 1; j++) {
				if (list[j] > list[j + 1]) {
					const tmp = list[j];
					list[j] = list[j + 1];
					list[j + 1] = tmp;
				}
			}
		}
	}
	document.querySelector("#normal").addEventListener("click", (e) => {
		const line = document.querySelector("#input").value;
		const list = [];
		line.split(" ").forEach((item) => {
			list.push(parseInt(item, 10));
		});
		bubbleSort(list);

		let output = "";
		list.forEach((item) => {
			output += item + " ";
		});
		document.querySelector("#output").innerHTML = output;
	});
}