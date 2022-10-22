import styled from 'styled-components'
import { Link } from 'react-router-dom'

const DefaultStyledLink = styled(Link)`
  --primary-dec: ${({ theme }) => theme.primaryDecorativeColor};
  --primary-bg: ${({ theme }) => theme.primaryBackgroundColor};

  text-decoration: none;
  max-width: 1000px;
  color: black;
  font-weight: bold;
  padding: 0.5rem 0.75rem;
  border: 0.25rem solid var(--primary-dec);
  background-color: var(--primary-bg);
  letter-spacing: 1px;
  display: block;
  text-align: center;
  box-sizing: border-box;

  @media (max-width: 767px) {
    margin: 0 auto;
  }
  @media (min-width: 768px) {
  }
`

const StyledLink = styled(DefaultStyledLink)(({ style }) => style)

export { StyledLink }
