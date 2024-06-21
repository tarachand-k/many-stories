import { useState } from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import SwiperNavButtons from "../components/SwiperNavButtons";
import ArrivalCard from "../components/ArrivalCard";

const bannerImages = [
  "https://www.nappadori.com/cdn/shop/files/TE-SALE-BANNER_1800x.jpg?v=1715749703",
  "https://www.nappadori.com/cdn/shop/files/apple-leather-desktop_3_1800x.jpg?v=1712745074",
  "https://www.nappadori.com/cdn/shop/files/rover-new-desktop_26453435-d4b2-4362-90de-cb9698146964_1800x.jpg?v=1708593636",
  "https://www.nappadori.com/cdn/shop/files/clothing-b1_1800x.jpg?v=1714047497",
];

const categories = [
  {
    imgUrl: "/bath.jpg",
    type: "Bath",
  },
  {
    imgUrl: "/home-accent.jpg",
    type: "Home Accents",
  },
  {
    imgUrl: "/bedding.jpg",
    type: "Bedding",
  },
  {
    imgUrl: "/kids.jpg",
    type: "Kids",
  },
];

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

const instaStories = [
  {
    account: "@test",
    imgUrl: "",
  },
  {
    account: "@test",
    imgUrl: "",
  },
  {
    account: "@test",
    imgUrl: "",
  },
  {
    account: "@test",
    imgUrl: "",
  },
  {
    account: "@test",
    imgUrl: "",
  },
  {
    account: "@test",
    imgUrl: "",
  },
];

const Wrapper = styled.main``;

const SectionHero = styled.section`
height: 712px;
  position: relative;
  /* overflow: hidden; */
  @keyframes imgAnimate {
    from {
      opacity: 0.1;
    }
    to {
      transform: opacity: 1;
    }
  }
  overflow: hidden;
`;

const Img = styled.img`
  object-fit: cover;
  animation: imgAnimate 2s;
`;

const SectionReadMore = styled.section`
  text-align: center;
  margin: 0;

  p {
    width: 80%;
    margin: 0 auto;
    font-size: 1.5rem;
    font-family: var(--secondary-font);
    letter-spacing: 1.5px;
    font-weight: 300;

    span {
      color: var(--primary-color);
      text-decoration: underline;
      cursor: pointer;
      display: block;
      font-family: var(--body-font);
      font-weight: 500;
      margin-top: 4px;
    }
  }
`;

const SectionCategory = styled.section`
  padding: 62px 48px;
  margin-bottom: 180px;
  width: max-content;
  position: relative;
  border: 2px solid var(--tertiary-color);
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
  padding: 0 16px;
`;
const CategoryImgs = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 36px;
`;
const CategoryImgBox = styled.div`
  & > div {
    background-color: rgba(0, 0, 0, 0.05);
    width: 280px;
    height: 320px;
    margin-bottom: 24px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
const CategoryType = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  color: var(--text-color-dark);
  font-weight: normal;
`;

const SectionArrivals = styled.section`
  background-color: var(--secondary-color);

  ${SectionTitle} {
    position: relative;
    background-color: transparent;
    font-size: 2.5rem;
  }

  .swiper-slide {
    width: 400px;
  }
`;

const SectionGifting = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  & > div {
    flex: 1;
    padding: 24px;
  }

  ${SectionTitle} {
    position: relative;
    text-align: left;
    transform: translate(0, 0);
    font-size: 2.25rem;
    left: 0;
    padding: 0;

    margin-bottom: 48px;
  }

  & > div:first-of-type {
    padding-right: 36px;

    p {
      font-size: 1.5rem;
      font-weight: 300;
    }
  }

  & > div:last-of-type {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 36px;
    overflow: hidden;

    img {
      display: inline-block;
      width: 100%;
      max-height: 400px;
      object-fit: cover;
    }
  }
`;

const SectionSubtitle = styled.h3`
  font-family: var(--secondary-font);
  font-weight: 300;
  font-size: 1.25rem;
  letter-spacing: 3px;
  margin-bottom: 4px;
`;

const ImgWrapper = styled.div`
  width: 90%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SectionCollection = styled.section`
  padding: 62px 36px;
  padding-bottom: 36px;

  position: relative;
  border: 2px solid var(--tertiary-color);
  margin-bottom: 64px;
`;

const CollectionImgBox = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.04);
  align-items: center;

  img {
    display: flex;
    margin: 0 auto;
  }
`;

const SectionInstagram = styled.section`
  h2 {
    color: var(--primary-color);
    text-align: center;
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 48px;

    a {
      font-size: 2rem;
      color: var(--primary-color-light);
    }

    a:hover {
      color: var(--primary-color);
    }
  }

  .swiper-slide {
    width: 300px;
    height: 300px;
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

const InstaStory = styled.div``;

function Home() {
  const [isReadOpen, setIsReadOpen] = useState(false);
  return (
    <Wrapper>
      <SectionHero>
        <Swiper loop={true} modules={[Navigation]}>
          {bannerImages.map((img) => (
            <SwiperSlide key={img}>
              <Img src={img} alt="" />
            </SwiperSlide>
          ))}

          <SwiperNavButtons autoScroll={true} />
        </Swiper>
      </SectionHero>

      <SectionReadMore className="section">
        <div className="container">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip
            {isReadOpen
              ? " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat."
              : "..."}
            <span onClick={() => setIsReadOpen((curr) => !curr)}>
              {!isReadOpen ? "Read More" : "Read Less"}
            </span>
          </p>
        </div>
      </SectionReadMore>

      <SectionCategory className="section container">
        <SectionTitle>SHOP BY CATEGORY</SectionTitle>
        <CategoryImgs>
          {categories.map((item) => (
            <CategoryImgBox key={item.type}>
              <div>
                <img src={item.imgUrl} alt="" />
              </div>
              <CategoryType>{item.type}</CategoryType>
            </CategoryImgBox>
          ))}
        </CategoryImgs>
      </SectionCategory>

      <SectionArrivals className="section">
        <SectionTitle>NEW ARRIVALS</SectionTitle>
        <Swiper
          modules={[Navigation]}
          loop={true}
          centeredSlides={true}
          spaceBetween={24}
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

      <SectionGifting className="section container">
        <div>
          <SectionSubtitle className="section_subtitle">
            OUR PREMIUM SERVICE
          </SectionSubtitle>
          <SectionTitle className="section_title">
            PERSONALISED GIFTING
          </SectionTitle>

          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>
        </div>
        <div>
          <ImgWrapper>
            <img src="/placeholder.webp" />
          </ImgWrapper>
        </div>
      </SectionGifting>

      <SectionCollection className="section container">
        <SectionTitle>COLLECTION NAME</SectionTitle>

        <CollectionImgBox>
          <img src={bannerImages[0]} alt="" />
        </CollectionImgBox>
      </SectionCollection>

      <SectionInstagram className="section">
        <h2>
          Follow <a href="#">@ManyStories</a> On Instagram
        </h2>

        <Swiper
          spaceBetween={24}
          modules={[Navigation]}
          loop={true}
          slidesPerView={"auto"}
          grabCursor={true}
        >
          {instaStories.map((item, idx) => (
            <SwiperSlide key={idx}>
              <InstaStory>
                <img src={item.imgUrl} alt="" />
              </InstaStory>
            </SwiperSlide>
          ))}
          <SwiperNavButtons autoScroll={true} />
        </Swiper>
      </SectionInstagram>
    </Wrapper>
  );
}

export default Home;
