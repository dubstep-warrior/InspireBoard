import { Wrapper, Content, Logo, Icon } from "./Header.styles";
import Image from "../../Logo/logo.png";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    // Header Wrapper to design layout of navigation bar
    <Wrapper>
      {/* Content Wrapper to organize the navigational components in the middle */}
      <Content>
        {/* Link Component of the react-router dom to add an anchor on the component it wraps around */}
        <Link to="/react-pinterest-clone/home">
          {/* Logo Component containing logo image links to "/" route */}
          <Logo src={Image} />
        </Link>
        <Link to="/react-pinterest-clone/personal">
          {/* Icon Wrapper for logo, links to "/personal" route */}
          <Icon>
            {/* CgProfile component from react-icons */}
            <CgProfile className="profile" />
          </Icon>
        </Link>
      </Content>
    </Wrapper>
  );
};

export default Header;
