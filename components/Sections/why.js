import Container from '../Container';
import SectionHeader from '../SectionHeader';
import {useRef} from 'react';
import useOnScreen from '../../lib/hooks/useOnScreen';
import {BREAKPOINT} from '../../lib/styles';

const SectionWhy = (props) => {
    const ref = useRef();
    const onScreen = useOnScreen(ref, '');

    const animatedClass = onScreen
        ? 'animate__animated animate__fadeIn animate__delay-1s'
        : '';

    return (
        <section id="section-why" ref={ref}>
            <Container>
                <SectionHeader
                    title="Why Choose Us"
                    subtitle="For the Following Reasons"
                />
                <div className="card-container">
                    <div className={`card ${animatedClass}`}>
                        <h4>Professional</h4>
                        <div
                            className="img"
                            style={{backgroundImage: 'url("/professional_dj.png")'}}
                        />
                        <p>
                            An outstanding reception needs outstanding entertainment! Our
                            DJs are the most professionally trained entertainers in our
                            region, and from setup to break down, we are there to help
                            make your celebration perfect! We will coordinate with all of
                            your other wedding professionals, to ensure that your
                            reception runs smoothly and so that you can just relax and
                            enjoy!
                        </p>
                    </div>
                    <div className={`card ${animatedClass}`}>
                        <h4>Personalized</h4>
                        <div
                            className="img"
                            style={{backgroundImage: 'url("/personalized.png")'}}
                        />
                        <p>
                            <strong>This day is yours, not ours!</strong> We want to get
                            to know "your story"! We meet personally to get a feel of who
                            you are and how you want your celebration to be! Each
                            reception is unique, and we take the time to help you develop
                            your timeline, your playlist, and your ambiance.
                        </p>
                    </div>
                    <div className={`card ${animatedClass}`}>
                        <h4>Fun</h4>
                        <div
                            className="img"
                            style={{backgroundImage: 'url("/fun.png")'}}
                        />
                        <p>
                            We think you deserve to enjoy a great party! We will take your
                            song preferences, and get your friends and family to pack the
                            dance floor, without being resorting to “cheesy” tactics and
                            routines. We guarantee that your guests will have a blast, and
                            we want them leaving with sore feet and raving about your
                            reception for years to come!
                        </p>
                    </div>
                </div>
            </Container>
            <style jsx>
                {`
                    .card-container {
                        display: block;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .card-container {
                            display: grid;
                            grid-template-columns: 1fr 1fr 1fr;
                            grid-gap: 60px;
                            align-items: flex-start;
                        }
                    }
                    .card {
                        border-bottom: 3px solid var(--interactive);
                        margin-bottom: 30px;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .card {
                            margin-bottom: 0px;
                        }
                    }
                    .card .img {
                        margin-bottom: 30px;
                        border-radius: 5px;
                        background-size: cover;
                        background-position: center center;
                        width: 100%;
                        height: 290px;
                        border: 1px solid var(--gray-100);
                    }
                    .card p {
                        color: var(--gray-400);
                    }
                `}
            </style>
        </section>
    );
};
export default SectionWhy;
