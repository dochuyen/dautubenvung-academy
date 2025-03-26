import styled from "styled-components";
export const StyledOffPage = styled.div<any>`
  @media (min-width: 800px) {
    .box-in-up {
      display: flex;
      margin-top: 50px;
      padding-bottom: 40px;
      border-bottom: 1px dotted #999;
    }
  }
  @media (max-width: 800px) {
    .box-in-up {
      margin-top: 50px;
      padding-bottom: 40px;
      border-bottom: 1px dotted #999;
      display: grid;
    }
  }
`;
