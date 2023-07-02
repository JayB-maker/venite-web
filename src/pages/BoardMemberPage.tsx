import Layout from "../components/layout";
import BoardHeroSection from "../components/websiteSection/boardMembers/boardHeroSection";
import BoardMembers from "../components/websiteSection/boardMembers/boardMembers";

const BoardMemberPage = () => {
  return (
    <Layout>
      <BoardHeroSection />
      <BoardMembers />
    </Layout>
  );
};

export default BoardMemberPage;
