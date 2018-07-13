import * as React from 'react';
import { connect } from 'react-redux';
import { retrieveData } from './async-thunks';
import { IHelloWorldData } from './redux-actions';

interface Props_redux extends IHelloWorldData {
    dispatch: <T>(action: any) => T
}
interface IState { }

class Comp extends React.Component<Props_redux, IState> {
    componentWillMount() {
        this.props.dispatch(retrieveData());
    }

    render() {
        const { status, count } = this.props;

        var content = count ? <div>Data obtained with status = {status} and Count = {count}</div> : null;
        return <div>Hello world!{content}</div>;
    }
}
export var HelloWorld: React.ComponentClass<{}> = connect(state => { return { ...state }; })(Comp);