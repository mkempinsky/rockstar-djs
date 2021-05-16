import Container from '../Container';
import SectionHeader from '../SectionHeader';

const SectionDjs = (props) => {
    return (
        <section id="section-djs">
            <Container>
                <SectionHeader title="Our DJs" subtitle="The most professional in town" />
                <div className="card-container">
                    <div className="dj">
                        <img className="dj__img" src="/djs/Quain_Tull.jpeg" />
                        <div className="dj__name">Quain Tull</div>
                        <div className="dj__title">Owner</div>
                    </div>
                </div>
            </Container>
            <style jsx>
                {`
                    .dj__img {
                        border-radius: 100%;
                        width: 300px;
                        height: 300px;
                    }
                `}
            </style>
        </section>
    );
};
export default SectionDjs;
