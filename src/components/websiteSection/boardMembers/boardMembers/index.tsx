import {
  Card,
  Image,
  InnerSection,
  MainSection,
  Text,
  TitleText,
} from "../../../../ui/styles";

const galleryDetails = [
  {
    Image:
      "https://res.cloudinary.com/dyozdezpg/image/upload/v1680602382/Fountainpay-V2_Assets/Rectangle_4195-3_a9epmu.png",
    details: "Surname Firstname",
    office: "Office held"
  },
  {
    Image:
      "https://res.cloudinary.com/dyozdezpg/image/upload/v1680602382/Fountainpay-V2_Assets/Rectangle_4195-3_a9epmu.png",
    details: "Surname Firstname",
    office: "Office held"
  },
  {
    Image:
      "https://res.cloudinary.com/dyozdezpg/image/upload/v1680602382/Fountainpay-V2_Assets/Rectangle_4195-3_a9epmu.png",
    details: "Surname Firstname",
    office: "Office held"
  },
  {
    Image:
      "https://res.cloudinary.com/dyozdezpg/image/upload/v1680602382/Fountainpay-V2_Assets/Rectangle_4195-3_a9epmu.png",
    details: "Surname Firstname",
    office: "Office held"
  },
  {
    Image:
      "https://res.cloudinary.com/dyozdezpg/image/upload/v1680602382/Fountainpay-V2_Assets/Rectangle_4195-3_a9epmu.png",
    details: "Surname Firstname",
    office: "Office held"
  },
  {
    Image:
      "https://res.cloudinary.com/dyozdezpg/image/upload/v1680602382/Fountainpay-V2_Assets/Rectangle_4195-3_a9epmu.png",
    details: "Surname Firstname",
    office: "Office held"
  },
  {
    Image:
      "https://res.cloudinary.com/dyozdezpg/image/upload/v1680602382/Fountainpay-V2_Assets/Rectangle_4195-3_a9epmu.png",
    details: "Surname Firstname",
    office: "Office held"
  },
  {
    Image:
      "https://res.cloudinary.com/dyozdezpg/image/upload/v1680602382/Fountainpay-V2_Assets/Rectangle_4195-3_a9epmu.png",
    details: "Surname Firstname",
    office: "Office held"
  },
  {
    Image:
      "https://res.cloudinary.com/dyozdezpg/image/upload/v1680602382/Fountainpay-V2_Assets/Rectangle_4195-3_a9epmu.png",
    details: "Surname Firstname",
    office: "Office held"
  },
  {
    Image:
      "https://res.cloudinary.com/dyozdezpg/image/upload/v1680602382/Fountainpay-V2_Assets/Rectangle_4195-3_a9epmu.png",
    details: "Surname Firstname",
    office: "Office held"
  },
  {
    Image:
      "https://res.cloudinary.com/dyozdezpg/image/upload/v1680602382/Fountainpay-V2_Assets/Rectangle_4195-3_a9epmu.png",
    details: "Surname Firstname",
    office: "Office held"
  },
  {
    Image:
      "https://res.cloudinary.com/dyozdezpg/image/upload/v1680602382/Fountainpay-V2_Assets/Rectangle_4195-3_a9epmu.png",
    details: "Surname Firstname",
    office: "Office held"
  },
  {
    Image:
      "https://res.cloudinary.com/dyozdezpg/image/upload/v1680602382/Fountainpay-V2_Assets/Rectangle_4195-3_a9epmu.png",
    details: "Surname Firstname",
    office: "Office held"
  },
  {
    Image:
      "https://res.cloudinary.com/dyozdezpg/image/upload/v1680602382/Fountainpay-V2_Assets/Rectangle_4195-3_a9epmu.png",
    details: "Surname Firstname",
    office: "Office held"
  },
  {
    Image:
      "https://res.cloudinary.com/dyozdezpg/image/upload/v1680602382/Fountainpay-V2_Assets/Rectangle_4195-3_a9epmu.png",
    details: "Surname Firstname",
    office: "Office held"
  },
  {
    Image:
      "https://res.cloudinary.com/dyozdezpg/image/upload/v1680602382/Fountainpay-V2_Assets/Rectangle_4195-3_a9epmu.png",
    details: "Surname Firstname",
    office: "Office held"
  },
];
const BoardMembers = () => {
  return (
    <MainSection width="100%" mtop="50px">
      <InnerSection>
        <Card
          display="grid"
          gridcolumn="repeat(4, 1fr)"
          mdgridcolumn="1fr 1fr"
          smgridcolumn="1fr"
          gap="32px"
        >
          {galleryDetails.map((item, index) => (
            <Card>
              <Card
                key={index}
                radius="24px"
                overflow="hidden"
              >
                <Image src={item.Image} alt={item.details} width="100%" />
              </Card>
              <TitleText size="24px" lineheight="32px" weight="700">
                {item.details}
              </TitleText>
              <Text size="20px" lineheight="24px" weight="500">
                {item.office}
              </Text>
            </Card>
          ))}
        </Card>
      </InnerSection>
    </MainSection>
  );
};

export default BoardMembers;
