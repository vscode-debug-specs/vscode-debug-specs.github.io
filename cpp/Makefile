.DEFAULT_GOAL := main
.PHONY: clean
main:main.c bubble_sort.c
	gcc -O0 -g -W -Wall -o main bubble_sort.c main.c
bubble_sort_cunit:bubble_sort_cunit.c bubble_sort.c
	gcc -O0 -g -W -Wall -o bubble_sort_cunit bubble_sort.c bubble_sort_cunit.c -lcunit
clean:
	rm -rf main bubble_sort_cunit
