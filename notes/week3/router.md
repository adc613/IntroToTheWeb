# React Router

[React Router](https://reactrouter.com/web/guides/quick-start) is used to do
mange the URL structure of your website. So when you want to go `/mypage` React
Router will decide which component to render.

## Initializing react router

First run

```sh
npm install react-router-dom
```

```sh
npm i --save-dev @types/react-router-dom
```


## Declaring first routes

Each route is declared using the `<Route>` component.

```tsx
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/post">
            <Post author="Adam" content="My first post"></Post>
          </Route>
          <Route path="/">
            <MyFirstComponent></MyFirstComponent>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
```

What happens here is that when the URL matches a path the contents of the given
component are rendered.


## Adding links

To add a link you can no longer use the `<a>` component. You need to use `<Link>`
from the react-router-dom package.

Example:

```tsx
class MyFirstComponent extends React.Component {
  render() {
    return (
      <div>
        <p>My First Component</p>
        <Link to="/post"> Go to post </Link>
      </div>
    )
  }
}
```
