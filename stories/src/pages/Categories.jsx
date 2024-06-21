import { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { FaFilter, FaChevronRight, FaChevronDown } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";

import SwiperNavButtons from "../components/SwiperNavButtons";
import ArrivalCard from "../components/ArrivalCard";

const newArrivals = [
  {
    imgUrl: "/Bathroob/1.jpg",
    name: "Product name orem ipsum dolor sit",
    price: "000",
  },
  {
    imgUrl: "/raw/1.jpg",
    name: "Product name orem ipsum dolor sit",
    price: "000",
  },
  {
    imgUrl: "/Towels/1.jpg",
    name: "Product name orem ipsum dolor sit",
    price: "000",
  },
  {
    imgUrl: "/Bathroob/5.jpg",
    name: "Product name orem ipsum dolor sit",
    price: "000",
  },
  {
    imgUrl: "/Towels/2.jpg",
    name: "Product name orem ipsum dolor sit",
    price: "000",
  },
  {
    imgUrl: "/raw/13.jpg",
    name: "Product name orem ipsum dolor sit",
    price: "000",
  },
  {
    imgUrl: "/Bathroob/9.jpg",
    name: "Product name orem ipsum dolor sit",
    price: "000",
  },
  {
    imgUrl: "/Towels/3.jpg",
    name: "Product name orem ipsum dolor sit",
    price: "000",
  },
  {
    imgUrl: "/Bathroob/13.jpg",
    name: "Product name orem ipsum dolor sit",
    price: "000",
  },
  {
    imgUrl: "/Towels/4.jpg",
    name: "Product name orem ipsum dolor sit",
    price: "000",
  },
];

const SectionProducts = styled.section`
  position: relative;
  padding: 32px 0;
  padding-bottom: 48px;
  border-top: 2px solid var(--tertiary-color);
`;

const ProductsContainer = styled.div`
  display: flex;
`;

const SectionTitle = styled.h2`
  color: var(--primary-color);
  text-transform: uppercase;
  max-width: max-content;
  font-size: 2rem;
  font-weight: 400;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -60%);
  background-color: white;
  padding: 0 24px;
`;
const SectionArrivals = styled.section`
  background-color: var(--secondary-color);
  margin-bottom: 0;

  ${SectionTitle} {
    position: relative;
    background-color: transparent;
    font-size: 2.5rem;
  }

  .swiper-slide {
    width: 400px;
    aspect-ratio: 1;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

const Btn = styled.button`
  background: none;
  border: none;
  color: var(--primary-color);
  font-family: var(--secondary-font);
  font-size: 1.25rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.2s ease-in;

  span {
    gap: 6px;
  }

  & > svg {
    transition: all 1s ease;
  }

  &:hover {
    background-color: transparent;
  }

  .arrow {
    transform: rotate(0);
    transition: all 0.1s ease-in;
  }

  &.open-filter {
    .arrow {
      transform: rotate(180deg);
    }
  }
`;

const Products = styled.div`
  flex: 6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 24px;
  row-gap: 64px;
  margin-bottom: 48px;
`;

const Pagination = styled.div`
  gap: 8px;
  font-size: 1.4rem;
  color: var(--primary-color);

  .active {
    color: var(--tertiary-color);
    border-bottom: 1px solid currentColor;
  }

  .seperator {
    height: fit-content;
  }
`;

const BtnPagination = styled.button`
  background: none;
  border: none;
  font-size: inherit;
  color: inherit;
  display: flex;
  align-items: center;
  line-height: 1;
  gap: 4px;
  justify-content: center;
  cursor: pointer;

  svg {
    line-height: 1;
    margin-top: 4px;
    transition: transform 0.2s ease-in;
  }

  &:hover svg {
    transform: translateX(2px);
  }
`;

function Categories() {
  const products = newArrivals.slice(0, 9);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <main>
      <SectionProducts className="section container">
        <SectionTitle>CATEGORY NAME</SectionTitle>
        <Header>
          <Btn
            onClick={() => setIsFilterOpen((curr) => !curr)}
            className={isFilterOpen ? "open-filter" : ""}
          >
            <span className="flex-center">
              <FaFilter size={18} />
              Filter
            </span>
            <FaChevronRight className="arrow" size={18} />
          </Btn>

          <Btn className="flex-center">
            <span>Features</span>
            <FaChevronDown size={18} />
          </Btn>
        </Header>

        <ProductsContainer
          className={`container ${isFilterOpen ? "open-filter" : ""}`}
        >
          {isFilterOpen && <Filter />}
          <Products>
            {products.map((item, idx) => (
              <ProductCard key={idx} item={item} />
            ))}
          </Products>
        </ProductsContainer>
        <Pagination className="flex-center">
          <span className="active">1</span>
          <span>2</span>
          <span className="seperator flex-center">.</span>
          <BtnPagination>
            Next <FaChevronRight size={20} />
          </BtnPagination>
        </Pagination>
      </SectionProducts>
      <SectionArrivals className="section">
        <SectionTitle>NEW ARRIVALS</SectionTitle>
        <Swiper
          modules={[Navigation]}
          loop={true}
          centeredSlides={true}
          spaceBetween={12}
          slidesPerView={"auto"}
          grabCursor={true}
        >
          {newArrivals.map((item, idx) => (
            <SwiperSlide key={idx}>
              <ArrivalCard item={item} />
            </SwiperSlide>
          ))}
          <SwiperNavButtons />
        </Swiper>
      </SectionArrivals>
    </main>
  );
}

const filterCategoryOptions = [
  {
    value: "travelTowels",
    label: "Travel Towels",
  },
  {
    value: "bathrobes",
    label: "Bathrobes",
  },
  {
    value: "handTowels",
    label: "Hand Towels",
  },
  {
    value: "kids",
    label: "Kids",
  },
];

const filterColorOptions = [
  {
    value: "blue",
    label: "Blue",
  },
  {
    value: "green",
    label: "Green",
  },
  {
    value: "red",
    label: "Red",
  },
  {
    value: "yellow",
    label: "Yellow",
  },
  {
    value: "pink",
    label: "Pink",
  },
  {
    value: "others",
    label: "Others",
  },
];

const FilterWrapper = styled.aside`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 28px;
  transition: all 0.2s ease-in;
`;

const FilterType = styled.div`
  color: var(--primary-color);
`;

const FilterTitle = styled.h2`
  font-size: var(--normal-font-size);
  letter-spacing: 1px;
  margin-bottom: 16px;
`;

const FilterOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > div {
    font-size: var(--small-font-size);
    display: flex;
    align-items: center;
    gap: 8px;

    label {
      font-family: var(--secondary-font);
      line-height: 1;
    }
  }
`;

function Filter() {
  //   const [categories, setCategories] = useState({
  //     travelTowels: false,
  //     bathrobes: false,
  //     handTowels: false,
  //     kids: false,
  //   });
  //   const [colors, setColors] = useState({
  //     blue: false,
  //     pink: false,
  //     green: false,
  //     red: false,
  //     yellow: false,
  //     others: false,
  //   });
  return (
    <FilterWrapper>
      <FilterType>
        <FilterTitle>CATEGORIES</FilterTitle>
        <FilterOptions>
          {filterCategoryOptions.map((option) => (
            <div key={option.value}>
              <input type="checkbox" name={option.value} id={option.value} />
              <label htmlFor={option.value}>{option.label}</label>
            </div>
          ))}
        </FilterOptions>
      </FilterType>
      <FilterType>
        <FilterTitle>COLOUR</FilterTitle>
        <FilterOptions>
          {filterColorOptions.map((option) => (
            <div key={option.value}>
              <input type="checkbox" name={option.value} id={option.value} />
              <label htmlFor={option.value}>{option.label}</label>
            </div>
          ))}
        </FilterOptions>
      </FilterType>
    </FilterWrapper>
  );
}

const ProductWrapper = styled.article``;

const ImgBox = styled.div`
  margin-bottom: 12px;
  overflow: hidden;
  img {
    width: 100%;
  }
`;
const Details = styled.div`
  color: var(--primary-color);
  font-size: 1.25rem;
  text-align: left;

  p {
    color: inherit;
    line-height: 1;
  }
`;

const Name = styled.p`
  margin-bottom: 8px;
`;

const Price = styled.p``;

function ProductCard({ item }) {
  return (
    <ProductWrapper>
      <ImgBox>
        <img src={item.imgUrl || "/placeholder.webp"} />
      </ImgBox>
      <Details>
        <Name>{item.name}</Name>
        <Price>
          <span>₹ {item.price}</span>
        </Price>
      </Details>
    </ProductWrapper>
  );
}

export default Categories;
