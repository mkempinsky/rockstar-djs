import React from 'react';
import {BREAKPOINT} from '../../lib/styles';
import NavDesktop from './navDesktop';
import NavMobile from './navMobile';

const Nav = (props) => {
    return (
        <React.Fragment>
            <div className="nav-mobile">
                <NavMobile />
            </div>
            <div className="nav-desktop">
                <NavDesktop />
            </div>
            <style jsx>
                {`
                    .nav-mobile {
                        display: block;
                    }
                    .nav-desktop {
                        display: none;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .nav-mobile {
                            display: none;
                        }
                        .nav-desktop {
                            display: block;
                        }
                    }
                `}
            </style>
        </React.Fragment>
    );
};
export default Nav;
