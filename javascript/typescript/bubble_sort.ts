
export function bubbleSort(list: number[]) {
	for (let i = 0; i < list.length - 1; i++) {
		for (let j = 0; j < list.length - 1 - i; j++) {
			if (list[j] > list[j + 1]) {
				const tmp = list[j];
				list[j] = list[j + 1];
				list[j + 1] = tmp;
			}
		}
	}
}