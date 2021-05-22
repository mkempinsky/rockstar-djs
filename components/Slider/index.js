import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';

class Slider extends Component {
    state = {
        currentIndex: 0,
        hasViewedImage: false,
    };

    swapSlides = () => {
        if (this.props.interval === false) return;
        this.sliderInterval = setInterval(() => {
            this.setState((prevState) => ({
                currentIndex:
                    prevState.currentIndex === this.props.slides.length - 1
                        ? 0
                        : prevState.currentIndex + 1,
                hasViewedImage: true,
            }));
        }, this.props.interval || 10000);
    };

    nextSlide = () => {
        const currentIndex = this.getCurrentIndex();
        this.setState({
            currentIndex:
                currentIndex === this.props.slides.length - 1 ? 0 : currentIndex + 1,
            hasViewedImage: true,
        });
        clearInterval(this.sliderInterval);
    };

    previousSlide = () => {
        const currentIndex = this.getCurrentIndex();
        this.setState({
            currentIndex:
                currentIndex === 0 ? this.props.slides.length - 1 : currentIndex - 1,
            hasViewedImage: true,
        });
        clearInterval(this.sliderInterval);
    };

    handleKeyDown = (e) => {
        if (e.key === 'ArrowRight') {
            this.nextSlide();
        } else if (e.key === 'ArrowLeft') {
            this.previousSlide();
        }
    };

    componentDidMount() {
        this.swapSlides();

        if (this.props.enableKeyboardNavigation) {
            document.addEventListener('keydown', this.handleKeyDown);
        }
    }

    componentWillUnmount() {
        if (this.sliderInterval) {
            clearInterval(this.sliderInterval);
        }

        if (this.props.enableKeyboardNavigation) {
            document.removeEventListener('keydown', this.handleKeyDown);
        }
    }

    handleDotClick = (index) => {
        this.setState({
            currentIndex: index,
            hasViewedImage: true,
        });
        clearInterval(this.sliderInterval);
    };

    getCurrentIndex = () => {
        const useIndexFromProps =
            this.state.currentIndex === 0 &&
            this.props.currentIndex &&
            !this.state.hasViewedImage;
        const currentIndex = useIndexFromProps
            ? this.props.currentIndex
            : this.state.currentIndex;

        return currentIndex;
    };

    render() {
        const {slides = {}} = this.props;
        const currentIndex = this.getCurrentIndex();

        const SlideToRender = slides[currentIndex];

        if (!SlideToRender) return null;

        return (
            <div className="slider" style={this.props.style}>
                {this.props.arrows !== false && (
                    <>
                        <a className="right-arrow" onClick={this.nextSlide}>
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="chevron-right"
                                role="img"
                                width="10"
                                height="auto"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512">
                                <path
                                    fill="#fff"
                                    d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                            </svg>
                        </a>
                        <a className="left-arrow" onClick={this.previousSlide}>
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="chevron-left"
                                role="img"
                                width="10"
                                height="auto"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512">
                                <path
                                    fill="#fff"
                                    d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
                            </svg>
                        </a>
                    </>
                )}
                {slides.map((slide, i) => {
                    return (
                        <CSSTransition
                            key={i}
                            classNames={'slide'}
                            timeout={0}
                            in={i === currentIndex}
                            unmountOnExit>
                            <div className="slide-container">
                                <SlideToRender />
                            </div>
                        </CSSTransition>
                    );
                })}
                <div className="dots">
                    {slides.map((item, index) => {
                        return (
                            <div
                                className={
                                    currentIndex === index ? 'dot' : 'dot dot--inactive'
                                }
                                onClick={() => this.handleDotClick(index)}
                                key={index}
                            />
                        );
                    })}
                </div>
                <style jsx>{`
                    .slider {
                        position: relative;
                        position: relative;
                        overflow: hidden;
                        background-color: transparent;
                        width: 100%;
                        margin: 0 auto;
                    }
                    .slide-container {
                        position: relative;
                        overflow: hidden;
                    }

                    .slide-enter {
                        opacity: 0;
                    }

                    .slide-enter-done {
                        opacity: 1;
                        transition: all 400ms ease;
                    }

                    .slide-exit {
                        display: none;
                    }
                    .dots {
                        bottom: 0;
                        width: 100%;
                        padding: 30px 0;
                        background: transparent;
                        text-align: center;
                    }
                    .dot {
                        background-color: var(--gray-400);
                        display: inline-block;
                        border-radius: 50%;
                        height: 12px;
                        width: 12px;
                        cursor: pointer;
                        margin-right: 5px;
                    }
                    .dot--inactive {
                        opacity: 0.2;
                    }
                    .dot:last-child {
                        margin-right: 0;
                    }
                    .left-arrow i,
                    .right-arrow i {
                        font-size: 26px;
                        color: #fff;
                    }

                    .left-arrow,
                    .right-arrow {
                        display: inline-block;
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                        z-index: 2;
                        cursor: pointer;
                    }

                    .left-arrow {
                        left: 10px;
                    }
                    .right-arrow {
                        right: 10px;
                    }
                `}</style>
            </div>
        );
    }
}
export default Slider;
