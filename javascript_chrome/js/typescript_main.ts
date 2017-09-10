import { bubbleSort } from "./typescript_bubble_sort";

document.querySelector("#typescript").addEventListener("click", (e) => {
	const line = (document.querySelector("#input") as HTMLInputElement).value;
	const list:number[] = [];
	line.split(" ").forEach((item: string) => {
		list.push(parseInt(item, 10));
	});
	bubbleSort(list);

	let output = "";
	list.forEach((item: number) => {
		output += item.toString(10) + " ";
	});
	document.querySelector("#output").innerHTML = output;
});
