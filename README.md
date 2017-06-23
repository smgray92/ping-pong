# _Ping Pong_
#### _A web application that lists out numbers and systematically replaces certain numbers with "ping pong"._
### _By **Sharon Gray**_
## Description
_This webpage is an application or game that allows the user to choose a number greater than or equal to 1, and once the "Submit" button is clicked, a range of numbers from 1 to the chosen number is shown in a form of a list. Some numbers may not show up on the list, because there are exceptions. Any number in the list divisible by 3 will be replaced with the word "ping". Any number in the list divisible by 5 will be replaced with the word "pong". Any number divisible by both 3 and 5 will be replaced with the word "pingpong". The application will only show results if positive integers are submitted, and if characters, decimal numbers, fractions, or negative numbers are typed in, then nothing will show below the submit button. This webpage uses HTML, CSS, Bootstrap, Javascript, and jQuery to form this webpage into an interactive site._
## Specification
* _It can count up to the provided number._
  * _Example Input: 2_
  * _Example Output: [1,2]_
* _It can only give feedback to positive integers (no decimal numbers, negative numbers, fractions, 0, word etc.)_
  * _Example Input: -5_
  * _Example Output: []_
* _It will replace any number divisible by 3 in the list with the word "ping"_
  * _Example Input: 3_
  * _Example Output: [1,2,ping]_
* _It will replace any number divisible by 5 in the list with the word "pong"_
  * _Example Input: 5_
  * _Example Output: [1,2,ping,4,pong]_
* _It will replace any number divisible by 3 and 5 in the list with the word "pingpong"_
  * _Example Input: 15_
  * _Example Output: [1,2,ping,4,pong,ping,7,8,ping,pong,11,ping,13,14,pingpong]_
## Setup
* _Clone this repository on to the Desktop_
* _Find and open the "ping-pong" folder_
* _Open the index.html file within the repository and begin_
## Link to site on GitHub pages
https://github.com/smgray92/ping-pong/tree/gh-pages
## Legal
Copyright (c) 2017 Sharon Gray

This webpage is licensed under the MIT license.
