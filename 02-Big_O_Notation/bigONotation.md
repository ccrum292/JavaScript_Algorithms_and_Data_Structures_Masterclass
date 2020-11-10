# Big O Notation


## General 

- Big O Notation is a System of comparing the performance of code
  - formally describes how the runtime of an algorithm grows as the input grows
  - O(f(n)), where f(n) can equal n (example: one for loop), n^2 (example: a for loop within a for loop), 1, or something entirely different 

- The Problem with Time
  - Different Machines will record with different times
  - same machine will record with different times
  - speed measurements will not be precise enough 

- Instead, count the number of simple operations the computer has to perform 
  - exact count does not matter, we are looking at trends 

- constants don't matter
  - O(2n) is O(n)
  - O(1000n + 50) is O(n)
  - O(13n^2) is O(n^2)
  - O(n^2 + 5n + 8) is O(n^2)
  - 


### Big O Shorthands

  1. Arithmetic operations are constant 
  2. Variable assignment is constant 
  3. Accessing elements in an array (by index) or object (by key) is constant 
  4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop

### Time Complexity
  - analyses of an algorithm's runtime as the size of the inputs increases

### Space Complexity 
  - how much additional memory do we need to allocate in order to run the code in our algorithm
  - auxillary space complexity (only focus on algorithm)

- rules of thumb for space complexity 
  - most primitives are constant space
  - strings require O(n) space (where n is the string length)
  - reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)



### Recap

- To analyze the performance of an algorithm, we use Big O Notation 
- Big O Notation can give us a high level understanding of the time or space complexity of an algorithm 
- Big O Notation doesn't care about precision, only about general trends (linear, quadratic, constant)
- The time or space complexity (as measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm 


