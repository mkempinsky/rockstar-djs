import Container from '../Container';
import SectionHeader from '../SectionHeader';
import Gallery from '../Gallery';

const images = [
    '/galleryImages/gallery_01.jpg',
    '/galleryImages/gallery_02.jpg',
    '/galleryImages/gallery_03.jpg',
    '/galleryImages/gallery_04.jpg',
    '/galleryImages/gallery_05.jpg',
    '/galleryImages/gallery_06.jpg',
    '/galleryImages/gallery_07.jpg',
    '/galleryImages/gallery_08.jpg',
    '/galleryImages/gallery_09.jpg',
    '/galleryImages/gallery_10.jpg',
    '/galleryImages/gallery_11.jpg',
    '/galleryImages/gallery_12.jpg',
    '/galleryImages/gallery_13.jpg',
    '/galleryImages/gallery_14.jpg',
    '/galleryImages/gallery_15.jpg',
];

const SectionGallery = (props) => {
    return (
        <section id="section-gallery">
            <Container>
                <SectionHeader title="Gallery" subtitle="Take A Look Inside!" />
                <Gallery images={images} />
            </Container>
        </section>
    );
};
export default SectionGallery;
