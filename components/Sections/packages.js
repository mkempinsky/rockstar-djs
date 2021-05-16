import Container from '../Container';
import SectionHeader from '../SectionHeader';

const SectionPackages = (props) => {
    return (
        <section id="section-packages">
            <Container>
                <SectionHeader title="Packages" />
                <div className="card-container">
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
                        display: grid;
                        grid-template-columns: 1fr 1fr 1fr;
                        grid-gap: 30px;
                    }
                    .card {
                        width: 100%;
                        background: #fff;
                        border-radius: 5px;
                        border: 1px solid var(--gray-200);
                        padding: 15px;
                        box-shadow: 0px 2px 16px rgba(000, 000, 000, 0.1);
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
