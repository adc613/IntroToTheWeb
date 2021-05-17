# 404 Page not found

404 pages are all over the web. A 404 page is the page a user will go to when
they type the wrong link. There an essential part of any website.

## Create a new Not Found component

1. First create a new file called `NotFound.tsx` in the `src/` directory of your
   project.
1. Inside Landing create a new `<NotFound>` component. *If you don't remember how
   to create a component lake a look at the [components lesson](/notes/week3/componets.md)*
1. Import the Landing component to `App.tsx` by adding:
   ```tsx
   import {NotFound} from './NotFound';
   ```
1. Add a 404 Route to your app with the URL `'*'`
1. Add the `exact` attribute to your landing route
1. Make your Not Found page whatever your want. Get creative! [404 examples](https://www.creativebloq.com/web-design/best-404-pages-812505)




[Next Exercise: Eula](/notes/week4/eula.md)
