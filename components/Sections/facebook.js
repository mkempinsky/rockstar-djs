import Container from '../Container';

const SectionFacebook = (props) => {
    return (
        <section id="section-facebook">
            <div className="parallax">
                <Container>
                    <div className="container">
                        <a
                            href="https://www.facebook.com/rockstardjstl?fref=ts"
                            title="Rockstar DJs Facebook"
                            target="blank">
                            <button>Check Our Facebook</button>
                        </a>
                        <div>for current images and testimonials!</div>
                    </div>
                </Container>
            </div>
            <style jsx>
                {`
                    .parallax {
                        background: url('/facebook.jpg');
                        min-height: 250px;
                        background-attachment: fixed;
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: cover;
                    }
                    .container {
                        margin: 0 auto;
                        position: relative;
                        color: #fff;
                        font-size: 22px;
                        text-align: center;
                        font-weight: bold;
                        font-style: italic;
                        text-shadow: 2px 2px 10px rgba(000, 000, 000, 0.9);
                    }
                    a {
                        margin: 0 auto 30px auto;
                        display: block;
                        width: fit-content;
                    }
                    button {
                        cursor: pointer;
                        background: #3b5998;
                        border: none;
                        font-size: 22px;
                        font-weight: bold;
                        color: #fff;
                        width: 300px;
                        height: 45px;
                        font-family: var(--font-primary);
                        border-radius: 5px;
                        box-shadow: 0px 2px 10px rgba(000, 000, 000, 0.6);
                    }
                `}
            </style>
        </section>
    );
};
export default SectionFacebook;
