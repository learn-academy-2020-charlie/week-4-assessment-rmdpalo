# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What is an instance variable in Ruby? How is it different from other variables?

  Your answer: 
  An instance variable is a variable that exists only within the scope of the class it's contained in. Aside from that, another thing that separates instance variables from regular variables is the use of @ in its naming convention.


  Researched answer:
  Expanding on what I said above. instance variables belong only to whatever object it is stored in. So multiple objects with the same instance variables can have different values assigned to them. In Ruby, instance variables do not need declaration.



2. What is a block in Ruby?

  Your answer:
  I believe it's a close equivalent to higher order functions in javascript. Similar to map and filter.

  Researched answer:
  Blocks are functions without a name, aka anonymous functions. A block is the same as a method but is not attached to an object. Blocks can be created with the do/end keywords.


3. Ruby has an implicit return. What does that mean?

  Your answer:
  at the end of a function it automatically returns the result of the last line of code. You don't need to explicitly type 'return' in your code.

  Researched answer:
  To be more specific implicit return means that ruby returns the value of the last executed code IN the method. It will not move on to the rest of your code outside of the particular method unless called.



4. What is object-oriented programming? How is it different than functional programming?

  Your answer:
  OOP is programming based on the use of objects and classes, it is different that functional programming in which the biggest scope of your code are functions, here you work with objects and the different relationships they have with other objects and the methods and information stored within.

  Researched answer:
  Object Oriented Programming is a form of programming based on the use of data structures called "objects", which contain attributes (i.e. constructors and instance variables) and functions (methods). 
  
  In functional programming they believe that your data (things that would be considered attributes in objects) and your functions (methods in objects) must exist separately for clarity.

  On a side note, I realized that the structuring of functional programming makes more sense in my head and is how I think of other stuff as well. This might be why I struggle with concepts involving object oriented programming.


5. What is the difference between a class and an object?

  Your answer:
  A class is the IDEA of an object, whereas an object is the actual iteration of that idea. If I had a class fruit with pre determined information of what all fruits have, I don't really HAVE a fruit. Once I initialize and object of Apple based on the class Fruit, I actually have a tangible object to work with.

  Researched answer:
  Expanding on my own answer. A class is the blueprint that objects of that class must follow. A class only needs to be declared once and then you can declare however many objects of that class as you need.



## Looking Ahead: Terms for Next Week
- PostgreSQL
  PostgreSQL is a object-relational database system that uses the SQL language combined with features to store and scale data.

- API
  API stands for Application Programming Interface, in simple terms it allows different applications to communicate with each other. It is NOT a database.

- CRUD
  CRUD stands for 'Create, Read, Update, and Delete'
  These are the four basic functions that we want our API's to do. It reminds developers what we need to construct, full, usable models.

- Ruby on Rails
  This is a web-app framework that allows us to create database-backed web apps.

- ORM
  ORM stands for Object Relational Mapping.
  It is a technique used to connect rich objects of an app to tables. It allows the properties and relationships of objects to be stored and retrieved without writing SQL statements directly and with less overall database access code.

- Active Record
  Active Record gives us the ability to
  represent models and their data
  the relationships between these models
  represent inheritance hierarchies
  validate before pushing to databse
  PERFORM DATABASE OPERATIONS IN AN OBJECT ORIENTED FASHION *******
