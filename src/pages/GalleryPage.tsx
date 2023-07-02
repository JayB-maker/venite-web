import Layout from "../components/layout";
import Gallery from "../components/websiteSection/gallery/gallery";
import GalleryHeroSection from "../components/websiteSection/gallery/galleryHeroSection";

const GalleryPage = () => {
  return (
    <Layout>
      <GalleryHeroSection />
      <Gallery />
    </Layout>
  );
};

export default GalleryPage;
