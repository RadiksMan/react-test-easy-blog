import React from 'react';

import { Route, BrowserRouter as Router,Switch} from 'react-router-dom';

import App from './components/App';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

const Routes = () => (
    <Router>
        <Switch>
            {/*<Route exact path="/" component={App} />*/}
            <Route exact path="/" component={PostsIndex}/>
            <Route path="/posts/new" component={PostsNew}/>

            <Route component={NoMatch}/>
       </Switch>
    </Router>
);

const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

export default Routes;