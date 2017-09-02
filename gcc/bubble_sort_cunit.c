#include <CUnit/CUnit.h>
#include <CUnit/Console.h>

void sort(int nList, int *list);
void test_bubble_sort(void);

int main()
{
	CU_pSuite sort_suite;

	CU_initialize_registry();
	sort_suite = CU_add_suite("BubbleSort", NULL, NULL);
	CU_add_test(sort_suite, "test", test_bubble_sort);
	CU_console_run_tests();
	CU_cleanup_registry();

	return (0);
}

void test_bubble_sort(void)
{
	int list[] = {4, 3, 2, 1};

	sort(4, list);
	CU_ASSERT(list[0] == 1);
}
