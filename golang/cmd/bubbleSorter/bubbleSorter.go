package main

import (
	"flag"
	"fmt"
	"time"

	module "github.com/74th/vscode-debug-specs/golang"
)

func main() {
	var sleepSec int
	flag.IntVar(&sleepSec, "sleep", 0, "sleep second")
	flag.Parse()
	time.Sleep(time.Duration(sleepSec) * time.Second)

	in := []int{4, 3, 2, 1}
	fmt.Printf("%#v\n", in)
	out := module.BubbleSort(in)
	fmt.Printf("%#v\n", out)
}
