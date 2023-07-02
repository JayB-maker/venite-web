import {
  Button,
  Card,
  black,
  InnerSection,
  MainSection,
  primaryBlue,
  Text,
  TitleText,
  white,
  Image,
} from "../../../../ui/styles";
import {} from "../../../../ui/styles";
import { useNavigate } from "react-router-dom";

const HomeHeroSection = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/contact");
  };
  return (
    <MainSection width="100%" mtop="20px" smmargin="100px 0 0">
      <InnerSection>
        <Card flex alignitems="center" gap="24px" smflexdirection="column">
          <Card
            flex
            flexdirection="column"
            gap="44px"
            justifycontent="space-between"
            flexratio="1"
            smgap="20px"
          >
            <TitleText
              size="52px"
              lineheight="72px"
              color={black}
              weight="700"
              margin="-60px 0 0"
              smsize="32px"
              smlineheight="36px"
            >
              Search and find your best courses with easy way
            </TitleText>

            <Text size="18px" lineheight="32px" color={black}>
              Lorem ipsum dolor sit amet consectetur. Proin amet ac nunc porta
              volutpat semper donec eget. Bibendum gravida sagittis tortor eu
              sit. Tempor molestie eget sit lorem.
            </Text>
            <Button
              margin="12px 0 0"
              bg={black}
              radius="8px"
              color={white}
              padding="16px 32px"
              hoverbg={primaryBlue}
              width="fit-content"
              onClick={handleNavigate}
            >
              Contact Us
            </Button>
          </Card>
          <Card flexratio="1" position="relative" width="100%" overflow="hidden">
            <Image src="assets/homebg.svg" alt="image" smwidth="100%" />
            <Image
              src="assets/home.png"
              alt="school-boy"
              position="absolute"
              left="50%"
              transform="translateX(-50%)"
              bottom="0"
              width="80%"
              smwidth="70%"
            />
          </Card>
        </Card>
      </InnerSection>
    </MainSection>
  );
};

export default HomeHeroSection;
