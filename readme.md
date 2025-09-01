
### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Ans:
getElementById = It finds one element by its ID, and it always gives back only one element.
getElementsByClassName = It finds all elements that have the same class name.
querySelector = Finds all the elements that match a CSS selector.

3. How do you **create and insert a new element into the DOM**?

Ans: First, I use documents.creatElement("tagName") to create the element.
And then, add text, attributes, or classes to it.


5. What is **Event Bubbling** and how does it work?

Ans: When we click on an element like a button, the event doesn't stop there. It "bubbles up" from the clicked element, then to the parent,
and so on, until it reaches the top (document).


7. What is **Event Delegation** in JavaScript? Why is it useful?

Ans: It is a technique where we add one event listener to a parent element instead of adding it to many child elements.
And it's useful for Performance, Dynamic elements and Cleaner code


9. What is the difference between **preventDefault() and stopPropagation()** methods?

Ans:
preventDefault() -> Stops default browser behavior.
stopPropagation() -> Stops the event from moving upward (bubbling)



