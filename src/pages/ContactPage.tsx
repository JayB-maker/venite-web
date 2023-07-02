import Layout from "../components/layout";
import Contact from "../components/websiteSection/contact/contact";
import ContactHeroSection from "../components/websiteSection/contact/contactHeroSection";

const ContactPage = () => {
  return (
    <Layout>
      <ContactHeroSection />
      <Contact />
    </Layout>
  );
};

export default ContactPage;
