#include <stdio.h>
#include <stdlib.h>
// #include <unistd.h>

void sort(int nList, int *list);

int main(int nArgs, char **argv)
{
	if (nArgs < 2)
	{
		printf("sorter 1 2 3...");
		return 1;
	}

	int *list;
	list = (int *)malloc(sizeof(int) * nArgs - 1);
	for (int i = 0; i < nArgs - 1; i++)
	{
		list[i] = atoi(argv[i + 1]);
	}

	sort(nArgs - 1, list);

	for (int i = 0; i < nArgs - 1; i++)
	{
		printf("%d ", list[i]);
	}
	printf("\n");

	return 0;
}