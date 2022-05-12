# **CSS INTERVIEW QUESTIONS**

## how to add comments on css?
_To comment in CSS, simply place your plain text inside /* */ marks. This tells the browser that they are notes and should not be rendered on the front end._

---


## Why do we use pseudo-class?

_A pseudo-class is used to define a special state of an element._

For example, it can be used to:
* Style an element when a user mouses over it
* Style visited and unvisited links differently
* Style an element when it gets focus

---

## How is specificity applied?
_According to MDN, Specificity is the means by which browsers decide which CSS property values are the most relevant to an element and, therefore, will be applied. Simply put, if two CSS selectors apply to the same element, the one with higher specificity is used._

---
## What method allows an element to be moved from its current position?
_Position Property allows an element to be moved from its current position_

_You can use two values top and left along with the position 
property to move an HTML element anywhere in the HTML document._

* Move Left - Use a negative value for left.
* Move Right - Use a positive value for left.
* Move Up - Use a negative value for top.
* Move Down - Use a positive value for top._

___
## what properties does flex model have?
_The flex CSS shorthand property is the combination of flex-grow, flex-shrink, and flex-basis property. It is used to set the length of flexible items._

        flex: flex-grow flex-shrink flex-basis|auto|initial|inherit;

* flex-grow Property: A number that specifies, how much items will grow relative to the rest of the flexible items.
* flex-shrink Property: A number that specifies, how much items will shrink relative to the rest of the flexible items.
* flex-basis Property: It sets the length of items. Legal values of flex-basis are: auto, inherit, or a number followed by %, em, px, or any other length unit.
* * flex-wrap Property: The CSS flex-wrap property is used to specify whether flex items are forced into a single line or wrapped onto multiple lines.
---
## What is the difference between flex and grids?
_Grid and flexbox. The basic difference between CSS Grid Layout and CSS Flexbox Layout is that flexbox was designed for layout in one dimension - either a row or a column. Grid was designed for two-dimensional layout - rows, and columns at the same time._

---
## Give an example where we have to use grids and where you have to use flexbox?
_CSS grid is for layout, Flexbox is for alignment_

_Flexbox is usefull when :_
* You have a small design to implement  
* You need to align elements

_Grid is usefull when :_
* You have a complex design to implement 
* You need to have a gap between block elements  
* You need to overlap elements
--- 

## Give an example where you cannot use flexbox, and you can only use grids?
_When you already have your layout design structure, it’s easier to build with CSS grid, and the two-dimensional layout system helps us a lot when we’re able to use rows and columns together, and position the elements the way we want_

---
## What are combinators? give examples of how you can use them
_CSS Combinators clarifies the relationship between two selectors, whereas the selectors in CSS are used to select the content for styling._

_There can be more than one simple selector in a CSS selector, and between these selectors, we can include a combinator. Combinators combine the selectors to provide them a useful relationship and the position of content in the document._

There are four types of combinators in CSS that are listed as follows:

* General sibling selector (~)
* Adjacent sibling selector (+)
* Child selector (>)
* Descendant selector (space)
---

## What does object-fit do?
_The object-fit CSS property sets how the content of a replaced element, such as an `<img>` or `<video>` , should be resized to fit its container._
_You can alter the alignment of the replaced element's content object within the element's box using the object-position property._

---
## What does rotate do?
_The rotate() function in CSS rotates an element. The parameter sets the angle for rotation. Values can be degrees, radians, etc._

---
## What rule can be used to define animations
_Each animation needs to be defined with the @keyframes rule_

---
## When working with attribute selectors, how can you select elements which contain a particular attribute value?
_The `[attribute|="value"]` selector is used to select elements with the specified attribute, whose value can be exactly the specified value, or the specified value followed by a hyphen (-)._

_Note: The value has to be a whole word, either alone, like class="top", or followed by a hyphen( - ), like class="top-text"._

---
## What does @media do?
_The @media rule is used in media queries to apply different styles for different media types/devices. Media queries can be used to check many things, such as: width and height of the viewport. width and height of the device._

---
## What can be used to override properties of an element
_Add another CSS rule with !important , and either give the selector a higher specificity (adding a tag, id or class to the selector), or add a CSS rule with the same selector at a later point than the existing one. This works because in a specificity tie, the last rule defined wins_

---
## How can you select every alternate elements in a list of elements using css?
    li:nth-child(even) {background: #CCC}  // elven child childs
    li:nth-child(odd) {background: #FFF}  //odd number childs

---
## What is the ranking of selectors with respect to Specificity

_There are four categories which define the specificity level of a selector:_

* Inline styles - Example: `<h1 style="color: pink;">`
* IDs - Example: #navbar
* Classes, pseudo-classes, attribute selectors - Example: .test, :hover, `[href]`
* Elements and pseudo-elements - Example: h1, :before

ex : 

        p	                     1	    1
        p.test	                 11 	1 + 10
        p#demo                   101	1 + 100
    <p style="color: pink;">	 1000	1000
        #demo	                 100	100
        .test	                 10 	10
        p.test1.test2	         21	    1 + 10 + 10
        #navbar p#demo           201	100 + 1 + 100
        *	                     0  	0 
        (the universal selector is ignored)

---

## how can we apply same styles to multiple selectors?
_To group CSS selectors in a style sheet, use commas to separate multiple grouped selectors in the style. In this example, the style affects the p and div elements:_

    div, p { color: #f00; }

---
## What are the differences between relative and absolute in CSS?
_position: relative places an element relative to its current position without changing the layout around it, whereas position: absolute places an element relative to its parent's position and changing the layout around it._

---