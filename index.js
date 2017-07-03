import "bootstrap/dist/css/bootstrap.min"
import "font-awesome/css/font-awesome.min"
import './style';
import "./style/style.default"

import { Router } from 'preact-router';

import Header from './components/header';
import Home from './routes/home';
import Profile from './routes/profile';

export default () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
      <Profile path="/profile" />
      <Profile path="/profile/:user" />
		</Router>
	</div>
);
