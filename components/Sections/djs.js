import Container from '../Container';
import SectionHeader from '../SectionHeader';
import Link from 'next/link';
import {BREAKPOINT} from '../../lib/styles';

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
                                                    width="100%"
                                                    height="auto"
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
                        grid-gap: 30px;
                        grid-template-columns: repeat(2, 1fr);
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .dj-container {
                            grid-gap: 60px;
                            grid-template-columns: repeat(3, 1fr);
                        }
                    }
                    .dj__img {
                        border-radius: 100%;
                        width: 150px;
                        height: 150px;
                        text-align: center;
                        display: flex;
                        border: 3px solid var(--gray-300);
                        margin: 0 auto 24px auto;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .dj__img {
                            width: 300px;
                            height: 300px;
                            border: 5px solid var(--gray-300);
                        }
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
