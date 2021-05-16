import Container from '../Container';
import ReviewStars from '../ReviewStars';
import {useRef} from 'react';
import useOnScreen from '../../lib/hooks/useOnScreen';

const reviewLink =
    'https://www.weddingwire.com/reviews/rockstar-djs-fenton/55f1f23be1573949.html';

const SectionReviews = (props) => {
    const ref = useRef();
    const onScreen = useOnScreen(ref, '');

    const animatedClass = onScreen
        ? 'animate__animated animate__fadeInDown animate__delay-1s'
        : '';
    return (
        <section id="section-reviews" ref={ref}>
            <div className="parallax">
                <Container>
                    <h2 className={animatedClass}>What Our Happy Couples Say...</h2>
                    <div style={{margin: '0 auto', textAlign: 'center'}}>
                        <img src="/icon_spin.png" />
                    </div>
                    <div className="reviews">
                        <div className="reviews__header">
                            <div>Read our reviews from past clients</div>
                        </div>
                        <div className="review__card">
                            <div className="review__card--rating">
                                {' '}
                                <ReviewStars rating={5} />
                                <span>5.0/5.0</span>
                            </div>
                            Jeremy is an excellent DJ , I had attended two weddings that
                            he had dj’ed so I knew that I wanted him to do mine. He is an
                            excellent...{' '}
                            <a href={reviewLink} target="_blank" title="Read Full Review">
                                read full review
                            </a>
                        </div>
                        <div className="review__card">
                            <div className="review__card--rating">
                                {' '}
                                <ReviewStars rating={5} />
                                <span>5.0/5.0</span>
                            </div>
                            I highly recommend Rockstar! Quain is very responsive and
                            truly cares about his customers. Quain recently DJ’d my
                            cousin’s wedding and...
                            <a href={reviewLink} target="_blank" title="Read Full Review">
                                read full review
                            </a>
                        </div>
                        <div className="review__card">
                            <div className="review__card--rating">
                                {' '}
                                <ReviewStars rating={5} />
                                <span>5.0/5.0</span>
                            </div>
                            Our experience with DJ Jeff with Rockstar DJs was amazing.
                            From initial booking, to our phone calls throughout the months
                            leading up to...
                            <a href={reviewLink} target="_blank" title="Read Full Review">
                                read full review
                            </a>
                        </div>
                        <div className="reviews__footer">
                            <div>
                                Read all{' '}
                                <a
                                    href={reviewLink}
                                    target="_blank"
                                    title="Read All Reviews">
                                    180 Reviews
                                </a>{' '}
                                at
                            </div>
                            <div>
                                <img src="/wedding-wire_logo.svg" />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <style jsx>
                {`
                    .parallax {
                        background-image: url('/mixer_board_BKG.jpeg');
                        min-height: 500px;
                        background-attachment: fixed;
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: cover;
                    }
                    h2 {
                        color: #fff;
                        text-align: center;
                        margin-bottom: 15px;
                    }
                    .reviews {
                        font-family: var(--font-secondary);
                        background: var(--gray-100);
                        max-width: 600px;
                        margin: 30px auto;
                        border-radius: 5px;
                        height: fit-content;
                        position: relative;
                        display: block;
                        border: 1px solid #fff;
                        box-shadow: 0px 0px 10px rgba(000, 000, 000, 0.8);
                    }
                    .reviews__header {
                        border-bottom: 1px solid var(--gray-200);
                        padding: 15px;
                        background: #fff;
                        border-radius: 5px 5px 0 0;
                    }
                    .review__card {
                        border: 1px solid var(--gray-200);
                        margin: 15px;
                        padding: 15px;
                        font-size: 14px;
                        border-radius: 5px;
                        background: #fff;
                        display: block;
                    }
                    .review__card--rating {
                        display: flex;
                        align-items: center;
                        margin-bottom: 8px;
                    }
                    .review__card--rating > span {
                        margin-left: 5px;
                    }
                    .reviews__footer {
                        text-align: center;
                        font-weight: bold;
                    }
                    .reviews__footer > div {
                        margin-bottom: 10px;
                    }
                    a {
                        color: var(--interactive-100);
                    }
                `}
            </style>
        </section>
    );
};
export default SectionReviews;
