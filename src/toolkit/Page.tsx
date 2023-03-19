import React from 'react'
import styled from 'styled-components'
import Container from './Container'
import { mediaQueries } from 'config'

const StyledPage = styled(Container)`
  min-height: calc(100vh - 64px);
  padding-top: 16px;
  padding-bottom: 16px;

  ${mediaQueries.sm} {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  ${mediaQueries.lg} {
    padding-top: 32px;
    padding-bottom: 32px;
  }
`


interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  symbol?: string
}

const Page: React.FC<PageProps> = ({ children, symbol, ...props }) => {
  return (
      <StyledPage {...props}>{children}</StyledPage>
  )
}

export default Page
