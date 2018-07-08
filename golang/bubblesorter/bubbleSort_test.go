package bubblesorter

import "testing"

func TestBubbleSort(t *testing.T) {
	input := []int{4, 1, 3, 2}
	out := BubbleSort(input)

	ans := []int{1, 2, 3, 4}
	for i := range input {
		if out[i] != ans[i] {
			t.Errorf("incorrect sort expect:%#v actual:%#v", ans, out)
			break
		}
	}
}
