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
            <section id="section-photo-booth">DJs</section>
            <section id="section-faq">DJs</section>
        </Layout>
    );
};
export default HomePage;

export async function getServerSideProps(context) {
    let response = {};

    const url =
        'https://spreadsheets.google.com/feeds/cells/1IMW9uxy8jOAjq-rsSfrV9KPl7uN410hSgITQdEBKvV8/1/public/full?alt=json';

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
    let rowValues = [];

    // get first row - use as keys
    let firstRow = Array.isArray(data) && data.filter((x) => x?.gs$cell?.row == 1);
    firstRow = firstRow.map((item) => {
        return {column: item?.gs$cell?.col, value: item?.gs$cell?.inputValue};
    });

    // format
    Array.isArray(data) &&
        data.map((item, index) => {
            // skip row 1
            if (index === 0) return;
            const row = item?.gs$cell?.row || 0;
            const prevRow = data[index - 1]?.gs$cell?.row || 0;

            if (row !== prevRow) {
                const itemsInRow = data.filter((x) => x?.gs$cell?.row === row);

                let obj = {};
                firstRow.map((x) => {
                    const column = x?.column;
                    const columnName = x?.value;
                    let value = itemsInRow.find((x) => x?.gs$cell?.col === column);
                    value = value?.gs$cell?.inputValue || null;
                    obj = {...obj, [columnName]: value};
                    return;
                });
                rowValues.push(obj);
            }
        });

    return rowValues;
};
