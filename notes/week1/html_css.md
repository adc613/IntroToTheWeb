# HTML 

HTML stands for Hyper Text Markup Language and it defines the structure of
every website.

## Components/elements

Every HTML file is made up of sets of components. Components look like:

```html
<h1 class="red bold">Hello World</h1>
```

A component are defined by sets of opening and closing brackets that contain
the component's tag name, content, and attributes.

## Tag name

In the case of `<h1>Hello world</h1>` the tag name is `h1`. The tag name helps
decide what an element looks like and how it behaves. The tag name is used
in the opening bracket `<h1>` and closing bracket `</h1>`.

## Content

The content is everything in between the opening and closing brackets. For example
the content in `<p>I love pizza</p>`  is "I love pizza". Components can also be
other components. For example you could have `<div><p> I Love pizza </p></div>`.
Here the content of the `div` is `<p> I love pizza </p>`

## Attributes

Attributes are key value pairs used to alter the styling or behavior of a component.
A comment attribute is the class attribute. Example: `<h1 class="red">Red text</h1>`.
In this case we gave our `h1` component a class name of "red". The attributes name
in this case is "class" and the value is "red". Components can have many attribute
names. Example:

```html
<button class="big" id="my-submit" click="hello()" type="submit">Submit</button>
```

This button has 4 attributes (class, id, click, and type) and each attirbute is
assigned to its own value.

# CSS

CSS stands for Cascading Style Sheets and its used to define the style of every
website, everything form text size and position to color and animations is
defined in CSS.

## Selectors

CSS files are made up of groups of selectors and rules. The selectors come before
the opening curly bracket `{` and the rules are inside the opening `{` bracket.
For example:

```css
h1 {
  // ...
}
```

The selector here is `h1`. There are 3 types of selectors tag name, class name,
and ID selectors. Class names start with a period. IDs start with a hash tag
and tag names start with a letter. So if we have

```css
h1 {
  // ...
}

.my-class {
 // ...
}

#my-id {
  // ...
}
```

We'd have 3 sets a rules. One set of rules for all components with an `h1` tag
name, one set of rules for components with a `my-class` class name, and one
set of rules for a component with a `my-id` id.

*We're mentioning IDs here for the purpose of being complete, but IDs are very
similar to class names and for the purpose of this class we'll focus mostly on
classes.*


## Rules

Rules are key value pairs. So the key would be the name of the rule
we're setting and the value would be value we're assigning for that name. Each
key/name refers to specific type of styling. For example the "color" key/name
will assign a text color. So if we want our text to be red we would set
`color: red`.

Rules go in between opening and closing curly brackets and are separated by a
semicolon. For example we could have a set of rules:


```css
h1 {
  font-size: 96px;
  font-family: Roboto;
}

.red {
  color:red;
  font-weight: 700;
}
```

This snippet of CSS code would give all `h1` components a font size of 96px and
a font of Roboto. Then everyth componetn wit hthe CSS class "red" would be given
a color of "red" and a font-weight of 700.


[Next section: styling our site](/notes/week1/html_css.md)
