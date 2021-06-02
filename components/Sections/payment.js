import {BREAKPOINT} from '../../lib/styles';
import Container from '../Container';

const SectionPayment = (props) => {
    return (
        <section id="section-reviews">
            <div className="parallax">
                <Container>
                    <h2>Payment Options</h2>
                    <div className="forms-container">
                        <form
                            name="PrePage"
                            method="post"
                            target="_blank"
                            action="https://Simplecheckout.authorize.net/payment/CatalogPayment.aspx">
                            {' '}
                            <input
                                type="hidden"
                                name="LinkId"
                                value="2a16d428-178c-4bb4-855f-7de0d393df7b"
                            />{' '}
                            <button type="submit">Make Payment Here!</button>
                        </form>
                        <form
                            name="PrePage"
                            method="post"
                            target="_blank"
                            action="https://Simplecheckout.authorize.net/payment/CatalogPayment.aspx">
                            {' '}
                            <input
                                type="hidden"
                                name="LinkId"
                                value="c4a04e73-6c18-4b10-9388-bace0cd2fb72"
                            />{' '}
                            <button type="submit">Make a Deposit</button>{' '}
                        </form>
                    </div>
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
                    button {
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
                        border: none;
                        font-weight: bold;
                        font-family: var(--font-primary);
                        box-shadow: 0px 0px 10px rgba(000, 000, 000, 0.8);
                        cursor: pointer;
                        color: #fff;
                        text-decoration: none;
                        margin-bottom: 30px;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        button {
                            max-width: 400px;
                        }
                    }
                    button:hover {
                        background: var(--orange);
                        color: #fff;
                        cursor: pointer;
                        transition: all 0.25s;
                    }
                    .forms-container {
                        display: block;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .forms-container {
                            display: grid;
                            justify-content: center;
                            grid-template-columns: auto auto;
                            grid-gap: 30px;
                        }
                    }
                `}
            </style>
        </section>
    );
};
export default SectionPayment;
