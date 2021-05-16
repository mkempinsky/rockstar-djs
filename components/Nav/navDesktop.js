import {scrollToElement} from '../../lib/utils';

const NavDesktop = (props) => {
    return (
        <div className="nav-desktop">
            <div className="knot-container">
                <img src="/knot_hall_of_fame.png" width="120" height="auto" />
            </div>
            <div className="link-container">
                <ul>
                    <li onClick={() => scrollToElement('section-why')}>Why</li>
                    <li onClick={() => scrollToElement('section-djs')}>DJs</li>
                    <li onClick={() => scrollToElement('section-packages')}>Packages</li>
                    <li onClick={() => scrollToElement('section-gallery')}>Gallery</li>
                    <li onClick={() => scrollToElement('section-photo-booth')}>
                        Photo Booth
                    </li>
                    <li onClick={() => scrollToElement('section-faq')}>FAQ</li>
                    <li>
                        <button>Read our reviews on the knot</button>
                    </li>
                </ul>
            </div>
            <style jsx>
                {`
                    .nav-desktop {
                        position: fixed;
                        display: grid;
                        grid-template-columns: 120px auto;
                        align-items: flex-start;
                        width: 100%;
                        z-index: 10;
                    }
                    .link-container {
                        background: linear-gradient(
                            to bottom,
                            rgba(0, 0, 0, 1) 0%,
                            rgba(0, 0, 0, 0) 100%
                        );
                    }
                    ul {
                        margin: 0;
                        font-family: var(--font-primary);
                        display: flex;
                        align-items: flex-end;
                        justify-content: flex-end;
                        list-style: none;
                        padding: 0 20px;
                        height: 100px;
                        font-weight: bold;
                    }
                    li {
                        width: 120px;
                        height: 100px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #fff;
                        cursor: pointer;
                        border-top: 3px solid transparent;
                    }
                    li:hover {
                        border-top: 3px solid var(--interactive);
                    }
                    li:last-child {
                        width: auto;
                        cursor: auto;
                    }
                    li:last-child:hover {
                        border-top: 3px solid transparent;
                    }
                    .knot-container {
                        position: relative;
                    }
                    .knot-container > img {
                        position: fixed;
                    }
                `}
            </style>
        </div>
    );
};
export default NavDesktop;
