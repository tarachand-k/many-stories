import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const navLinks = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "CATEGORIES",
    to: "/categories",
  },
  {
    label: "PERSONLISED",
    to: "/personlised",
  },
  {
    label: "COLLECTIONS",
    to: "/collections",
  },
  {
    label: "GIFTING",
    to: "/gifting",
  },
  {
    label: "ABOUT",
    to: "/about",
  },
];

const Wrapper = styled.header`
  background-color: var(--primary-color);
  margin-bottom: 12px;
`;

const Top = styled.div`
  background-color: var(--primary-color);
  color: var(--secondary-color);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 16px 0;
  padding-bottom: 24px;
`;

const SearchBox = styled.form`
  display: flex;
  gap: 16px;
  align-items: center;
  svg {
    color: var(--secondary-color);
  }
`;

const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 2px solid var(--secondary-color);
  flex: 1;
  font-family: var(--secondary-font);
  color: var(--secondary-color);
  font-size: 1.25rem;
  padding-bottom: 4px;

  &::placeholder {
    color: var(--primary-color-light);
    font-style: italic;
    font-weight: 300;
    letter-spacing: 0.25ch;

    font-size: 1.25rem;
  }
`;

const Logo = styled.div`
  margin-bottom: -6px;
  img {
    width: 210px;
    height: 60px;
  }
`;

const TopRight = styled.div`
  display: flex;
  align-items: center;

  a:not(:last-child) {
    padding-right: 18px;
    border-right: 2px solid var(--secondary-color);
  }

  a:last-child {
    padding-left: 18px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

const NavBar = styled.nav`
  background-color: var(--white);
  border-bottom: 2px solid var(--primary-color-light);
  padding: 12px 0;

  ul {
    margin: 0 auto;
    gap: 96px;

    a {
      flex: 1;
      color: var(--primary-color-light);
      font-size: 1.25rem;
      transition: all 0.2s ease-in;
    }

    a:hover,
    a.active {
      color: var(--tertiary-color);
    }
  }
`;

function Header() {
  return (
    <Wrapper>
      <Top className="container">
        <SearchBox>
          <FaSearch size={20} />
          <SearchInput type="text" placeholder="Search product" />
        </SearchBox>

        <Logo>
          <img src="/logo.png" alt="" />
        </Logo>

        <TopRight>
          <Link to="/account">ACCOUNT</Link>
          <Link>
            <span>CART</span>
            <FaCartShopping />
          </Link>
        </TopRight>
      </Top>
      <NavBar>
        <div className="container">
          <ul className="flex-center">
            {navLinks.map((item, idx) => (
              <li key={idx}>
                <NavLink to={item.to}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </NavBar>
    </Wrapper>
  );
}

export default Header;
