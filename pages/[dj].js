import {useRouter} from 'next/router';
import Layout from '../components/Layout';
import {formatGoogleSheetData, getSlug} from '../lib/utils';
import PageHeading from '../components/PageHeading';
import Container from '../components/Container';
import {BREAKPOINT} from '../lib/styles';
import Link from 'next/link';
import {djSpreadSheetUrl} from '../lib/globals';
import IconMail from '../components/Svgs/icon-mail';
import IconTwitter from '../components/Svgs/icon-twitter';
import IconFacebook from '../components/Svgs/icon-facebook';
import IconInstagram from '../components/Svgs/icon-instagram';
import IconVimeo from '../components/Svgs/icon-vimeo';
import Head from 'next/head';
import djsBackupData from '../lib/djs.json';

const Dj = (props) => {
    const router = useRouter();
    const {dj} = router.query;
    const data = props?.data || [];
    //const allDjs = formatGoogleSheetData(data);
    const allDjs = djsBackupData;

    let djData = allDjs.filter((x) => x?.slug === dj);
    djData = djData?.[0] || [];

    const currentDjIndex = allDjs.indexOf(djData);

    // next dj
    const nextDj = allDjs[currentDjIndex + 1];
    const nextDjName = nextDj?.first_name || '';
    const nextDjSlug = nextDj?.slug || '';

    // next dj
    const previousDj = allDjs[currentDjIndex - 1];
    const previousDjName = previousDj?.first_name || '';
    const previousDjSlug = previousDj?.slug || '';

    // dj info
    const slug = djData?.slug || '';
    const image = slug ? `/djs/${slug}.jpg` : '';
    const firstName = djData?.first_name || '';
    const lastName = djData?.last_name || '';
    const bio = djData?.bio || '';
    const review = djData?.review || '';
    const reviewBy = djData?.review_by || '';
    const quote = djData?.quote || '';
    const title = djData?.title || '';

    // social links
    const email = djData?.email || '';
    const twitter = djData?.twitter || '';
    const facebook = djData?.facebook || '';
    const instagram = djData?.instagram || '';
    const vimeo = djData?.vimeo || '';
    const vimeo_2 = djData?.vimeo_2 || '';

    // video ids
    const vimeo_1_id = getSlug(vimeo);
    const vimeo_2_id = getSlug(vimeo_2);

    return (
        <Layout>
            <Head>
                <title
                    content={`Rockstar DJs | ${firstName} ${lastName} | St.Louis, MO`}
                />
            </Head>
            <PageHeading />
            <Container>
                <div className="container">
                    <div className="sidebar">
                        <div className="image-container">
                            <div className="image" />
                        </div>
                        {title && (
                            <span
                                className="title"
                                dangerouslySetInnerHTML={{__html: title}}
                            />
                        )}
                        <div className="social">
                            {email && (
                                <a
                                    className="social__link"
                                    href={`mailto:${email}`}
                                    target="_blank"
                                    title={`Email: ${email}`}>
                                    <IconMail width={20} fill="#fff" />
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
                                    <IconInstagram width={80} fill="#fff" />
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
                    <div className="main">
                        <h1>
                            {firstName} {lastName}
                        </h1>

                        {bio ? (
                            <div
                                className="bio"
                                dangerouslySetInnerHTML={{__html: bio}}
                            />
                        ) : (
                            <div className="bio-placeholder" />
                        )}

                        {quote && (
                            <div className="quote-container">
                                <div>
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="quote-left"
                                        role="img"
                                        width="30"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512">
                                        <path
                                            fill="var(--interactive)"
                                            d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                                    </svg>
                                </div>
                                <div
                                    className="quote-copy"
                                    dangerouslySetInnerHTML={{__html: quote}}
                                />
                            </div>
                        )}
                        {review && (
                            <div className="review">
                                <h4>Review</h4>
                                <div
                                    className="review-copy"
                                    dangerouslySetInnerHTML={{__html: review}}
                                />
                                <div
                                    className="review-by"
                                    dangerouslySetInnerHTML={{
                                        __html: `By: ${reviewBy}`,
                                    }}
                                />
                            </div>
                        )}
                        {(vimeo || vimeo_2) && (
                            <div className="videos">
                                <h4>Watch {firstName}</h4>
                                {vimeo && (
                                    <iframe
                                        src={`https://player.vimeo.com/video/${vimeo_1_id}`}
                                        width="100%"
                                        height="auto"
                                        frameborder="0"
                                        title={`Watch ${firstName}`}
                                        webkitallowFullscreen
                                        mozallowFullscreen
                                        allowFullscreen></iframe>
                                )}
                                {vimeo_2 && (
                                    <iframe
                                        src={`https://player.vimeo.com/video/${vimeo_2_id}`}
                                        width="100%"
                                        height="auto"
                                        frameborder="0"
                                        title={`Watch ${firstName}`}
                                        webkitallowFullscreen
                                        mozallowFullscreen
                                        allowFullscreen></iframe>
                                )}
                            </div>
                        )}
                        <div className="dj-pagination">
                            {previousDjSlug && (
                                <Link
                                    as={previousDjSlug}
                                    href={{
                                        pathname: '/dj',
                                        query: {dj: previousDjSlug},
                                    }}>
                                    <a style={{textDecoration: 'none'}}>
                                        <button>
                                            <div>
                                                <svg
                                                    aria-hidden="true"
                                                    focusable="false"
                                                    data-prefix="fas"
                                                    data-icon="chevron-left"
                                                    role="img"
                                                    width="10"
                                                    height="auto"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 320 512">
                                                    <path
                                                        fill="#fff"
                                                        d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
                                                </svg>
                                            </div>
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: previousDjName,
                                                }}
                                            />
                                        </button>
                                    </a>
                                </Link>
                            )}
                            {(!previousDjSlug || !nextDjSlug) && <div />}

                            {nextDjSlug && (
                                <Link
                                    as={nextDjSlug}
                                    href={{
                                        pathname: '/dj',
                                        query: {dj: nextDjSlug},
                                    }}>
                                    <a style={{textDecoration: 'none'}}>
                                        <button>
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: nextDjName,
                                                }}
                                            />
                                            <div>
                                                <svg
                                                    aria-hidden="true"
                                                    focusable="false"
                                                    data-prefix="fas"
                                                    data-icon="chevron-right"
                                                    role="img"
                                                    width="10"
                                                    height="auto"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 320 512">
                                                    <path
                                                        fill="#fff"
                                                        d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                                                </svg>
                                            </div>
                                        </button>
                                    </a>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
                <style jsx>
                    {`
                        h1 {
                            margin: 30px 0;
                        }
                        @media screen and (min-width: ${BREAKPOINT}) {
                            h1 {
                                margin-bottom: 60px;
                            }
                        }
                        .container {
                            display: block;
                        }
                        @media screen and (min-width: ${BREAKPOINT}) {
                            .container {
                                display: grid;
                                grid-template-columns: 1fr 3fr;
                                grid-gap: 60px;
                            }
                        }
                        .image {
                            background-image: url(${image});
                            width: 300px;
                            height: 300px;
                            background-size: cover;
                            background-position: center center;
                            border-radius: 100%;
                            border: 5px solid var(--gray-300);
                            margin: 0 auto;
                        }
                        .image-container {
                            margin-top: -200px;
                        }
                        @media screen and (min-width: ${BREAKPOINT}) {
                            .image-container {
                                margin-top: 0;
                            }
                        }

                        .title {
                            text-align: center;
                            margin: 30px auto;
                            min-width: 100%;
                            display: block;
                            font-size: 30px;
                            color: var(--gray-300);
                            font-weight: bold;
                            font-family: var(--font-primary);
                        }
                        .social__link {
                            background: var(--orange);
                            width: 40px;
                            height: 40px;
                            border-radius: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            margin: 0 auto 15px auto;
                        }

                        .bio {
                            font-size: 18px;
                            line-height: 28px;
                            font-family: var(--font-secondary);
                            margin-bottom: 60px;
                        }
                        .bio-placeholder {
                            min-height: 50px;
                        }

                        .quote-container {
                            display: grid;
                            grid-template-columns: auto auto;
                            grid-gap: 30px;
                            margin-bottom: 60px;
                        }
                        .quote-copy {
                            font-size: 18px;
                            line-height: 28px;
                            font-family: var(--font-secondary);
                            font-style: italic;
                        }
                        .review-copy {
                            font-size: 16px;
                            line-height: 24px;
                            font-family: var(--font-secondary);
                            border-left: 3px solid var(--interactive);
                            padding-left: 30px;
                            margin-bottom: 30px;
                            font-style: italic;
                        }
                        .review-by {
                            padding-left: 33px;
                            font-weight: bold;
                            font-family: var(--font-secondary);
                        }
                        .videos {
                            margin-top: 60px;
                        }
                        .videos > iframe {
                            min-width: 100%;
                            height: 200px;
                            border-left: 3px solid var(--interactive);
                            margin-bottom: 30px;
                        }
                        @media screen and (min-width: ${BREAKPOINT}) {
                            .videos > iframe {
                                height: 400px;
                                margin-bottom: 60px;
                            }
                        }
                        .dj-pagination {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            margin: 60px 0;
                        }
                        button {
                            border: 1px solid var(--orange);
                            background: var(--orange);
                            min-width: 100px;
                            height: 45px;
                            border-radius: 5px;
                            color: #fff;
                            font-weight: bold;
                            font-family: var(--font-primary);
                            font-size: 18px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            grid-gap: 8px;
                            padding: 0 5px;
                        }
                        @media screen and (min-width: ${BREAKPOINT}) {
                            button {
                                min-width: 180px;
                            }
                        }
                        button:hover {
                            cursor: pointer;
                            box-shadow: 0px 0px 15px rgba(000, 000, 000, 0.4);
                            transition: all 0.25s;
                        }
                    `}
                </style>
            </Container>
        </Layout>
    );
};

export default Dj;

export async function getServerSideProps(context) {
    let data = [];
    let response = {};
    try {
        response = await fetch(djSpreadSheetUrl);
        data = await response.json();
    } catch (e) {
        console.warn(e);
    }

    return {
        props: {
            data,
        },
    };
}
