#include <stdio.h>
#include <stdlib.h>

int main(int nArgs, char **argv)
{
	int *list;
	list = (int *)malloc(sizeof(int) * 4);
	list[0] = 4;
	list[1] = 3;
	list[2] = 2;
	list[3] = 1;

	sort(4, list);

	for (int i = 0; i < 4; i++)
	{
		printf("%d ", list[i]);
	}
	printf("\n");

	return 0;
}