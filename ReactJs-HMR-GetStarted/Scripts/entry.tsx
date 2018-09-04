import * as React from 'react';
import { render } from 'react-dom';
import { HelloWorld } from './HelloWorld';

import { hot } from 'react-hot-loader';

var HotHelloWorld = hot(module)(HelloWorld);
var App = () => <HotHelloWorld />;

render(<App />, document.querySelector('#content'));