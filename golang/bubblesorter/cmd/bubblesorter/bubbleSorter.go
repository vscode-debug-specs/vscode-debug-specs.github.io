package main

import (
	"flag"
	"fmt"
	"os"
	"strconv"
	"time"

	"github.com/74th/vscode-debug-specs/golang/bubblesorter"
)

func main() {
	var sleepSec int
	flag.IntVar(&sleepSec, "sleep", 0, "sleep second")
	flag.Parse()
	time.Sleep(time.Duration(sleepSec) * time.Second)

	if flag.NArg() == 0 {
		fmt.Printf("bubbleSorter 3 2 1 ...")
		os.Exit(1)
	}

	in := []int{}
	for _, arg := range flag.Args() {
		n, err := strconv.Atoi(arg)
		if err != nil {
			fmt.Printf("parse error %s", arg)
			os.Exit(1)
		}
		in = append(in, n)
	}
	out := bubblesorter.BubbleSort(in)
	for _, n := range out {
		fmt.Printf("%d ", n)
	}
	fmt.Println()
}
