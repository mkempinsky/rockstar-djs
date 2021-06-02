import Container from '../Container';
import SectionHeader from '../SectionHeader';
import Link from 'next/link';
import {BREAKPOINT} from '../../lib/styles';
import IconFacebook from '../Svgs/icon-facebook';
import IconTwitter from '../Svgs/icon-twitter';
import IconMail from '../Svgs/icon-mail';
import IconInstagram from '../Svgs/icon-instagram';
import IconVimeo from '../Svgs/icon-vimeo';

/// https://drive.google.com/uc?id=FILE_ID

const SectionDjs = ({data = []}) => {
    return (
        <section id="section-djs">
            <Container>
                <SectionHeader title="Our DJs" subtitle="The most professional in town" />
                <div className="dj-container">
                    {Array.isArray(data) &&
                        data.map((dj) => {
                            const {
                                id,
                                first_name: firstName,
                                last_name: lastName,
                                title,
                                image,
                                slug,
                                email,
                                twitter,
                                facebook,
                                instagram,
                                vimeo,
                                vimeo_2,
                            } = dj;
                            const imgSrc = image || `/djs/${slug}.jpg` || '/avatar.svg';
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
                                    <div className="social">
                                        {email && (
                                            <a
                                                className="social__link"
                                                href={`mailto:${email}`}
                                                target="_blank"
                                                title={`Email: ${email}`}>
                                                <IconMail width={16} fill="#fff" />
                                            </a>
                                        )}
                                        {twitter && (
                                            <a
                                                className="social__link"
                                                target="_blank"
                                                href={twitter}
                                                title={`${firstName} - Twitter`}>
                                                <IconTwitter width={100} fill="#fff" />
                                            </a>
                                        )}
                                        {facebook && (
                                            <a
                                                className="social__link"
                                                target="_blank"
                                                href={facebook}
                                                title={`${firstName} - Facebook`}>
                                                <IconFacebook width={100} fill="#fff" />
                                            </a>
                                        )}
                                        {instagram && (
                                            <a
                                                className="social__link"
                                                target="_blank"
                                                href={instagram}
                                                title={`${firstName} - Instagram`}>
                                                <IconInstagram width={50} fill="#fff" />
                                            </a>
                                        )}
                                        {vimeo && (
                                            <a
                                                className="social__link"
                                                target="_blank"
                                                href={vimeo}
                                                title={`${firstName} - Vimeo`}>
                                                <IconVimeo width={20} fill="#fff" />
                                            </a>
                                        )}
                                        {vimeo_2 && (
                                            <a
                                                className="social__link"
                                                target="_blank"
                                                href={vimeo_2}
                                                title={`${firstName} - Vimeo`}>
                                                <IconVimeo width={20} fill="#fff" />
                                            </a>
                                        )}
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
                        font-family: var(--font-secondary);
                    }
                    .social {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        grid-gap: 3px;
                        margin: 15px 0 0 0;
                    }
                    .social__link {
                        width: 30px;
                        height: 30px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 100%;
                        background: var(--orange);
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .social {
                            grid-gap: 6px;
                        }
                        .social__link {
                            width: 35px;
                            height: 35px;
                        }
                    }
                `}
            </style>
        </section>
    );
};
export default SectionDjs;
