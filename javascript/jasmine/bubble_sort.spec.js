
const bubble_sort = require("../bubble_sort");

describe("bubble sort", () => {
	it('sorted list', () => {
		const list = [4, 3, 2, 1];
		bubble_sort.sort(list);
		expect(list[0]).toEqual(1);
		expect(list[1]).toEqual(2);
		expect(list[2]).toEqual(3);
		expect(list[3]).toEqual(4);
	});
});

