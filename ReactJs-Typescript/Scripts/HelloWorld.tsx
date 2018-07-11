import * as React from 'react';

interface Props { }
interface IState {}

export class HelloWorld extends React.Component<Props, IState> {
    render() {
        return <div>Hello world using Typescript & React!</div>;
    }
}