import {contactEmail} from '../../lib/globals';
import {useState} from 'react';
import Link from 'next/link';
import {scrollToElement} from '../../lib/utils';
import {useRouter} from 'next/router';

const NavMobile = (props) => {
    const [showSlidout, toggleSlideOut] = useState(false);

    const router = useRouter();
    const pathname = router?.pathname || '';

    console.log(pathname);

    const handleRouting = (section) => {
        console.log('section:', section);
        if (pathname === '/') {
            scrollToElement(section, 100);
        } else {
            router.push(`/#${section}`, '');
        }
    };
    return (
        <nav>
            <div className="nav__banner">
                <Link href="/">
                    <a>
                        <div className="nav__title">
                            <img src="/RSDJS_horizontal_logo.png" width="200px" />
                        </div>
                    </a>
                </Link>
                <div
                    className={`nav__menu-icon ${showSlidout ? 'active' : ''}`}
                    onClick={() => toggleSlideOut((prevInputState) => !prevInputState)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={`nav__slideout ${showSlidout ? 'active' : ''}`}>
                <div onClick={() => toggleSlideOut(false)}>
                    <ul>
                        <li onClick={() => handleRouting('section-why')}>Why</li>
                        <li onClick={() => handleRouting('section-djs')}>DJs</li>
                        <li onClick={() => handleRouting('section-packages')}>
                            Packages
                        </li>
                        <li onClick={() => handleRouting('section-gallery')}>Gallery</li>
                        <li onClick={() => handleRouting('section-photobooth')}>
                            Photo Booth
                        </li>
                        <li>
                            <Link href="/faqs">
                                <a
                                    title="FAQ"
                                    style={{color: '#000', textDecoration: 'none'}}>
                                    FAQ
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="nav__survey">
                    <a
                        className="knot-link"
                        href="https://www.theknot.com/marketplace/rockstar-djs-ballwin-mo-552134#reviews-area"
                        target="blank"
                        title="Read Our Reviews On the Knot">
                        <img src="/the_knot-btn.png" alt="The Knot Reviews" width="160" />
                    </a>
                </div>
                <div className="nav__contact">
                    <strong>
                        Contact:{' '}
                        <a
                            href={`mailto:${contactEmail}`}
                            title={`Email: ${contactEmail}`}>
                            {contactEmail}
                        </a>
                    </strong>
                </div>
            </div>

            <style jsx>
                {`
                    nav {
                        position: relative;
                    }

                    .nav__banner {
                        height: 60px;
                        position: fixed;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 0 20px;
                        top: 0;
                        z-index: 10;
                        width: 100%;
                        background: #000;
                        box-shadow: 2px 0px 10px rgba(000, 000, 000, 0.3);
                    }
                    .nav__banner a {
                        color: #000;
                        text-decoration: none;
                        font-family: var(--font-primary);
                        font-weight: 700;
                    }
                    ul {
                        padding-top: 60px;
                    }
                    li {
                        text-align: center;
                        font-size: 18px;
                        font-weight: bold;
                        height: 50px;
                        border-bottom: 1px solid var(--interactive);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .nav__slideout {
                        position: fixed;
                        background: #fff;
                        right: -100%;
                        overflow-x: hidden;
                        height: 100vh;
                        width: 100%;
                    }
                    .nav__slideout.active {
                        z-index: 8;
                        right: 0;
                        transition: all 0.5s;
                    }

                    .nav__menu-icon {
                        display: flex;
                        flex-direction: column;
                        width: 40px;
                        cursor: pointer;
                    }

                    .nav__menu-icon span {
                        background: var(--orange);
                        border-radius: 10px;
                        width: 100%;
                        height: 3px;
                        margin: 3px 0;
                        transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
                    }
                    .nav__menu-icon.active > span:nth-of-type(1) {
                        transform-origin: bottom;
                        transform: rotatez(45deg) translate(6px, 5px);
                    }
                    .nav__menu-icon.active > span:nth-of-type(2) {
                        transform-origin: top;
                        transform: rotatez(-45deg);
                    }
                    .nav__menu-icon.active > span:nth-of-type(3) {
                        opacity: 0;
                    }
                    .nav__survey {
                        display: block;
                        margin: 20px auto;
                        text-align: center;
                    }
                    .nav__contact {
                        margin: 20px auto;
                        text-align: center;
                    }
                    .nav__contact a {
                        color: var(--orange);
                    }
                `}
            </style>
        </nav>
    );
};
export default NavMobile;
