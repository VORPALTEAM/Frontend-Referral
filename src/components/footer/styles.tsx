import styled from "styled-components";

export const StyledFooter = styled.div`
  display: flex;
  background: #000117;
`;

export const StyledList = styled.ul`
  list-style: none;
  margin-bottom: 40px;

  @media screen and (min-width: 852px) {
    margin-bottom: 0px;
  }
`;

export const StyledListItem = styled.li`
  font-family: Roboto;
  font-weight: 300;
  font-size: 16px;
  margin-bottom: 8px;
  text-transform: capitalize;

  &:first-child {
    color: #FFFFFF;
    font-family: RoundsBlack;
    font-size: 18px;
    font-weight: 400;
    text-transform: uppercase;
  }
`;

export const StyledIconMobileContainer = styled.div`
  margin-bottom: 24px;
`;

export const StyledToolsContainer = styled.div`
  display: flex;
  border-color: #383241;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-style: solid;
  padding: 24px 0;
  margin-bottom: 24px;

  @media screen and (min-width: 576px) {
    border-top-width: 0;
    border-bottom-width: 0;
    padding: 0 0;
    margin-bottom: 0;
  }
`;

export const StyledText = styled.span`
  color: #FFFFFF;
`;
