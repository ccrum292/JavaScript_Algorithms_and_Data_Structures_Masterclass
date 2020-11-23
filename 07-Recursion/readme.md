# Recursion


## Objectives 

- Define recursion and how it can be used

- Understand the two essential components of a recursive function 

- Visualize the call stack to better debug and understand recursive functions

- Use helper method recursion and pure recursion to solve more difficult problems


## General

- What is recursion? 
  - A process (a function in our case) that calls itself

- The call stack
  - It's a stack data structure 
  - Any time a function is invoked it is placed (pushed) on the top of the call stack
  - When js sees the return keyword or when the function ends, the compiler will remove (pop)

- Two essential parts of a recursive function 
  - Base Case
  - Different Input

- Where things go wrong
  - no base case
  - forgetting to return or returning incorrect  

### Helper Method Recursion

- normal function with recursion helper function within it

### Pure Recursion 

- 