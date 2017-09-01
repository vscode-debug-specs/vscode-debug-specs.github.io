
extern void sort(int nList, int *list);

void sort(int nList, int *list)
{
	int tmp;
	for (int i = 0; i < nList; i++)
	{
		for (int j = 0; j < nList - 1; j++)
		{
			if (list[j] > list[j + 1])
			{
				tmp = list[j];
				list[j] = list[j + 1];
				list[j + 1] = tmp;
			}
		}
	}
}