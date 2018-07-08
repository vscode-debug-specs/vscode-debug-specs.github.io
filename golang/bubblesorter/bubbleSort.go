package bubblesorter

// BubbleSort sorts the list
func BubbleSort(list []int) []int {
	length := len(list)
	for i := 0; i < length; i++ {
		for j := 0; j < length-1-i; j++ {
			if list[j] > list[j+1] {
				list[j], list[j+1] = list[j+1], list[j]
			}
		}
	}
	return list
}
