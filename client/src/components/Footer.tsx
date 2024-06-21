import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.footer`
  border-top: 2px solid var(--border-color);
  padding-top: 48px;
  background-color: var(--primary-color);
  margin: 0;

  color: var(--secondary-color);

  & > div {
    grid-template-columns: repeat(2, max-content);
    justify-content: space-between;
    row-gap: 40px;
  }
`;

const Desc = styled.p`
  font-size: var(--small-font-size);
  font-weight: var(--font-medium);
  color: var(--secondary-color);
  padding-left: 12px;
  margin-top: 12px;
`;

const ContentBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, max-content);
  gap: 40px 64px;
  padding-bottom: 86px;
`;

const Title = styled.h3`
  text-transform: uppercase;
  color: var(--tertiary-color);
  margin-bottom: 16px;
`;

const Links = styled.ul`
  display: grid;
  row-gap: 8px;
`;

const NavLink = styled.a`
  color: var(--secondary-color);
  transition: 0.3s;

  &:hover {
    color: var(--primary-color-light);
  }
`;

const SocialLinks = styled.ul`
  display: flex;
  gap: 16px;
`;

const SocialLink = styled.a`
  font-size: 20px;
  color: var(--text-color);
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: var(--primary-color-light);
  }

  svg {
    color: var(--secondary-color);
  }

  svg: hover {
    color: var(--primary-color-light);
  }
`;

function Footer() {
  return (
    <Wrapper className="section">
      <div className="container grid">
        <div>
          <Link href="/">
            <img src="/logo.png" alt="" />
          </Link>
          <Desc>
            Our vision is to make all people <br /> the best place to live for
            them.
          </Desc>
        </div>

        <ContentBox>
          <div>
            <Title>About</Title>
            <Links>
              <li>
                <NavLink href="#">About Us</NavLink>
              </li>
              <li>
                <NavLink href="#">Features</NavLink>
              </li>
              <li>
                <NavLink href="#">News & Blog</NavLink>
              </li>
            </Links>
          </div>
          <div>
            <Title>Company</Title>
            <Links>
              <li>
                <NavLink href="#">How We Work?</NavLink>
              </li>
              <li>
                <NavLink href="#">Capital</NavLink>
              </li>
              <li>
                <NavLink href="#">Security</NavLink>
              </li>
            </Links>
          </div>
          <div>
            <Title>Support</Title>
            <Links>
              <li>
                <NavLink href="#">FAQs</NavLink>
              </li>
              <li>
                <NavLink href="#">Support center</NavLink>
              </li>
              <li>
                <NavLink href="#">Contact Us</NavLink>
              </li>
            </Links>
          </div>
          <div>
            <Title>Follow Us</Title>
            <SocialLinks>
              <SocialLink>
                <FaFacebook />
              </SocialLink>
              <SocialLink>
                <FaInstagram />
              </SocialLink>
              <SocialLink>
                <FaPinterest />
              </SocialLink>
            </SocialLinks>
          </div>
        </ContentBox>
      </div>
    </Wrapper>
  );
}

export default Footer;
