import Footer from '../Footer';
import Nav from '../Nav';
import Router from 'next/router';
import NProgress from 'nprogress';
import {BREAKPOINT} from '../../lib/styles';
import ScrollToTop from '../ScrollToTop';

Router.onRouteChangeStart = (url) => {
    NProgress.start();
};

Router.onRouteChangeComplete = () => {
    window.scrollTo(0, 0);
    NProgress.done();
};

Router.onRouteChangeError = () => NProgress.done();

const Layout = (props) => {
    return (
        <div className="layout">
            <Nav />
            <div className="page-content">{props.children}</div>
            <ScrollToTop />
            <Footer />
            <style jsx>{`
                .layout {
                    position: relative;
                }
                @media screen and (min-width: ${BREAKPOINT}) {
                    .layout {
                        padding-top: 0;
                }
                .page-content {
                    min-height: 100vh;
                }
            `}</style>
        </div>
    );
};
export default Layout;
