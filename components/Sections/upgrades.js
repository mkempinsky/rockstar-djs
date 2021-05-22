import {BREAKPOINT} from '../../lib/styles';
import Container from '../Container';

const paymentLink = 'https://simplecheckout.authorize.net/payment/CatalogPayment.aspx';

const SectionUpgrades = (props) => {
    return (
        <section id="section-reviews">
            <div className="parallax">
                <Container>
                    <h2>Upgrades</h2>
                    <div className="copy">
                        Also, should you be interested, we do have upgraded sound and
                        décor lighting packages available as well.
                    </div>
                </Container>
            </div>
            <style jsx>
                {`
                    .parallax {
                        background: var(--gray-100);
                        min-height: 200px;
                    }
                    h2 {
                        color: #fff;
                        text-align: center;
                        margin-bottom: 30px;
                    }
                `}
            </style>
        </section>
    );
};
export default SectionUpgrades;
