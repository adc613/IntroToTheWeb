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

## Attributes

Attributes are key value pairs used to alter the styling or behavior of a component.
For example, the `<a>` tag defines text that should be used as a link, and the `href`
attribute defines where the link should point. So, the following HTML will make a
link that points to the Google homepage:

```html
<a href="https://www.google.com">link to google!</a>
```

Components can have many attribute names, for example:

```html
<button class="big" id="my-submit" click="hello()" type="submit">Submit</button>
```

This button has 4 attributes (class, id, click, and type) and each attirbute is
assigned to its own value. "class" is a common attribute, because it allows us to
assign our own styling to the tags, as we will see soon.

## Content

The content is everything in between the opening and closing brackets. For example
the content in `<p>I love pizza</p>`  is "I love pizza". Components can also be
other components. For example you could have 
`<p>I love <a href="https://www.google.com">google</a>.</p>`. Here the content of
the `p` is `I love <a href="https://www.google.com">google</a>.`, but the content
of the `<a>` is just "google".

# CSS

CSS stands for Cascading Style Sheets and its used to define the style of every
website. Everything from text size and position to color and animations is
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

There are 3 types of selectors: tag name, class name, and ID selectors. Class names 
start with a period, IDs start with a hash tag, and tag names start with a letter.
Here is an example of each selector, and what tags they will influence:

```css
h1 {
  // rules for the h1 tag. Any <h1> tag will have these rules applied.
}

.my-class {
 // rules for the class "my-class". Any tag with the class="my-class"
 // attribute will have these rules applied.
}

#my-id {
  // rules for the id "my-id". Any tag with the id="my-id" attribute
  // will have these rules applied.
}
```

*We're mentioning IDs here for the purpose of being complete, but IDs are very
similar to class names and for the purpose of this class we'll focus mostly on
classes.*


## Rules

Rules, like attributes, are key value pairs. The key is the name of the rule
we're setting and the value would be value we're assigning for that name.

Here's an example of a rule:

```css
color: red;
```

Each key/name refers to specific type of styling. In this example, `color`
will change the text font, and `red` will specify which color to change it
to, which in this case is, uh, red.

Rules go in between opening and closing curly brackets and are separated by a
semicolon. For example we could have a set of rules:


```css
h1 {
  font-size: 96px;
  font-family: Roboto;
}

.red {
  color: red;
  font-weight: 700;
}
```

This snippet of CSS code would give all `h1` components a font size of 96px and
a font of Roboto. Then every component with the CSS class "red" would be given
a color of "red" and a font-weight of 700.


[Next section: styling our site](/notes/week1/styling_our_site.md)
