import { bubbleSort } from "./typescript_bubble_sort";
document.querySelector("#typescript").addEventListener('click', () => {
    const line = (document.querySelector("#input") as HTMLInputElement).value;
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