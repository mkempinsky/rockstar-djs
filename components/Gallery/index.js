const Gallery = ({images = []}) => {
    return (
        <div className="gallery">
            <div className="gallery__container">
                {Array.isArray(images) &&
                    images.map((image) => {
                        return (
                            <div
                                key={image}
                                className="gallery__image"
                                style={{backgroundImage: `url(${image})`}}>
                                <div className="gallery__image--overlay" />
                            </div>
                        );
                    })}
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
                        grid-template-columns: 1fr 1fr 1fr;
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
                `}
            </style>
        </div>
    );
};
export default Gallery;
