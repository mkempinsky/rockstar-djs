import Layout from '../components/Layout';
import Head from 'next/head';
import HeroSlider from '../components/HeroSlider';
import {
    SectionIntro,
    SectionReviews,
    SectionWhy,
    SectionPayment,
    SectionDjs,
    SectionPackages,
    SectionGallery,
    SectionFacebook,
    SectionUpgrades,
    SectionPhotoBooth,
} from '../components/Sections';
import {formatGoogleSheetData} from '../lib/utils';
import {djSpreadSheetUrl} from '../lib/globals';

const HomePage = (props) => {
    const {data} = props;
    const djData = formatGoogleSheetData(data);
    return (
        <Layout>
            <Head>
                <title>Rockstar DJs | St.Louis, MO</title>
                <meta name="title" content="Rockstar DJs | St.Louis, MO" />
                <meta property="og:url" content="http://rockstardjs.com" />
                <meta name="description" content="LET US MAKE YOUR DAY PERFECT!" />
            </Head>
            <HeroSlider />
            <SectionIntro />
            <SectionReviews />
            <SectionWhy />
            <SectionPayment />
            <SectionDjs djData={djData} />
            <SectionPackages />
            <SectionGallery />
            <SectionFacebook />
            <SectionPhotoBooth />
            <SectionUpgrades />
        </Layout>
    );
};
export default HomePage;

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
