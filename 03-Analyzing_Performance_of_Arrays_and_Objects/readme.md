# Analyzing Performance of Arrays and Objects


## Objectives

- Understand how objects and arrays work, through the lens of Big O

- Explain why adding elements to the beginning of an array is costly 

- compare and contrast the runtime for arrays and objects, as well as built-in methods


## General 

### Objects

- unordered 

- When to use?
  - When you don't need order
  - when you need fast access/ insertion and removal
  - when you don't need any ordering, objects are an excellent choice

### Arrays

- ordered 

- When to use?
  - when you need order
  - when you need fast access
  - fast insertion/ removal when added or removed to end of array O(1)
  - slow insertion/ removal when added or removed to beginning of array O(n)

- sort, O(n* log n)