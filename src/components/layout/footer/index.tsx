import { navDetails } from "../../../data";
import {
  Card,
  InnerSection,
  LinkText,
  MainSection,
  black,
  gray,
  primaryBlue,
} from "../../../ui/styles";

const Footer = () => {
  return (
    <MainSection width="100%" padding="32px 0" bg={gray} mtop="150px">
      <InnerSection>
        <Card flex alignitems="center" justifycontent="center" gap="32px">
          {navDetails.map((item, index) => (
            <LinkText
              to={item.path}
              color={black}
              size="14px"
              hcolor={primaryBlue}
              key={index}
            >
              {item.nav}
            </LinkText>
          ))}
        </Card>
      </InnerSection>
    </MainSection>
  );
};

export default Footer;
