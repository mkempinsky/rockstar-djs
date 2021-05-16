import React, {Component} from 'react';
import IconChevron from '../Svgs/icon-chevron';

class ScrollToTop extends Component {
    constructor(props) {
        super(props);

        // Event listener gotcha with .bind
        // https://gist.github.com/Restuta/e400a555ba24daa396cc
        this.updateScrollTop = this.updateScrollTop.bind(this);
    }
    state = {
        showButton: false,
    };

    componentDidMount = () => {
        window.addEventListener('scroll', this.updateScrollTop);
    };

    updateScrollTop() {
        this.setState({
            showButton: window.pageYOffset > 50,
        });
    }

    handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.updateScrollTop);
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div
                        className={
                            this.state.showButton ? 'button--visible' : 'button--hidden'
                        }>
                        <button
                            title="Back to top"
                            className="scroll"
                            onClick={this.handleScrollToTop}>
                            <IconChevron stroke="#fff" width="20" height="20" />
                        </button>
                    </div>
                </div>

                <style jsx>
                    {`
                        .button--hidden {
                            opacity: 0;
                            transition: all 200ms ease;
                        }

                        .button--visible {
                            opacity: 1;
                            transition: all 200ms ease;
                        }
                        div {
                            display: flex;
                            flex-direction: column;
                            position: fixed;
                            z-index: 12;
                            bottom: 90px;
                            right: 10px;
                        }

                        button {
                            width: 40px;
                            height: 40px;
                            margin: 0 auto;
                            border: none;
                            background: var(--orange);
                            border-radius: 100%;
                            padding: 0;
                            transform: rotate(-90deg);
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                        button:hover {
                            cursor: pointer;
                        }
                        :focus {
                            outline: none;
                        }
                        ::-moz-focus-inner {
                            border: 0;
                        }

                        button.scroll--mobile {
                            margin: 0 auto;
                            border: none;
                            border-radius: 100%;
                            padding: 0;
                        }
                    `}
                </style>
            </React.Fragment>
        );
    }
}

export default ScrollToTop;
