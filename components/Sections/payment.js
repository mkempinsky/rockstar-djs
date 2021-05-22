import {BREAKPOINT} from '../../lib/styles';
import Container from '../Container';

const paymentLink = 'https://simplecheckout.authorize.net/payment/CatalogPayment.aspx';

const SectionPayment = (props) => {
    return (
        <section id="section-reviews">
            <div className="parallax">
                <Container>
                    <h2>Payment Options</h2>
                    <div className="button-container">
                        <a href={paymentLink} target="_blank" title="Make a Payment">
                            Make a Payment
                        </a>
                        <a href={paymentLink} target="_blank" title="Make a Deposit">
                            Make a Deposit
                        </a>
                    </div>
                </Container>
            </div>
            <style jsx>
                {`
                    .parallax {
                        background-image: url('/mixer_board_BKG.jpeg');
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
                    }
                    .button-container {
                        display: block;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .button-container {
                            display: grid;
                            grid-template-columns: auto auto;
                            grid-gap: 60px;
                            justify-content: center;
                        }
                    }
                    a {
                        background: var(--gray-400);
                        max-width: 100%;
                        width: 100%;
                        min-width: 300px;
                        display: block;
                        border-radius: 5px;
                        height: 45px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-weight: bold;
                        font-family: var(--font-primary);
                        box-shadow: 0px 0px 10px rgba(000, 000, 000, 0.8);
                        cursor: pointer;
                        color: #fff;
                        text-decoration: none;
                        margin-bottom: 30px;
                    }
                    a:hover {
                        background: var(--orange);
                        color: #fff;
                        transition: all 0.25s;
                    }
                `}
            </style>
        </section>
    );
};
export default SectionPayment;
