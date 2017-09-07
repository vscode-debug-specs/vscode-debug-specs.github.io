#!/usr/bin/env node
import { bubbleSort } from "./bubble_sort";

if (process.argv.length < 3) {
	console.log("usage bubble_sort 3 2 1...")
	process.exit(1);
}

const list:number[] = [];
for (let i = 2; i < process.argv.length; i++) {
	const n = parseInt(process.argv[i], 10);
	if (isNaN(n)) {
		console.log("cannot parse number:" + process.argv[i]);
		process.exit(1);
	}
	list.push(n);
}
bubbleSort(list);
console.log(list);