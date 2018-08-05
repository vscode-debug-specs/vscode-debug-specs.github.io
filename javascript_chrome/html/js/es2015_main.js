import { bubbleSort } from "./es2015_bubble_sort.js";

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