build:
	mvn compile
run:
	java -cp target/classes com.j74th.vscodedebugbook.bubblesort.BubbleSorter 4 3 2 1
test-all:
	mvn test
test:
	java -cp target/classes:target/test-classes:./junit-3.8.2.jar junit.textui.TestRunner com.j74th.vscodedebugbook.bubblesort.BubbleSortTest
remote-run:
	java -cp target/classes -Xdebug -Xrunjdwp:transport=dt_socket,server=y,address=5005,suspend=y com.j74th.vscodedebugbook.bubblesort.BubbleSorter 4 3 2 1