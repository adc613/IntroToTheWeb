# Landing page

Now that we know how to create our own React Components we have the skills we 
need to start our website. Every website starts with a landing page. So lets
create our landing page.


## Create a new Landing component

1. First create a new file called `Landing.tsx` in the `src/` directory of your
   project.
1. Inside Landing create a new `<Landing>` component. *If you don't remember how
   to create a component lake a look at the [components lesson](/notes/week3/componets.md)*
1. Inside Landing create your own intro to the Website. It should include a
   title, a call to action, and a link to `/eula`.
1. Import the Landing component to `App.tsx` by adding:
   ```tsx
   import {Landing} from './Landing';
   ```
1. Add a landing Route to your app with the URL `'/'`



[Next Exercise: Eula](/notes/week4/eula.md)
