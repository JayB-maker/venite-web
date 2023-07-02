import { navDetails } from "../../../data";
import { Card, Image, LinkText, black, primaryBlue } from "../../../ui/styles";

const RightDiv = (props: { mobileNav: any; setMobileNav: any }) => {
  const { mobileNav, setMobileNav } = props;
  return (
    <>
      <Card flex alignitems="center" gap="24px" smdisplay="none">
        {navDetails.map((nav, index) => (
          <LinkText
            to={nav.path}
            key={index}
            color={black}
            size="14px"
            hcolor={primaryBlue}
          >
            {nav.nav}
          </LinkText>
        ))}
      </Card>
      <Card
        pointer
        display="none"
        smdisplay="block"
        onClick={() => setMobileNav(!mobileNav)}
      >
        <Image
          src={mobileNav ? "assets/close.svg" : "assets/open.svg"}
          alt={mobileNav ? "close" : "open"}
          width="60%"
        />
      </Card>
    </>
  );
};

export default RightDiv;
