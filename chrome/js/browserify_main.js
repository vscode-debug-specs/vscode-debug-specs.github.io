import { bubbleSort } from "./browserify_bubble_sort";

document.querySelector("#browserify").addEventListener("click", (e) => {
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