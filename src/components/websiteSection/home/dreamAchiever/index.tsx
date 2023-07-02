import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Image,
  InnerSection,
  MainSection,
  Text,
  TitleText,
  black,
  primaryBlue,
  white,
} from "../../../../ui/styles";

const DreamAchiever = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/gallery");
  };
  return (
    <MainSection width="100%" mtop="150px">
      <InnerSection>
        <Card
          flex
          flexdirection="row-reverse"
          alignitems="center"
          gap="80px"
          smflexdirection="column"
        >
          <Card
            flex
            flexdirection="column"
            gap="44px"
            smgap="40px"
            justifycontent="space-between"
            flexratio="1"
          >
            <TitleText
              size="48px"
              lineheight="72px"
              color={black}
              weight="700"
              margin="-60px 0 0"
              smsize="28px"
              smlineheight="32px"
            >
              We are committed to helping you in the process of achieving your
              dreams
            </TitleText>

            <Text size="18px" lineheight="32px" color={black} smsize="18px">
              Lorem ipsum dolor sit amet consectetur. Nibh proin proin eget
              neque. Tortor tempus massa dui viverra in justo gravida. At justo
              eget volutpat leo fermentum scelerisque cursus sit donec. Nisl id
              velit faucibus vel. Amet cras diam non habitasse a arcu. Urna
              nulla felis diam nisl et.
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
              Explore our gallery
            </Button>
          </Card>
          <Card
            flexratio="1"
            position="relative"
            width="100%"
            overflow="hidden"
          >
            <Image src="assets/homebg.svg" alt="image" smwidth="100%"/>
            <Image
              src="assets/dream-achiever.png"
              alt="school-boy"
              position="absolute"
              left="50%"
              transform="translateX(-50%)"
              bottom="0"
              width="60%"
              smwidth="55%"
            />
          </Card>
        </Card>
      </InnerSection>
    </MainSection>
  );
};

export default DreamAchiever;
