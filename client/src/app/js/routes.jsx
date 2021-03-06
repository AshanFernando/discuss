import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex  from './containers/posts/PostsContainer';
import PostDetail from './containers/posts/PostDetailContainer';
import PostNew from './containers/posts/PostNewContainer';
import SignUp from './components/users/sign-up';
import SignIn from './components/users/sign-in';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
    <Route path="posts/new" component={PostNew} />
    <Route path="posts/:id/show" component={PostDetail} />
    <Route path="sign-up" component={SignUp} />
    <Route path="sign-in" component={SignIn} />
  </Route>
);
