import {BREAKPOINT} from '../../lib/styles';
import Container from '../Container';
import SectionHeader from '../SectionHeader';
import Gallery from '../Gallery';

const galleryImages = [
    '/photoBoothImages/pb_2.jpg',
    '/photoBoothImages/pb_3.jpg',
    '/photoBoothImages/pb_4.jpg',
    '/photoBoothImages/pb_5.jpg',
    '/photoBoothImages/pb_1.jpg',
];

const SectionPhotoBooth = (props) => {
    return (
        <section id="section-reviews">
            <div className="">
                <Container>
                    <SectionHeader title="Photo Booth" />
                    <div className="content-container">
                        <div>
                            <h3>Capture the memories. Relive the fun!</h3>
                            <p>
                                Watch your maid of honor don a mustache, or your
                                grandparents rock a Viking’s hat. Everyone leaves with
                                their prints and best of all, you get a digital copy of
                                every picture taken!
                            </p>
                            <a href="mailto:quain@rockstardjs.com?Subject=Rockstar%20DJ%20Information">
                                Email Us for More Details
                            </a>
                        </div>
                        <div>
                            <img
                                src="/photobooth_bkg.jpg"
                                width="100%"
                                height="auto"
                                style={{borderRadius: '5px'}}
                            />
                        </div>
                    </div>
                    <div className="gallery-container">
                        <Gallery images={galleryImages} columns={5} />
                    </div>
                </Container>
            </div>
            <style jsx>
                {`
                    h2 {
                        color: #fff;
                        text-align: center;
                        margin-bottom: 30px;
                    }
                    h3 {
                        margin-bottom: 30px;
                    }
                    .content-container {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        grid-gap: 60px;
                        margin-bottom: 60px;
                    }
                    a {
                        background: var(--gray-300);
                        display: block;
                        color: #fff;
                        text-decoration: none;
                        padding: 8px 15px;
                        width: fit-content;
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
export default SectionPhotoBooth;
