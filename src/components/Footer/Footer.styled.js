import styled from 'styled-components'

const DefaultStyledFooter = styled.footer`
  --primary-bg: ${({ theme }) => theme.primaryBackgroundColor};

  box-sizing: border-box;
  width: 100%;
  padding: 1.25rem 10vw;
  background: var(--primary-bg);
`

const StyledFooter = styled(DefaultStyledFooter)(({ style }) => style)

const Copyright = styled.p`
  text-align: center;
`

export { StyledFooter, Copyright }
