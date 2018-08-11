import * as React from 'react';
import { HelloWorld } from './HelloWorld';
import { connect } from 'react-redux';
import Link from 'redux-first-router-link';
import { retrieveData } from './async-thunks';

// Mapping of route action type to component
const Components = {
    'HOME': <HelloWorld />,
    'ABOUT': <div>About page</div>,
    'CONTACT': <div>Contact page</div>
};

// This component shows the correct page based on the route action type defined at state.location.type
class Switcher extends React.PureComponent<any, any> {
    render() {
        return Components[this.props.page] || <div>Something wrong</div>;
    }
}
var Page = connect((state: any) => ({ page: state.location.type }))(Switcher);


export const App = () => (
    <div>
        <div><Link to={{ type: 'HOME' }}>Home</Link> <Link to={{ type: 'ABOUT' }}>About</Link> <Link to={{ type: 'CONTACT' }}>Contact</Link></div>
        <hr />
        <Page />
    </div>
);

// route action types map to URLs
export var routes = {
    HOME: {
        path: '/',
        thunk: retrieveData() // optional thunk
    },
    ABOUT: '/support/About',
    CONTACT: '/support/Contact'
};