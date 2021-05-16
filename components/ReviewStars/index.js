import Star from '../Svgs/icon-star';

const ReviewStars = ({rating}) => {
    const coverWidth = (rating / 5) * 100;
    return (
        <div className="star-rating">
            <div className="stars__unfilled">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
            </div>
            <div className="stars__filled" style={{width: `${coverWidth}%`}}>
                <div className="star__container">
                    <Star fill="#ffad0d" />
                </div>
                <div className="star__container" style={{left: '20px'}}>
                    <Star fill="#ffad0d" />
                </div>
                <div className="star__container" style={{left: '40px'}}>
                    <Star fill="#ffad0d" />
                </div>
                <div className="star__container" style={{left: '60px'}}>
                    <Star fill="#ffad0d" />
                </div>
                <div className="star__container" style={{left: '80px'}}>
                    <Star fill="#ffad0d" />
                </div>
            </div>
            <style jsx>{`
                .star-rating {
                    display: inline-block;
                    position: relative;
                    vertical-align: middle;
                    width: 100px;
                    height: 20px;
                    z-index: 0;
                }
                .star__container {
                    position: absolute;
                    top: 0;
                    display: inline-block;
                }
                .stars__unfilled,
                .stars__filled {
                    height: 20px;
                    position: absolute;
                    display: block;
                    left: 0px;
                    top: 0;
                    overflow: hidden;
                    z-index: 1;
                }
                .stars__filled {
                    display: flex;
                }
                .stars__unfilled {
                    z-index: 0;
                }
            `}</style>
        </div>
    );
};
export default ReviewStars;
