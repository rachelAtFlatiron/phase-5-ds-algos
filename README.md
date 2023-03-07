# Data Structures and Algorithms Outline

# Week 1 
## Day 1: Runtime

- **Runtime**: The amount of time it takes a computer to run an algorithm.
    - It can be thought of as the number of times a statement is executed, not the actual amount of ms it takes an algorithm to run
    - Run time can be separated into best, average, and worst case scenarios.
    <br>
    <br>
    ![graph for big O](https://paper-attachments.dropbox.com/s_2D428973624E7FC84C7D69D11421DE762BEA6B6F3361231FCDCAE0425D14526F_1664885448372_Untitled.drawio+17.png)
    <br>
    [Source](https://www.freecodecamp.org/news/big-o-cheat-sheet-time-complexity-chart/)
<br>
<br>
<br>

## Day 2: Selection & Insertion Sort
- **Selection Sort**: An in-place sorting algorithm for arrays
    - An in place sorting algorithm (we will be swapping elements, not creating new arrays)
    - Not ideal for large lists
    - Good for checking if list is already sorted
    - Algo divides list into sorted and unsorted sublists.  It finds the least element in the unsorted sublist and swaps it with the first element in the unsorted sublist.
    - Note: The initial sorted sublist is empty
    <br>
    <br>
    ![selection sort](https://www.w3resource.com/w3r_images/selection-short.png)
<br>
<br>
<br>

- **Insertion Sort**: Another in place comparison sorting method 
    - Efficient for small data sets and data sets that are already partially sorted
    - Algo divides list into sorted and unsorted sublists.  It compares the first element in the unsorted sublist and repeatedly swaps it, working backwards, through the sorted sublist until it finds its place.
    <br>
    <br>
    ![insertion sort](https://www.w3resource.com/w3r_images/insertion-sort.png)
<br>
<br>
<br>

## Day 3: Search and O(log n)
- **Binary Search**: Efficient algo for finding an item in a SORTED array
    - Repeatedly divides the search interval by half
    - Looks at element in middle, if middle element is less than target element we start searching in the right half and vice versa.
    <br>
    <br>
    ![binary search](https://media.geeksforgeeks.org/wp-content/uploads/20220309171621/BinarySearch.png)
    <br>
    [Source](https://www.geeksforgeeks.org/binary-search/)
    <br>
    <br>
- **[O(log n)](https://towardsdatascience.com/logarithms-exponents-in-complexity-analysis-b8071979e847)**
    - default base is 2 because its very common to work with binary numbers and to divide things in two, so we drop the 2
    <br>
    <br>
    ![log n](https://i.stack.imgur.com/spHFh.png)
    <br>
    [source](https://stackoverflow.com/questions/2307283/what-does-olog-n-mean-exactly)

<br>
<br>
<br>

## Day 4: Recursion
- **Recursion**: Defining a problem by smaller instances of itself
    - **Base Case**: The smallest subproblem that ends the recursion
    - **Recursive Case**: The case where the function calls itself, usually with some modified parameter or return value
<br>
<br>
<br>

## Day 5: Fibonacci and Recursion
- quicksort?
- something recursive

<br>
<br>
<br>

# Week 2
## Day 1: Merge sort

<br>
<br>
<br>

## Day 2: Nodes, Linked Lists, Stacks, Queues
<br>
<br>
<br>

## Day 3: Trees

<br>
<br>
<br>

## Day 4: Tree Traversal
<br>
<br>
<br>

## Day 5: Graphs

<br>
<br>
<br>

# Week 3

## Day 1: Graph Paths 

<br>
<br>
<br>

## Day 2: Graph Paths
