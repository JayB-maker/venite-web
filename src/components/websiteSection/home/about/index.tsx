import { Button, Card, InnerSection, MainSection, Text, TitleText, black, gray, primaryBlue, white } from "../../../../ui/styles"

const About = () => {
  return (
    <MainSection bg={gray} width="100%" padding="138px 0" smpadding="50px 0" mtop="150px">
      <InnerSection>
        <Card flex flexdirection="column" alignitems="center">
          <Card flex flexdirection="column" alignitems="center" gap="24px">
            <TitleText
              size="48px"
              lineheight="54px"
              weight="700"
              center
              width="813px"
              mdwidth="100%"
              smsize="28px"
              smlineheight="32px"
            >
              About Venite University
            </TitleText>
            <Text size="18px" weight="500" width="613px" mdwidth="100%" center lineheight="24px">
              WOC has contributed to students so that they can work in their
              dream company, we will continue to stick to our commitment to
              create an advanced generation,
            </Text>
            <Button
              margin="12px 0 0"
              bg={black}
              radius="8px"
              color={white}
              padding="16px 32px"
              hoverbg={primaryBlue}
              width="fit-content"
            >
              Download Brocure
            </Button>
          </Card>
        </Card>
      </InnerSection>
    </MainSection>
  )
}

export default About