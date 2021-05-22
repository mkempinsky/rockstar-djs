import {useState} from 'react';
import {BREAKPOINT} from '../../lib/styles';
import Modal from '../Modal';
import Slider from '../Slider';

const Gallery = ({images = [], columns = 3}) => {
    const [showModal, handleShowModal] = useState(false);
    const [imageIndex, updateImageIndex] = useState(0);

    const handleImageModal = (index) => {
        if (typeof index === 'undefined') {
            handleShowModal(false);
            return;
        }
        handleShowModal(true);
        updateImageIndex(index);
        return;
    };
    return (
        <div className="gallery">
            <div className="gallery--desktop">
                <div className="gallery__container">
                    {Array.isArray(images) &&
                        images.map((image, index) => {
                            return (
                                <div
                                    key={image}
                                    onClick={() => handleImageModal(index)}
                                    className="gallery__image"
                                    style={{backgroundImage: `url(${image})`}}>
                                    <div className="gallery__image--overlay" />
                                </div>
                            );
                        })}
                </div>
                {showModal && (
                    <Modal onClickOutside={() => handleShowModal(false)}>
                        <div className="slider-container">
                            <Slider
                                enableKeyboardNavigation
                                currentIndex={imageIndex}
                                slides={images.map((image) => {
                                    return (props) => (
                                        <div
                                            key={image}
                                            style={{backgroundImage: `url(${image})`}}
                                            className="slider-img"
                                        />
                                    );
                                })}
                            />
                        </div>
                    </Modal>
                )}
            </div>
            <div className="gallery--mobile">
                <Slider
                    enableKeyboardNavigation
                    currentIndex={imageIndex}
                    slides={images.map((image) => {
                        return (props) => (
                            <div
                                key={image}
                                style={{backgroundImage: `url(${image})`}}
                                className="slider-img"
                            />
                        );
                    })}
                />
            </div>
            <style jsx>
                {`
                    .gallery {
                        display: block;
                        position: relative;
                        min-height: fit-content;
                    }
                    .gallery__container {
                        display: grid;
                        grid-gap: 30px;
                        grid-template-columns: repeat(${columns}, 1fr);
                    }
                    .gallery__image {
                        width: 100%;
                        height: 280px;
                        position: relative;
                        background-size: cover;
                        background-position: center center;
                        background-repeat: no-repeat;
                        border-radius: 5px;
                    }
                    .gallery__image:hover {
                        cursor: pointer;
                        transition: scale(0.02);
                    }
                    .gallery__image--overlay {
                        position: absolute;
                        opacity: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(247, 148, 30, 0.6);
                        border-radius: 5px;
                        transition: all 0.25s;
                    }
                    .gallery__image:hover .gallery__image--overlay {
                        opacity: 1;
                        transition: all 0.25s;
                    }
                    .slider-container {
                        background: #fff;
                        border-radius: 5px;
                    }
                    .slider-img {
                        width: 500px;
                        height: 500px;
                        border-radius: 5px 5px 0 0;

                        background-size: cover;
                        background-position: center center;
                    }
                    .gallery--desktop {
                        display: none;
                    }
                    .gallery--mobile {
                        display: block;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .gallery--desktop {
                            display: block;
                        }
                        .gallery--mobile {
                            display: none;
                        }
                    }
                `}
            </style>
        </div>
    );
};
export default Gallery;
