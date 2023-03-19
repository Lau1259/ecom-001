import {
  FooterContainer,
  FooterList,
  FooterListTitle,
  FooterLogo,
  FooterSocialContainer,
} from "./styles";
import logo from "../../assets/logo.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faYoutubeSquare,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

library.add(faFacebookSquare, faGithubSquare, faYoutubeSquare);

interface Props {
  //Describe Props
}

const Footer = ({}) => {
  return (
    <FooterContainer>
      <FooterList>
        <FooterListTitle>TITLE</FooterListTitle>
        <li>Test Info</li>
        <li>Test Info</li>
        <li>Test Info</li>
      </FooterList>
      <FooterLogo src={logo} />
      <FooterList>
        <FooterListTitle>Contact Us</FooterListTitle>
        <FooterSocialContainer>
          <FontAwesomeIcon size="lg" icon={["fab", "facebook-square"]} />
          <FontAwesomeIcon size="lg" icon={["fab", "youtube-square"]} />
          <FontAwesomeIcon size="lg" icon={["fab", "github-square"]} />
        </FooterSocialContainer>
      </FooterList>
    </FooterContainer>
  );
};

export default Footer;
