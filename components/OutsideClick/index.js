import React, {Component} from 'react';

export default class OutsideAlerter extends Component {
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    /**
     * Set the wrapper ref
     */
    setWrapperRef = (node) => {
        this.wrapperRef = node;
    };

    /**
     * Alert if clicked on outside of element
     */
    handleClickOutside = (event) => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            if (this.props.onMouseDown) {
                this.props.onMouseDown(event);
            } else if (this.props.onMouseUp) {
                this.props.onMouseUp(event);
            } else if (this.props.onClick) {
                this.props.onClick(event);
            }
        }
    };

    render() {
        return <div ref={this.setWrapperRef}>{this.props.children}</div>;
    }
}
