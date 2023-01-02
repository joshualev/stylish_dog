import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  img {

    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 10px;

    border-radius: 20px;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;


  }

  @media screen and (max-width: 800px) {
    margin-bottom: 10px;

    button {
      display: block;
      opacity: 0.5;
      min-width: unset;
      padding: 0 10px;
    }

    &:hover {
      img {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  .name {
    width: 90%;
    margin-bottom: 15px;
  }

  .price {
    width: 10%;
  }

  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
`;