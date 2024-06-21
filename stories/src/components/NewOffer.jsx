import styled from "styled-components";

const Wrapper = styled.div`
  background-color: var(--tertiary-color);
  text-align: center;
  color: var(--primary-color);
  letter-spacing: 1.5px;
  padding: 4px 0;

  p {
    line-height: 1;

    span {
      font-weight: bold;
      text-transform: uppercase;
      font-style: italic;
    }
  }
`;

function NewOffer() {
  return (
    <Wrapper>
      <p>
        Use code <span>Mani10</span> for <span>10% off</span> on first time
        purchase
      </p>
    </Wrapper>
  );
}

export default NewOffer;
