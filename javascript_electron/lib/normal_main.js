const bubble_sort = require('./normal_bubble_sort');
document.querySelector("#normal").addEventListener('click',()=>{
	const line = document.querySelector("#input").value;
	const list = [];
	line.split(" ").forEach((item) => {
		list.push(parseInt(item, 10));
	});
	bubble_sort.sort(list);

	let output = "";
	list.forEach((item) => {
		output += item + " ";
	});
	document.querySelector("#output").innerHTML = output;
});