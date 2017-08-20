package main

import (
	"fmt"

	module "../.."
)

func main() {

	out := module.BubbleSort([]int{4, 3, 2, 1})
	fmt.Printf("%#v", out)
}
