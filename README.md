# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

From the slides, we can see that mergesort has a normal runtime of $\Theta(nlogn)$, but that version of mergesort only has one for loop, mine has two which go through the whole set of data, this means that we go through n again, making my runtime $\Theta(n^2logn)$

## Plagarism Statement

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

## Sources

I used [w3schools](https://www.w3schools.com/dsa/dsa_algo_mergesort.php) to help me with the merge function. Michael Stoll helped me figure out the general logic and helped walk me through the runtime analysis. I took the general loop structure of two nested for loops from Lily Brongo, who also helped me with some of the syntax and flow of the program. Lily also told me to go to the slides for help with the code and the Runtime Analysis. I used [hyperskill](https://hyperskill.org/blog/post/javascript-array-slicing-techniques#:~:text=In%20JavaScript%2C%20you%20can%20do,and%20the%20end%20is%20exclusive.) to help with splitting the arrays
