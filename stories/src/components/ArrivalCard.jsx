import styled from "styled-components";

const Wrapper = styled.article`
  width: 100%;
`;

const ImgBox = styled.div`
  margin-bottom: 12px;
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

const Price = styled.p`
  text-align: left;
`;

function ArrivalCard({ item }) {
  return (
    <Wrapper>
      <ImgBox>
        <img src={item.imgUrl || "/placeholder.webp"} />
      </ImgBox>
      <Details>
        <Name>{item.name}</Name>
        <Price>
          <span>₹ {item.price}</span>
        </Price>
      </Details>
    </Wrapper>
  );
}

export default ArrivalCard;
