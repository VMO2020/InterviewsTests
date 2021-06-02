## Some questions for web developers in the UK

# 1.- What mean object oriented programming in js?

1a.- Object-Oriented Programming is a way of writing code that allows you to create different objects from a common object (Class).

The common object is usually called a Blueprint while the created objects are called Instances.

1b.- The second aspect of Object-Oriented Programming is about structuring code when you have multiple levels of blueprints.

1c.- The third aspect of Object Oriented Programming is about encapsulation where you hide certain pieces of information within the object so they’re not accessible.

# 2.- What is "class" in Javascript?

JavaScript Classes are templates for JavaScript Objects. Classes are used to create objects.

In object-oriented programming, a class is an extensible program-code-template for creating objects, providing initial values for state (member variables) and implementations of behavior (member functions or methods).

# 3.- What is an Object in Javascript?

An object is a collection of properties and methods (functions). A property is an association between a name (or key) and a value.

# 4.- What are the benefits of using SASS over pure CSS?

SASS is like CSS but with superpowers.

Sass facilitates you to write clean, easy and less CSS in a programming construct, so you can write CSS quicker.

It is more stable, powerful, and elegant because it is an extension of CSS.

It provides nesting so you can use nested syntax and useful functions like color manipulation, math functions and other values.

It includes mixins. Mixins are like functions in other programming languages.

# 5.- What is constructors in JS?

Constructors are functions that contain a collection of "this" keyword, this lets you store (and access) unique values created for each instance. You can create an instance with the new keyword.

# 6.- What is CSS combinator?

A combinator is something that explains the relationship between the selectors.

There are four different combinators in CSS:

- Descendant selector (space):
  The descendant selector matches all elements that are descendants of a specified element.

- Child selector (>):
  The child selector selects all elements that are the children of a specified element.

- Adjacent sibling selector (+):
  The adjacent sibling selector is used to select an element that is directly after another specific element.

- General sibling selector (~):
  The general sibling selector selects all elements that are siblings of a specified element.

# 7.- How can you make a click event in JS?

Using JavaScript HTML DOM EventListener.

Example: Add an event listener that fires when a user clicks a button:

document.getElementById("myBtn").addEventListener("click", displayDate);

# 8.- What is JavaScript HTML DOM?

Whit the HTML DOM (Document Object Model), JavaScript can access and change all the elements of an HTML document.

Can change all the HTML elements in the page, HTML attributes in the page, CSS styles in the page, remove existing HTML elements and attributes, add new HTML elements and attributes, react to all existing HTML events in the page and create new HTML events in the page.

# 9.- What is REACT JS?

A JavaScript library for building user interfaces made by Facebook. It is a component based library, that manage their own state, then compose them to make complex UIs.

React makes it painless to create interactive user interfaces. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

Declarative views make your code more predictable and easier to debug.

# 10.- List of basic Data Structures:

# Linked Lists "{}":

Is a linear data structure similar to an array. However, unlike arrays, elements (commonly called nodes) are not stored in a particular memory location or index. Rather each element is a separate object that contains a value and a pointer (link to the next object in that list). The first node name is HEAD, and the last node name is TAIL.

GOOD: For Add and Delete items

BAD: For Retrieve or Search items

# Arrays "[]":

JavaScript arrays are used to store multiple values in a single variable. JavaScript variables can be objects or others arrays.

- GOOD:
  For Retrieve items.
  You can use index number (arr[#]), because elements are stored in a particular memory location or index.

- BAD:
  For Add new items (sometimes)
  Arrays cannot be compared, transform to JSON to be able to compare the Arrays

# Hash Tab:

A hash table (also called a hash, hash map, unordered map or dictionary) is a data structure that pairs keys to values. Its a technique to convert a range of key values into a range of indexes of an array.

- GOD: For Add, Retrieve and Delete items

- BAD: Key collisions

# Stack + Queue:

In computer science, a stack is a linear data structure, that use constructors. We need to define methods that can add (push) and remove (pop) data from a stack.What happens if we want to remove the oldest data? We want to use a data structure named queue. Similar to a stack, a queue is a linear data structure. A stack stores data in sequential order and removes the most recently added data; a queue stores data in sequential order but removes the oldest added data.

Stack: Last in => First out (method: .push(1) .pop())
Queue: First in => First out (method: .enqueue(1) . dequeue())

- GOOD:
  efficient add + remove
  A stack to remove the most recently added data.
  Queue to remove the oldest added data.

- BAD:
  Limited uses cases

# Graphs & Trees:

A graph is a data structure where a node can have zero or more adjacent elements. The connection between two nodes is called edge. Nodes can also be called vertices.

Graphs have many real-world applications like: Electronic circuits, Driving directions, Social networks, Recommendations: Amazon/Netflix uses graphs to make suggestion, etc.

There are two primary ways of representing a graph:

Adjacency list: a -> { a b }, b -> { c }, c -> { d }, d -> { b c }

Adjacency Matrix:

a b c d e

a 1 1 - - -

b - - 1 - -

c - - - 1 -

d - 1 1 - -

A tree is a data structure where a node can have zero or more children. Each node contains a value. Like graphs, the connection between nodes is called edges. A tree is a type of graph, but not all graphs are trees.

# Binary Tress:

Binary search tree: node have only 0 or 2 children (but never 1), children on the left < node and children on the right > node. The HTML DOM uses a tree data structure to represents the hierarchy of elements.

- GOOD:
  They are used on databases to perform quick searches

- BAD:
  Can be easily unbalanced
