import * as React from 'react';

interface Props {
    loader: () => Promise<{ default: any }>;
}

export class AsyncComponent extends React.PureComponent<Props, { Component: any }> {
    state = { Component: null };

    componentDidMount() {
        this.props.loader()
            .then(module => {
                this.setState({ Component: module.default });
            });
    }
    render() {
        const { Component } = this.state;
        return Component && <Component />;
    }
}