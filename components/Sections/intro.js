import SectionHeader from '../SectionHeader';
import AvailibityForm from '../AvailabilityForm';
import {BREAKPOINT} from '../../lib/styles';
import Container from '../Container';

const SectionIntro = (props) => {
    return (
        <section id="section-intro">
            <Container>
                <SectionHeader title="Hello" subtitle="And Welcome" />
                <div className="container">
                    <div>
                        <h4>Let Us Make Your Day Perfect!</h4>
                        <p>
                            The entertainment at your reception is one of the most
                            important decisions you will have to make. Quite simply, the
                            DJ can be the difference between an “alright time” and a
                            “great night that your guests will remember forever”. Our DJs
                            are the best trained, and most professional entertainers in
                            the area. With Rockstar DJs, you can rest assured that you
                            have made the absolute best choice in entertainment!
                        </p>
                        <p>
                            An iPod can play music;{' '}
                            <strong>
                                an amazing DJ will get your friends and family engaged in
                                your reception!
                            </strong>
                        </p>
                        <p>
                            We have become the preferred DJ service for numerous wedding
                            professionals, reception sites, and high profile events. Email
                            us for a list of those that refer us!
                        </p>
                        <a href="mailto:quain@rockstardjs.com?Subject=Rockstar%20DJ%20Information">
                            Email Us
                        </a>
                    </div>
                    <div>
                        <AvailibityForm />
                    </div>
                </div>
            </Container>
            <style jsx>
                {`
                    .container {
                        display: block;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .container {
                            display: grid;
                            grid-template-columns: 60% auto;
                            grid-gap: 60px;
                        }
                    }
                    a {
                        background: var(--gray-300);
                        display: block;
                        color: #fff;
                        text-decoration: none;
                        padding: 8px;
                        width: 150px;
                        font-size: 18px;
                        font-weight: bold;
                        font-family: var(--font-primary);
                        border-radius: 5px;
                        text-align: center;
                    }
                    a:hover {
                        background: #000;
                        transition: all 0.5s;
                    }
                `}
            </style>
        </section>
    );
};
export default SectionIntro;
