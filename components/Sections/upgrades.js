import {BREAKPOINT} from '../../lib/styles';
import Container from '../Container';

const paymentLink = 'https://simplecheckout.authorize.net/payment/CatalogPayment.aspx';

const SectionUpgrades = (props) => {
    return (
        <section id="section-reviews">
            <div className="parallax">
                <Container>
                    <img src="/icon-lighting.png" width="80px" height="auto" />
                    <h2>Upgrades</h2>
                    <div className="copy">
                        Also, should you be interested, we do have upgraded sound and
                        décor lighting packages available as well.
                    </div>
                    <img src="/icon-sound.png" width="80px" height="auto" />
                </Container>
            </div>
            <style jsx>
                {`
                    .parallax {
                        background: linear-gradient(
                                to right,
                                rgba(20, 30, 48, 0.9),
                                rgba(36, 59, 85, 0.8)
                            ),
                            url('/dj_background.jpg');
                        min-height: 200px;
                        background-attachment: fixed;
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: cover;
                    }
                    h2 {
                        color: #fff;
                        text-align: center;
                        margin-bottom: 30px;
                        text-transform: uppercase;
                    }
                    .copy {
                        color: #fff;
                        font-size: 32px;
                        line-height: 40px;
                        max-width: 600px;
                        text-align: center;
                        font-family: var(--font-primary);
                        margin: 0 auto;
                    }
                    img {
                        margin: 30px auto;
                        display: flex;
                    }
                `}
            </style>
        </section>
    );
};
export default SectionUpgrades;
