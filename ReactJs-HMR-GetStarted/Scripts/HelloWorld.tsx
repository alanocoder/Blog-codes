import * as React from 'react';

interface Props { }
interface IState {}

export class HelloWorld extends React.PureComponent<Props, IState> {
    render() {
        return <div>Hello world using Typescript & React!!</div>;
    }
}