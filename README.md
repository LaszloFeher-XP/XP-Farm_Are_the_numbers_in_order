# Are the numbers in order?

https://www.codewars.com/kata/56b7f2f3f18876033f000307/train/javascript

## Instructions

Are the numbers in order?

In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

For the purposes of this Kata, you may assume that all inputs are valid, i.e. non-empty arrays containing only integers.

Note that an array of 1 integer is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value. An empty list is considered a degenerate case and therefore will not be tested in this Kata - feel free to raise an Issue if you see such a list being tested.

For example:
```sh
inAscOrder([1,2,4,7,19]); // returns true
inAscOrder([1,2,3,4,5]); // returns true
inAscOrder([1,6,10,18,2,4,20]); // returns false
inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order
```
N.B. If your solution passes all fixed tests but fails at the random tests, make sure you aren't mutating the input array.


## User Stories

### 1. First story
As a user
I want to check if an array is sorted or not
So that create the logic

#### Scenarios

#### 1.
Given [1,2,3]
When runs logic
Then returns true

#### 2.
Given [3,2,1]
When runs logic
Then returns false

# Setting up the environment

## To install dependencies

To install dependencies, run the following:

```npm install```

## To run the tests

To run the tests, there is a script in the project root called test. It calculates code coverage, incorporates watch mode, and prints in verbose mode, so all test file's test report will be visible. Alternatively, you can achieve the same with the command the script contains:

```npm test -- --watchAll --collect-coverage --verbose``` 

