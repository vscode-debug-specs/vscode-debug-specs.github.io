module.paths.push(require('path').resolve('.'));
const bubble_sort = require('lib/require_bubble_sort');
document.querySelector("#require").addEventListener('click',()=>{
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