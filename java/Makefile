build:
	mvn compile
	# javac -d class -cp class/ src/bubblesort/*.java
	# javac -d class -cp class/:jar/junit-4.12.jar src/test/bubblesort/*.java
run:
	java -cp target/classes com.j74th.vscodedebugbook.bubblesort.BubbleSorter 4 3 2 1
test:
	#mvn test
	java -cp target/classes:target/test-classes:./junit-3.8.2.jar junit.textui.TestRunner com.j74th.vscodedebugbook.bubblesort.BubbleSortTest
remote-run:
	java -cp target/classes -Xdebug -Xrunjdwp:transport=dt_socket,server=y,address=5005,suspend=y com.j74th.vscodedebugbook.bubblesort.BubbleSorter 4 3 2 1