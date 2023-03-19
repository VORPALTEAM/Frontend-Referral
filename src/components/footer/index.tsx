import React from 'react';
import styled from "styled-components";
import { footerLinks } from './FooterConfig'
import {
    StyledFooter,
    StyledIconMobileContainer,
    StyledList,
    StyledListItem,
    StyledText,
    StyledToolsContainer,
  } from "./styles";
import { Flex, Link } from 'toolkit';

interface FooterProps {
    items: typeof footerLinks
}

const FooterLink = styled(Link)`
  a {
     color: #FFFFFF;
     text-decoration: none;
  }
`


const Footer: React.FC<FooterProps> = ({
    items = footerLinks
  }) => {
    return (
      <StyledFooter p={["40px 16px", null, "56px 40px 32px 40px"]} justifyContent="center">
        <Flex flexDirection="column" width={["100%", null, "calc(100% - 40px)"]}>
          <Flex
            order={[2, null, 1]}
            flexDirection={["column", null, "row"]}
            justifyContent="space-between"
            alignItems="flex-start"
            mb={["42px", null, "36px"]}
          >
            {items?.map((item) => (
              <StyledList key={item.label}>
                <StyledListItem>{item.label}</StyledListItem>
                {item.items?.map(({ label, href, isHighlighted = false }) => (
                  <StyledListItem key={label}>
                    {href ? (
                      <FooterLink
                        href={href}
                        target="_blank"
                        rel="noreferrer noopener"
                        color="#FFFFFF"
                        bold={false}
                      >
                        {label}
                      </FooterLink>
                    ) : (
                      <StyledText>{label}</StyledText>
                    )}
                  </StyledListItem>
                ))}
              </StyledList>
            ))}
          </Flex>
        </Flex>
      </StyledFooter>
    );
  };

export default Footer