import {useRouter} from 'next/router';
import HeroSlider from '../components/HeroSlider';
import Layout from '../components/Layout';

const Post = () => {
    const router = useRouter();
    const {dj} = router.query;
    console.log(router);

    return (
        <Layout>
            <div className="header" />
            <style jsx>
                {`
                    .header {
                        width: 100%;
                        background: linear-gradient(
                                to right top,
                                rgba(20, 30, 48, 0.7),
                                rgba(36, 59, 85, 0.2)
                            ),
                            url('/dj_background.jpg');
                        height: 350px;
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: center;
                    }
                `}
            </style>
        </Layout>
    );
};

export default Post;
