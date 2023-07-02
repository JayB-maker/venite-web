import {
  Card,
  Image,
  InnerSection,
  MainSection,
  Text,
  TitleText,
  gray,
  white,
} from "../../../../ui/styles";

const missionDetails = [
  {
    title: "Mission",
    details:
      "Learn various UI UX Design materials including UX Research, UI Design, UX Writing, and Product Design for 4.5 months with professionals  product designer practitioners.",
  },
  {
    title: "Vision",
    details:
      "Learn various UI UX Design materials including UX Research, UI Design, UX Writing, and Product Design for 4.5 months with professionals  product designer practitioners.",
  },
];

const Mission = () => {
  return (
    <MainSection width="100%" bg={gray} mtop="150px" padding="80px 0">
      <InnerSection>
        <Card flex flexdirection="column" gap="80px" smgap="40px" alignitems="center">
          <TitleText size="48px" lineheight="56px" center smsize="28px" smlineheight="32px">
            Our mission and vission statement
          </TitleText>
          <Card
            display="grid"
            gridcolumn="1fr 1fr"
            mdgridcolumn="1fr 1fr"
            smgridcolumn="1fr"
            gap="24px"
          >
            {missionDetails.map((item, index) => (
              <Card
                key={index}
                padding="32px"
                bg={white}
                radius="24px"
                flex
                flexdirection="column"
                gap="16px"
              >
                <Image src="assets/course.svg" alt="course" width="30px" />
                <TitleText size="24px" lineheight="32px" weight="700">
                  {item.title}
                </TitleText>
                <Text size="18px" lineheight="32px" weight="400">
                  {item.details}
                </Text>
              </Card>
            ))}
          </Card>
        </Card>
      </InnerSection>
    </MainSection>
  );
};

export default Mission;
