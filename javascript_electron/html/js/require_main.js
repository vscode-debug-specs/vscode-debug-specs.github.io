module.paths.push(require('path').resolve('.'));
const bubble_sort = require('js/require_bubble_sort');
document.querySelector("#normal").addEventListener('click',()=>{
	const input = document.querySelector("#input").value;
	const output = bubble_sort.sort(input);
	document.querySelector("#output").innerText = output;
});