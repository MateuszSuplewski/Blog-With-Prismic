import styled from 'styled-components'
import { Link } from 'react-router-dom'

const DefaultStyledBrowseLinkWrapper = styled.div`
    box-sizing: border-box;
    background: #93B7BE;
    display: flex;
    justify-content: center;
    padding: 20px 20px;
    margin: 0 auto;
    max-width: 1000px;
`

const StyledBrowseLinkWrapper = styled(DefaultStyledBrowseLinkWrapper)(
  ({ style }) => style
)

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  letter-spacing: .2rem;
`

export { StyledBrowseLinkWrapper, StyledLink }
