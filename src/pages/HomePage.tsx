import Layout from "../components/layout";
import About from "../components/websiteSection/home/about";
import Courses from "../components/websiteSection/home/courses";
import DreamAchiever from "../components/websiteSection/home/dreamAchiever";
import HomeHeroSection from "../components/websiteSection/home/homeHeroSection";
import Mission from "../components/websiteSection/home/mission";
import Partners from "../components/websiteSection/home/partners";
import Services from "../components/websiteSection/home/services";

const HomePage = () => {
  return (
    <Layout>
      <HomeHeroSection />
      <About />
      <Services />
      <Mission />
      <DreamAchiever />
      <Partners />
      <Courses />
    </Layout>
  );
};

export default HomePage;
