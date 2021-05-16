import {contactEmail} from '../../lib/globals';
import {useState} from 'react';
import Link from 'next/link';
import Button from '../Button';
import {scrollToElement} from '../../lib/utils';

const NavMobile = (props) => {
    const [showSlidout, toggleSlideOut] = useState(false);
    return (
        <nav>
            <div className="nav__banner">
                <Link href="/">
                    <a>
                        <div className="nav__title">
                            <img src="/valor-logo.png" width="200px" />
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
                        <li onClick={() => scrollToElement('section-why')}>Why</li>
                        <li onClick={() => scrollToElement('section-why')}>DJs</li>
                        <li onClick={() => scrollToElement('section-why')}>Packages</li>
                        <li onClick={() => scrollToElement('section-why')}>Gallery</li>
                        <li onClick={() => scrollToElement('section-why')}>
                            Photo Booth
                        </li>
                        <li onClick={() => scrollToElement('section-why')}>FAQ</li>
                    </ul>
                </div>
                <div className="nav__survey">
                    <a href="/" title="Start Survey">
                        <Button>Start Survey</Button>
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
                        background: #fff;
                        box-shadow: 2px 0px 10px rgba(000, 000, 000, 0.3);
                    }
                    .nav__banner a {
                        color: #000;
                        text-decoration: none;
                        font-family: var(--font-primary);
                        font-weight: 700;
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
                        background: var(--primary);
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
                `}
            </style>
        </nav>
    );
};
export default NavMobile;
