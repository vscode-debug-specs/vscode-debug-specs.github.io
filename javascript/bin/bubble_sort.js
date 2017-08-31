#!/usr/bin/env node
const bubble_sort = require("../bubble_sort");

if (process.argv.length < 3) {
	console.log("usage bubble_sort 3 2 1...")
	process.exit(1);
}

const list = [];
for (let i = 2; i < process.argv.length; i++) {
	const n = parseInt(process.argv[i], 10);
	if (isNaN(n)) {
		console.log("cannot parse number:" + process.argv[i]);
		process.exit(1);
	}
	list.push(n);
}
bubble_sort.sort(list);
console.log(list);