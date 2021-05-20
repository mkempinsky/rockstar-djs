import {BREAKPOINT} from '../../lib/styles';
import Container from '../Container';
import SectionHeader from '../SectionHeader';
import useOnScreen from '../../lib/hooks/useOnScreen';
import {useRef} from 'react';

const SectionPackages = (props) => {
    const ref = useRef();
    const onScreen = useOnScreen(ref, '');

    const animatedClass = onScreen
        ? 'animate__animated animate__fadeIn animate__delay-1s'
        : '';

    return (
        <section id="section-packages">
            <Container>
                <SectionHeader title="Packages" />
                <div ref={ref} className={`card-container ${animatedClass}`}>
                    <div className="card">
                        <img src="/standard_package.gif" />
                        <div className="card__title">
                            4 Hours of the Most Professional and Polished Hosts/DJs in our
                            Area!
                        </div>
                        <ul>
                            <li>Our Unlimited Digital Music Library</li>
                            <li>Easy-to-use Online Planning Process</li>
                            <li>Professional Sound and Lighting Display</li>
                            <li>Includes Wireless Microphone</li>
                        </ul>
                    </div>
                    <div className="card">
                        <img src="/premium_package.gif" />
                        <div className="card__title">
                            Everything Listed in our <br />
                            Standard Package, plus...
                        </div>
                        <ul>
                            <li>
                                <div>Select Level DJ</div>
                                <div className="card__note">
                                    One of our absolute top-rated
                                </div>
                            </li>
                            <li>
                                <div>Room Lighting or *Ceremony Music</div>
                                <div className="card__note">
                                    * same location as reception
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="card">
                        <img src="/rockstar_package.gif" />
                        <div className="card__title">Make Your Celebration Amazing!</div>
                        <ul>
                            <li>
                                <strong>Guaranteed choice of DJ</strong>
                            </li>
                            <li>
                                <div>
                                    Choice of Photobooth or Room Lighting and Ceremony
                                    Music
                                </div>
                                <div className="card__note">
                                    * same location as reception
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
            <style jsx>
                {`
                    #section-packages {
                        background: var(--gray-100);
                    }
                    .card-container {
                        display: block;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .card-container {
                            display: grid;
                            grid-template-columns: 1fr 1fr 1fr;
                            grid-gap: 30px;
                        }
                    }
                    .card {
                        width: 100%;
                        background: #fff;
                        border-radius: 5px;
                        border: 1px solid var(--gray-200);
                        padding: 15px;
                        margin-bottom: 30px;
                        box-shadow: 0px 2px 16px rgba(000, 000, 000, 0.1);
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .card {
                            margin-bottom: 0px;
                        }
                    }
                    .card img {
                        margin: 0 auto;
                        display: flex;
                        align-items: center;
                    }
                    .card__title {
                        font-family: var(--font-primary);
                        margin-bottom: 15px;
                        font-weight: bold;
                        text-align: center;
                        line-height: 28px;
                        height: 56px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .card ul {
                        margin: 0;
                        list-style: none;
                    }
                    .card li:first-child {
                        border-radius: 4px 4px 0 0;
                    }
                    .card li:last-child {
                        border-radius: 0 0 4px 4px;
                    }
                    .card li {
                        font-family: var(--font-secondary);
                        padding: 3px 15px;
                        text-align: center;
                        border: 1px solid var(--gray-200);
                    }
                    .card li:nth-child(odd) {
                        background: var(--gray-200);
                    }
                    .card__note {
                        font-size: 12px;
                    }
                `}
            </style>
        </section>
    );
};
export default SectionPackages;
