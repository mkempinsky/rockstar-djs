import OutsideClick from '../OutsideClick';
import React from 'react';

class Modal extends React.Component {
    handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            this.props.onClickOutside(e);
        }
    };
    componentDidMount() {
        if (typeof document === 'undefined') return;

        document.addEventListener('keydown', this.handleKeyDown, false);
    }
    componentWillUnmount() {
        if (typeof document === 'undefined') return;

        document.removeEventListener('keydown', this.handleKeyDown, false);
    }
    render() {
        return (
            <div>
                <div className="inner">
                    <OutsideClick onClick={this.props.onClickOutside}>
                        {this.props.children}
                    </OutsideClick>
                </div>
                <style jsx>{`
                    div {
                        background-color: rgba(0, 0, 0, 0.4);
                        position: fixed;
                        top: 0;
                        left: 0;
                        bottom: 0;
                        width: 100%;
                        height: 100%;
                        z-index: 100;
                    }

                    .inner {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                `}</style>
            </div>
        );
    }
}

export default Modal;
