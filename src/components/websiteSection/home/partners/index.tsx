import {
  Card,
  InnerSection,
  MainSection,
  Text,
  TitleText,
  gray,
} from "../../../../ui/styles";

const Partners = () => {
  return (
    <MainSection bg={gray} width="100%" padding="138px 0" smpadding="50px 0" mtop="150px">
      <InnerSection>
        <Card flex flexdirection="column" alignitems="center">
          <Card flex flexdirection="column" alignitems="center" gap="24px">
            <TitleText
              size="48px"
              smsize="28px"
              smlineheight="32px"
              lineheight="54px"
              weight="700"
              center
              width="813px"
              mdwidth="100%"
            >
              Collaborate with 100+ leading universities and companies
            </TitleText>
            <Text size="18px" weight="500" width="613px" mdwidth="100%" center lineheight="24px">
              WOC has contributed to students so that they can work in their
              dream company, we will continue to stick to our commitment to
              create an advanced generation,
            </Text>
          </Card>
        </Card>
      </InnerSection>
    </MainSection>
  );
};

export default Partners;
