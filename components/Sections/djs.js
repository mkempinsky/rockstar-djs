import Container from '../Container';
import SectionHeader from '../SectionHeader';
import Link from 'next/link';

/// https://drive.google.com/uc?id=FILE_ID

const SectionDjs = ({djData = []}) => {
    console.log(djData);
    return (
        <section id="section-djs">
            <Container>
                <SectionHeader title="Our DJs" subtitle="The most professional in town" />
                <div className="dj-container">
                    {Array.isArray(djData) &&
                        djData.map((dj) => {
                            const {
                                id,
                                first_name: firstName,
                                last_name: lastName,
                                title,
                                image,
                                slug,
                            } = dj;
                            const imgSrc = image || `/djs/${slug}.jpg`;
                            return (
                                <div className="card-container" key={id}>
                                    <div className="dj">
                                        <Link href={`/${slug}`}>
                                            <a>
                                                <img
                                                    className="dj__img"
                                                    src={imgSrc}
                                                    width="200px"
                                                    height="200px"
                                                />
                                            </a>
                                        </Link>
                                        <div className="dj__name">
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: firstName,
                                                }}
                                            />{' '}
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: lastName,
                                                }}
                                            />
                                        </div>
                                        <div
                                            className="dj__title"
                                            dangerouslySetInnerHTML={{__html: title}}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </Container>
            <style jsx>
                {`
                    .dj-container {
                        display: grid;
                        grid-template-columns: 1fr 1fr 1fr;
                        grid-gap: 60px;
                    }
                    .dj__img {
                        border-radius: 100%;
                        width: 300px;
                        height: 300px;
                        text-align: center;
                        display: flex;
                        border: 5px solid var(--gray-300);
                        margin: 0 auto 24px auto;
                    }
                    .dj__img:hover {
                        cursor: pointer;
                        border: 5px solid var(--orange);
                        transform: scale(1.1);
                        transition: all 0.5s;
                    }
                    .dj__name {
                        font-weight: bold;
                        text-align: center;
                        font-family: var(--font-primary);
                        font-size: 22px;
                        margin-bottom: 8px;
                    }
                    .dj__title {
                        color: var(--orange);
                        font-weight: bold;
                        text-align: center;
                        font-style: italic;
                        font-family: var(--font-primary);
                    }
                `}
            </style>
        </section>
    );
};
export default SectionDjs;
