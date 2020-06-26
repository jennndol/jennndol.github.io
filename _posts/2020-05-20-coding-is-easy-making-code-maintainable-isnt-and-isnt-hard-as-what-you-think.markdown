---
layout: post
title:  "Coding is easy, making code maintainable isn’t, and isn’t hard as what you think"
date:   2020-05-20 14:00:54 +0700
categories: maintain coding
---
![Clean Code](https://www.onextrapixel.com/wp-content/uploads/2011/01/img-cleancode-03.jpg)

Everyone can code, but only few of them can create quality code that someday can be maintainable by other people. This writing is based on my experience handling project that created by internal team in my company and vendor.
There are things that have to be included when you develop your project:

## Always create test
Testing can be useful as documentation of the project we create, also to make sure that our project is still working properly and to avoid “now your code is working but tomorrow isn’t”. TDD or development based on test we create before is good example if you implement this kind of development method keep up the good work, but it’s still okay if you write your own code first, then create the test of the code after it. Keep in mind: always create the test.

## Use logger
Logs are a simple way of persisting data about your application so you can view this data for analysis later. A great use case for logging would be if, for example, you have a bug in your system and you want to understand the steps that led up to its occurrence.
If you’ve written Javascript before, you’ll be used to console.log, the built-in method of logging output. But, it’s just suitable to be used in your development phase of your project. When the project is released in production you can use logger library such as winston, pino, etc.

## Review code
The coding you write works as expected? It’s okay code review is to make sure that your code is readable, fix the wrong logic if it does exist, and to make your coding style is similar with your team.