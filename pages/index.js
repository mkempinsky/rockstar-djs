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
} from '../components/Sections';

const HomePage = (props) => {
    let djData = props?.data?.feed?.entry || [];
    djData = formatData(djData);
    console.log('djData', djData);
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
            <SectionDjs />
            <SectionPackages />
            <SectionGallery />
            <SectionFacebook />
            <section id="section-photo-booth">DJs</section>
            <section id="section-faq">DJs</section>
        </Layout>
    );
};
export default HomePage;

export async function getServerSideProps(context) {
    let response = {};

    const url =
        'https://spreadsheets.google.com/feeds/cells/1S9MylPyGaC3D1s1epdB4IPIUHIDDrBddp0ofEl470yo/1/public/full?alt=json';

    let data = [];
    response = {};
    try {
        response = await fetch(url);
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

const formatData = (data) => {
    console.log('data', data);

    let formated = [];
    let rowValues = [];

    Array.isArray(data) &&
        data.map((item, index) => {
            const row = item?.gs$cell?.row || 0;
            const prevRow = data[index - 1]?.gs$cell?.row || 0;
            if (row !== prevRow) {
                const itemsInRow = data.filter((x) => x?.gs$cell?.row === row);

                rowValues.push({[row]: itemsInRow});
            }
        });

    Array.isArray(rowValues) &&
        rowValues.map((item, index) => {
            console.log('item', item);
        });

    return rowValues;
};
