import * as React from 'react';
import { Fragment, Link } from 'redux-little-router';
import { HelloWorld } from './HelloWorld';

export const routes = {
    '/': {},
    '/support/About': {},
    '/support/Contact': {}
}

export const App = () => (
    <div>
        <div><Link href='/'>Home</Link> <Link href='/support/About'>About</Link> <Link href='/support/Contact'>Contact</Link></div>
        <hr />
        <Fragment forRoute='/' withConditions={location => location.pathname === '/'}><HelloWorld /></Fragment>
        <Fragment forRoute='/support/About'><div>About page</div></Fragment>
        <Fragment forRoute='/support/Contact'><div>Contact page</div></Fragment>
    </div>
);
