import React, { Component } from 'react';
import propTypes from './propTypes';
import { ErrorContainer, ErrorText } from './styledComponents';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error,
        };
    }

    componentDidCatch(error, info) {
        // eslint-disable-next-line no-console
        console.log(error, info);
    }

    render() {
        const { state: { hasError }, props: { children } } = this;
        if (hasError) {
            return (
                <ErrorContainer>
                    <ErrorText>Something went wrong!</ErrorText>
                </ErrorContainer>
            );
        }
        return children;
    }
}

ErrorBoundary.propTypes = propTypes;

export default ErrorBoundary;
