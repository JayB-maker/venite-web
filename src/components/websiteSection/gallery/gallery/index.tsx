import {
  Card,
  Image,
  InnerSection,
  MainSection,
  TitleText,
} from "../../../../ui/styles";

const galleryDetails = [
  {
    Image:
      "https://res.cloudinary.com/dyozdezpg/image/upload/v1682497096/Fountainpay-V2_Assets/WhatsApp_Image_2023-04-19_at_12.08_2_wda8ty.svg",
    details: "Testing",
  },
  {
    Image:
      "https://res.cloudinary.com/dyozdezpg/image/upload/v1682497096/Fountainpay-V2_Assets/WhatsApp_Image_2023-04-19_at_12.08_2_wda8ty.svg",
    details: "Testing",
  },
  {
    Image:
      "https://res.cloudinary.com/dyozdezpg/image/upload/v1682497096/Fountainpay-V2_Assets/WhatsApp_Image_2023-04-19_at_12.08_2_wda8ty.svg",
    details: "Testing",
  },
  {
    Image:
      "https://res.cloudinary.com/dyozdezpg/image/upload/v1682497096/Fountainpay-V2_Assets/WhatsApp_Image_2023-04-19_at_12.08_2_wda8ty.svg",
    details: "Testing",
  },
  {
    Image:
      "https://res.cloudinary.com/dyozdezpg/image/upload/v1682497096/Fountainpay-V2_Assets/WhatsApp_Image_2023-04-19_at_12.08_2_wda8ty.svg",
    details: "Testing",
  },
  {
    Image:
      "https://res.cloudinary.com/dyozdezpg/image/upload/v1682497096/Fountainpay-V2_Assets/WhatsApp_Image_2023-04-19_at_12.08_2_wda8ty.svg",
    details: "Testing",
  },
  {
    Image:
      "https://res.cloudinary.com/dyozdezpg/image/upload/v1682497096/Fountainpay-V2_Assets/WhatsApp_Image_2023-04-19_at_12.08_2_wda8ty.svg",
    details: "Testing",
  },
  {
    Image:
      "https://res.cloudinary.com/dyozdezpg/image/upload/v1682497096/Fountainpay-V2_Assets/WhatsApp_Image_2023-04-19_at_12.08_2_wda8ty.svg",
    details: "Testing",
  },
  {
    Image:
      "https://res.cloudinary.com/dyozdezpg/image/upload/v1682497096/Fountainpay-V2_Assets/WhatsApp_Image_2023-04-19_at_12.08_2_wda8ty.svg",
    details: "Testing",
  },
  {
    Image:
      "https://res.cloudinary.com/dyozdezpg/image/upload/v1682497096/Fountainpay-V2_Assets/WhatsApp_Image_2023-04-19_at_12.08_2_wda8ty.svg",
    details: "Testing",
  },
  {
    Image:
      "https://res.cloudinary.com/dyozdezpg/image/upload/v1682497096/Fountainpay-V2_Assets/WhatsApp_Image_2023-04-19_at_12.08_2_wda8ty.svg",
    details: "Testing",
  },
  {
    Image:
      "https://res.cloudinary.com/dyozdezpg/image/upload/v1682497096/Fountainpay-V2_Assets/WhatsApp_Image_2023-04-19_at_12.08_2_wda8ty.svg",
    details: "Testing",
  },
  {
    Image:
      "https://res.cloudinary.com/dyozdezpg/image/upload/v1682497096/Fountainpay-V2_Assets/WhatsApp_Image_2023-04-19_at_12.08_2_wda8ty.svg",
    details: "Testing",
  },
  {
    Image:
      "https://res.cloudinary.com/dyozdezpg/image/upload/v1682497096/Fountainpay-V2_Assets/WhatsApp_Image_2023-04-19_at_12.08_2_wda8ty.svg",
    details: "Testing",
  },
  {
    Image:
      "https://res.cloudinary.com/dyozdezpg/image/upload/v1682497096/Fountainpay-V2_Assets/WhatsApp_Image_2023-04-19_at_12.08_2_wda8ty.svg",
    details: "Testing",
  },
  {
    Image:
      "https://res.cloudinary.com/dyozdezpg/image/upload/v1682497096/Fountainpay-V2_Assets/WhatsApp_Image_2023-04-19_at_12.08_2_wda8ty.svg",
    details: "Testing",
  },
];
const Gallery = () => {
  return (
    <MainSection width="100%" mtop="50px">
      <InnerSection>
        <Card
          display="grid"
          gridcolumn="repeat(3, 1fr)"
          mdgridcolumn="1fr 1fr"
          smgridcolumn="1fr"
          gap="24px"
        >
          {galleryDetails.map((item, index) => (
            <Card
              key={index}
            //   height="350px"
            //   width="100%"
              radius="24px"
              overflow="hidden"
            >
              <Image src={item.Image} alt={item.details} width="100%" />
              <TitleText size="24px" lineheight="32px" weight="700">
                {item.details}
              </TitleText>
            </Card>
          ))}
        </Card>
      </InnerSection>
    </MainSection>
  );
};

export default Gallery;
