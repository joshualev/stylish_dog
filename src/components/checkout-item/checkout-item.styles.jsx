import styled from 'styled-components';

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

    img { 
      width: 100%;
      height: 100%;
    }
`;

export const Name = styled.span``;

export const Price = styled.span``;

export const Quantity = styled.span`
  display: flex; 

    .arrow {
      cursor: pointer;
    }

    .value {
      margin: 0 10px;
    }
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100%;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  ${Price},
  ${Quantity},
  ${Name} {
    width: 23%;
  }
`;

export const RemoveButton = styled.span`
  padding-left: 12px;
  cursor: pointer;
`;