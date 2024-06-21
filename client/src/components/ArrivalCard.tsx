import styled from "styled-components";

const Wrapper = styled.article`
  width: 100%;
`;

const ImgBox = styled.div`
  height: 600px;
  margin-bottom: 12px;

  img {
    height: 100%;
    object-fit: cover;
  }
`;
const Details = styled.div`
  color: var(--primary-color);
  font-size: 1.25rem;
  text-align: center;

  p {
    color: inherit;
  }
`;

const Name = styled.p``;

const Price = styled.p``;

function ArrivalCard({ item }) {
  return (
    <Wrapper>
      <ImgBox>
        <img src={item.imgUrl || "/placeholder.webp"} />
      </ImgBox>
      <Details>
        <Name>{item.name}</Name>
        <Price>{item.price} INR</Price>
      </Details>
    </Wrapper>
  );
}

export default ArrivalCard;
