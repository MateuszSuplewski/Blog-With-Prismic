import styled from 'styled-components'
import { Link } from 'react-router-dom'

const DefaultStyledMoreAboutLink = styled(Link)`
    --primary-dec: ${({ theme }) => theme.primaryDecorativeColor};
    --primary-bg: ${({ theme }) => theme.primaryBackgroundColor};
  text-decoration: none;
  color: black;
  font-weight: bold;
  padding: 8px 12px;
  border: 3px solid var(--primary-dec);
  background-color: var(--primary-bg);

  @media (max-width: 767px) {
    margin: 0 auto;
  }
  @media (min-width: 768px){

  }
`

const StyledMoreAboutLink = styled(DefaultStyledMoreAboutLink)(
  ({ style }) => style
)

export { StyledMoreAboutLink }
