import {
  Card,
  Image,
  InnerSection,
  MainSection,
  Text,
  TitleText,
  gray,
} from "../../../../ui/styles";

const courseDetails = [
  {
    course: "Product Designer",
    details:
      "Learn various UI UX Design materials including UX Research, UI Design, UX Writing, and Product Design for 4.5 months with professionals  product designer practitioners.",
  },
  {
    course: "Product Designer",
    details:
      "Learn various UI UX Design materials including UX Research, UI Design, UX Writing, and Product Design for 4.5 months with professionals  product designer practitioners.",
  },
  {
    course: "Product Designer",
    details:
      "Learn various UI UX Design materials including UX Research, UI Design, UX Writing, and Product Design for 4.5 months with professionals  product designer practitioners.",
  },
  {
    course: "Product Designer",
    details:
      "Learn various UI UX Design materials including UX Research, UI Design, UX Writing, and Product Design for 4.5 months with professionals  product designer practitioners.",
  },
  {
    course: "Product Designer",
    details:
      "Learn various UI UX Design materials including UX Research, UI Design, UX Writing, and Product Design for 4.5 months with professionals  product designer practitioners.",
  },
  {
    course: "Product Designer",
    details:
      "Learn various UI UX Design materials including UX Research, UI Design, UX Writing, and Product Design for 4.5 months with professionals  product designer practitioners.",
  },
];

const Courses = () => {
  return (
    <MainSection width="100%" mtop="150px">
      <InnerSection>
        <Card flex flexdirection="column" gap="80px" smgap="40px" alignitems="center">
          <TitleText size="48px" lineheight="56px" center smsize="28px" smlineheight="32px">
            Our best courses for you
          </TitleText>
          <Card
            display="grid"
            gridcolumn="repeat(3, 1fr)"
            mdgridcolumn="1fr 1fr"
            smgridcolumn="1fr"
            gap="24px"
          >
            {courseDetails.map((item, index) => (
              <Card
                key={index}
                padding="32px"
                bg={gray}
                radius="24px"
                flex
                flexdirection="column"
                gap="16px"
              >
                <Image src="assets/course.svg" alt="course" width="30px" />
                <TitleText size="24px" lineheight="32px" weight="700">
                  {item.course}
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

export default Courses;
