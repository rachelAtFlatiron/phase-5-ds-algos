# Data Structures and Algorithms Outline

# Week 1 
## Day 1: Runtime

- **Runtime**: The amount of time it takes a computer to run an algorithm.
    - It can be thought of as the number of times a statement is executed, not the actual amount of ms it takes an algorithm to run
    - Run time can be separated into best, average, and worst case scenarios.
    <br><br>
    ![graph for big O](https://paper-attachments.dropbox.com/s_2D428973624E7FC84C7D69D11421DE762BEA6B6F3361231FCDCAE0425D14526F_1664885448372_Untitled.drawio+17.png)
    <br><br>
    [Source](https://www.freecodecamp.org/news/big-o-cheat-sheet-time-complexity-chart/)
<br><br><br>

## Day 2: Selection & Insertion Sort
- **Selection Sort**: An in-place sorting algorithm for arrays
    - An in place sorting algorithm (we will be swapping elements, not creating new arrays)
    - Not ideal for large lists
    - Good for checking if list is already sorted
    - Algo divides list into sorted and unsorted sublists.  It finds the least element in the unsorted sublist and swaps it with the first element in the unsorted sublist.
    - Note: The initial sorted sublist is empty
    <br><br>
    ![selection sort](https://www.w3resource.com/w3r_images/selection-short.png)
    <br><br>
- **Insertion Sort**: Another in place comparison sorting method 
    - Efficient for small data sets and data sets that are already partially sorted
    - Algo divides list into sorted and unsorted sublists.  It compares the first element in the unsorted sublist and repeatedly swaps it, working backwards, through the sorted sublist until it finds its place.
    <br><br>
    ![insertion sort](https://www.w3resource.com/w3r_images/insertion-sort.png)
<br><br><br>

## Day 3: Search and O(log n)
- **Binary Search**: Efficient algo for finding an item in a SORTED array
    - Repeatedly divides the search interval by half
    - Looks at element in middle, if middle element is less than target element we start searching in the right half and vice versa.
    <br><br>
    ![binary search](https://media.geeksforgeeks.org/wp-content/uploads/20220309171621/BinarySearch.png)
    <br><br>
    [Source](https://www.geeksforgeeks.org/binary-search/)
    <br><br>
- **[O(log n)](https://towardsdatascience.com/logarithms-exponents-in-complexity-analysis-b8071979e847)**
    - default base is 2 because its very common to work with binary numbers and to divide things in two, so we drop the 2
    <br><br>
    ![log n](https://i.stack.imgur.com/spHFh.png)
    <br><br>
    [source](https://stackoverflow.com/questions/2307283/what-does-olog-n-mean-exactly)
<br><br><br>

## Day 4: Recursion
- **Recursion**: Defining a problem by smaller instances of itself
    - **Base Case**: The smallest subproblem that ends the recursion
    - **Recursive Case**: The case where the function calls itself, usually with some modified parameter or return value
    - Think of ['Inception'](https://en.wikipedia.org/wiki/Inception)
    <br><br>
    ![iterative vs recursive](https://cdn-media-1.freecodecamp.org/images/1*QrQ5uFKIhK3jQSFYeRBIRg.png)
    <br><br>
    [source](https://www.freecodecamp.org/news/how-recursion-works-explained-with-flowcharts-and-a-video-de61f40cb7f9/)
    <br><br>
- **Factorial**
    - **Call Stack** Recursive calls are stored on a data structure called a call stack.  A call stack works like a stack of plates:
    <br><br>
    ![factorial stack](/algos/assets/factorial-call-stack.png)
<br><br><br>

## Day 5: Fibonacci and Recursion
- **Fibonacci**: A famous sequence of numbers where the current number is derived from the sum of the previous two numbers.
    - Note that F(0) = 0 and F(1) = 1 and F(n) = F(n - 1) + F(n - 2)
- **Memoization**: Saving the result of previous recursive calls in some cache so that you don't have to recompute the results.  We won't be covering it but here's a good source: [link](https://realpython.com/fibonacci-sequence-python/#memoizing-the-recursive-algorithm)

![fibonacci recursion tree](/algos/assets/fib-recurse-tree.png)
<br><br>

[source](https://algodaily.com/challenges/fibonacci-sequence/memoization)

<br><br><br>

# Week 2
## Day 1: Merge sort

<br><br><br>

## A note on classes in Javascript
- Javascript IS NOT a class-based language, classes in Javascript are only "special functions" for creating objects
- Syntax for Javascript classes are very similar to that of class-based languages (Java, PHP, etc)
- This results in different binding and scoping that we won't cover
<br><br>
Still - the best way to get to know data structures is to build a class that mimics other built in classes including all the traditional functionality that belongs to these structures.  We will be using Javascript because that's what you know.

## Day 2: Nodes, Linked Lists, Stacks, Queues

- **Node**: A node represents a little nodule of data.  Nodes typically have a link to the next node and sometimes the previous node.  Having both or one of the link attributes typically depends on what other data structure the node is being used with.  Nodes are used in numerous data structures: linked lists, stacks, queues, trees, graphs, and more.  Nodes are never used on their own.
- **Linked Lists**: Linked lists are a series of nodes arranged similarly to an array.  Some key differences are:
    - there is no way to directly access an index of an element.  You have to traverse the list from the starting or ending node.
    - you have to set the reference to the next or previous node.  One node relies on the reference of its previous and next nodes
    - memory allocation, runtime, and efficiency will be out of scope for this lesson.
<br><br>
![singly linked list](/ds/assets/singly-linked-list.png)
<br>
[Singly linked list](https://www.geeksforgeeks.org/what-is-linked-list/)
<br><br>

### Vocabulary
- **head**: the first node of the linked list
- **tail**: the last node of the linked list
- **Singly Linked List**: A unidirectional linked list that you can only traverse in one direction.
- **Doubly Linked List**: A bidirectional linked list that you can traverse in either direction, starting either from the head or the tail
- **Circular Linked List**: Linked lists where the tail is connected to the head.

<br><br><br>

## Day 3: Trees

<br><br><br>
## Day 4: Tree Traversal
<br><br><br>

## Day 5: Graphs

<br><br><br>
# Week 3

## Day 1: Graph Paths 

<br><br><br>

## Day 2: Graph Paths
