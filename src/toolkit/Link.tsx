import React from "react";
import styled from "styled-components";
import Text from "./Text";
import { LinkProps } from "types";

const StyledLink = styled(Text)<LinkProps>`
  display: flex;
  align-items: center;
  width: fit-content;
  color: #FFF;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

const Link: React.FC<LinkProps> = ({ external, ...props }) => {
  const internalProps = {};
  return <StyledLink as="a" bold {...internalProps} {...props} />;
};

Link.defaultProps = {
  color: "primary",
};

export default Link;
