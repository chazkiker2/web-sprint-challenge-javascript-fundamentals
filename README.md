# Sprint Challenge - JavaScript Fundamentals

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in project. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied array methods, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL if you need direction. 

_You have **three hours** to complete this challenge. Plan your time accordingly._


## Introduction

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

### Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead as the evaluate your solution.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. Briefly compare and contrast `.forEach` & `.map` (2-3 sentences max)
  .forEach() is an array method that iterates through an array and executes the provided function on each element in that array. This method returns undefined.
  .map() iterates through each element of an array as well. However, on the other hand, .map() requires a return statement and returns a brand new array after executing a provided function for each element.

2. Explain the difference between a callback and a higher order function.
  Higher order functions receive callback functions as an argument (i.e., Higher Order functions receive functions). Callbacks are functions that are passed in as a parameter.

3. What is closure?
  Closure is a JavaScript practice where functions can refer to their outer scope (its surrounding state) to create references to the lexical environment. (Very important for JS encapsulation and data hiding.)

4. Describe the four rules of the 'this' keyword.
  a. Global use of "this" refers to either the Window object (if working in a browser environment) or some general Global object (if working in Node.js). If using Strict Mode, using "this" globally will simply reference undefined.

  b. Implicit binding is the most common use case of the "this" keyword. When a function is invoked by way of a dot operator, the object preceding the dot operator is referred to by "this".

  c. Explicit binding is used to bind functions to specific object by way of .call(), .apply(), and .bind(). .call() and .apply() both immediately invoke the function; however, call takes one parameter which is then bound to "this" while apply takes an array of objects to bind. 
  .bind() creates a new function after binding that can be called later on.

  d. New binding —— using the new keyword constructs a new object which is then pointed to by "this". When a constructor function is invoked, each time "this" is in the constructor it refers to the freshly created object instance.

5. Why do we need super() in an extended class?
  super(attributes); calls the constructor of the parent class and notifies the system that the class calling super is the CHILD of the class it extends. Calling super() will ultimately allow the child class to INHERIT all of the parent's properties and methods! Very cool stuff.

You are expected to be able to answer questions in these areas. Your responses contribute to your Sprint Challenge grade. 

## Instructions

### Task 1: Project Set Up

- [x] Create a forked copy of this project
- [x] Add your team lead as collaborator on Github
- [x] Clone your OWN version of the repository (Not Lambda's by mistake!)
- [x] Create a new branch: git checkout -b `<firstName-lastName>`.
- [x] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly
- [x] Push commits: git push origin `<firstName-lastName>`

### Task 2: Project Requirements

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

#### Task A: Objects and Arrays

Test your knowledge of advanced array methods and callbacks.
* [x] Use the [arrays-callbacks.js](challenges/arrays-callbacks.js) link to get started.  Read the instructions carefully!

#### Task B: Closure

This challenge takes a look at closures as well as scope. 
* [x] Use the [closure.js](challenges/closure.js) link to get started. Read the instructions carefully!

#### Task C: Prototypes

Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [x] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

#### Task D: Classes

Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [x] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3: Stretch Goals 

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!

## Submission format

Follow these steps for completing your project.

- [x] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo). **Please don't merge your own pull request**
- [x] Add your team lead as a reviewer on the pull-request
- [x] Your team lead will count the project as complete after receiving your pull-request


