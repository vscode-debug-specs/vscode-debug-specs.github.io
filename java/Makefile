build:
	javac -d class -cp class/ src/bubblesort/*.java
	javac -d class -cp class/:jar/junit-4.12.jar src/test/bubblesort/*.java
test: build
	java -cp class/:jar/junit-4.12.jar:jar/hamcrest-all-1.3.jar org.junit.runner.JUnitCore test.bubblesort.TestBubbleSort
run:
	java -cp class/:jar/junit-4.12.jar:jar/hamcrest-all-1.3.jar bubblesort.BubbleSorter 4 3 2 1