import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import SwiperNavButtons from "../components/SwiperNavButtons";

const stories = [
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

const features = [
  {
    label: "HAND MADE",
    imgUrl: "/hand-made.png",
  },
  {
    label: "ORGANIC",
    imgUrl: "/organic.png",
  },
  {
    label: "SMALL BATCH",
    imgUrl: "/small.png",
  },
  {
    label: "ARTISANAL",
    imgUrl: "/artisnal.png",
  },
];

const Wrapper = styled.main`
  p {
    font-family: var(--secondary-font);
    font-weight: 300;
    font-size: var(--h1-font-size);
    line-height: 1.5;
  }
`;

const SectionBanner = styled.section`
  height: 700px;
  position: relative;
  margin: 0 auto;
  background-color: var(--primary-color);
`;

const Overlay = styled.div`
  height: 100%;
  margin: 0 auto;
  background: url("/about-banner.jpg");
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 60%;
    text-align: center;
  }

  h1 {
    font-size: 2.25rem;
    color: var(--white);
    font-weight: 400;
    margin-bottom: 24px;
  }

  p {
    font-family: var(--secondary-font);
    font-size: 1.25rem;
    line-height: 1.4;
    color: var(--secondary-color);
  }
`;

const SectionIntro = styled.section`
  margin-top: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  margin-bottom: 96px;

  & > div:first-child {
    flex: 2;
    padding-right: 64px;
    width: 50%;
  }
`;

const ImgWrapper = styled.div`
  flex: 2;
  width: 350px;
  height: 350px;
  justify-content: center;

  img {
    height: 120%;
  }
`;

const Section = styled.section`
  padding: 62px 48px;
  margin-bottom: 96px;
  width: max-content;
  position: relative;
  border: 2px solid var(--tertiary-color);

  p {
    text-align: center;
    padding: 0 24px;
  }

  .swiper {
    margin: 0 -48px;
    margin-top: 62px;
  }

  .swiper-slide {
    width: 300px;
    height: 300px;
    background-color: rgba(0, 0, 0, 0.04);
  }
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

const InstaStory = styled.div``;

const SectionFeatures = styled.section`
  gap: 48px;
  margin-top: 0;
  padding-top: 0;

  & > div {
    margin: 0 24px;
  }

  h3 {
    text-align: center;
    color: var(--text-color-darker);
  }
`;

const SectionFounder = styled.section`
  margin-bottom: 0;
  background-color: var(--secondary-color);

  ${SectionTitle} {
    position: relative;
    background-color: var(--secondary-color);
    margin-bottom: 24px;
  }
`;

const FeatureContainer = styled.div`
  display: flex;
  gap: 96px;

  h3 {
    font-size: 2.5rem;
  }
`;

const FounderTextBox = styled.div`
  flex: 2;

  p {
    padding-right: 86px;
    margin-bottom: 24px;
  }
`;

const FounderImgBox = styled.div`
  flex: 1;
`;

function About() {
  return (
    <Wrapper>
      <SectionBanner>
        <Overlay className="container">
          <div>
            <h1>DESIGN AND HERITAGE</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum
            </p>
          </div>
        </Overlay>
      </SectionBanner>

      <SectionIntro className="section container">
        <div>
          <h2 className="section_subtitle">THE START OF</h2>
          <h3 className="section_title">MANY STORIES</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>
        </div>
        <ImgWrapper className="flex-center">
          <img src="/brand.png" />
        </ImgWrapper>
      </SectionIntro>

      <Section className="section container">
        <SectionTitle>STORY BEHING THE BRAND</SectionTitle>

        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
          ut laoreet dolore magna aliquam erat volutpat.
        </p>
        <Swiper
          spaceBetween={24}
          modules={[Navigation]}
          loop={true}
          slidesPerView={"auto"}
          grabCursor={true}
          className="storySwiper"
        >
          {stories.map((item, idx) => (
            <SwiperSlide key={idx}>
              <InstaStory>
                <img src={item.imgUrl} alt="" />
              </InstaStory>
            </SwiperSlide>
          ))}
          <SwiperNavButtons autoScroll={true} />
        </Swiper>
      </Section>

      <SectionFeatures className="section container flex-center">
        {features.map((feature) => (
          <div>
            <img src={feature.imgUrl} alt="" />
            <h3>{feature.label}</h3>
          </div>
        ))}
      </SectionFeatures>

      <SectionFounder className="section">
        <SectionTitle>Face Behind The Brand</SectionTitle>
        <FeatureContainer className="container">
          <FounderTextBox>
            <h4 className="section_subtitle">MEET OUR FOUNDER</h4>
            <h3 className="section_title">MANISHA MODY</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit, sed diam nonummy
            </p>
            <p>
              nibh euismod tincidunt ut laoreet dolore magna aliquam erat
              volutpat.Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat volutpat. Ut{" "}
            </p>
          </FounderTextBox>
          <FounderImgBox>
            <div>
              <img src="/placeholder.webp" />
            </div>
          </FounderImgBox>
        </FeatureContainer>
      </SectionFounder>
    </Wrapper>
  );
}

export default About;
