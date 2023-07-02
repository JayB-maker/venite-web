import {
  LinkText,
  TitleText,
  black,
  primaryBlue,
} from "../../../ui/styles";

const LeftDiv = () => {
  return (
    <>
      {/* <Image src="" alt="" /> */}
      <LinkText to="/">
        <TitleText weight="700" heavy color={black}>
          VENITE<span style={{ color: `${primaryBlue}` }}>UNIVERSITY</span>
        </TitleText>
      </LinkText>
    </>
  );
};

export default LeftDiv;
