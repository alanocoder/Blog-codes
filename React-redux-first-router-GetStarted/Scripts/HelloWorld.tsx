import * as React from 'react';
import { connect } from 'react-redux';
import { retrieveData } from './async-thunks';
import { IHelloWorldData } from './redux-actions';

interface Props_redux extends IHelloWorldData {
    dispatch: <T>(action: any) => T
}
interface IState { }

class Comp extends React.Component<Props_redux, IState> {
    componentDidMount() {
        //if (!this.props.status) this.props.dispatch(retrieveData()); // Moved to redux-first-router's thunk
    }

    render() {
        const { status, count } = this.props;

        var content = null;
        if (status) {
            content = (
                <div>
                    <div>Data obtained from server:</div>
                    <div>Status: {status}</div>
                    <div>Count: {count}</div>
                </div>
                );
        }
        return <div>Hello world!{content}</div>;
    }
}
export var HelloWorld: React.ComponentClass<{}> = connect(state => { return { ...state['helloWorld'] }; })(Comp);