import styled from "styled-components";

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const ProductImage = styled.div`
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    width: 200px;
    height: 200px;
  }
  p {
    text-align: center;
    &.product-price {
      color: ${(props) => props.theme.color};
    }
  }
`;
export const UpdateButtonStyled = styled.button`
  color: green;
`;
